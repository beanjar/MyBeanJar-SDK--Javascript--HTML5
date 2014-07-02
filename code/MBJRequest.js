var tokenUser = {
    user: "ryanfister3",
    password: "40f4d87250c70278580bc8fb47e5caaa"
};

var API_URL = "https://api.mybeanjar.com/json/services";
var INTERNAL_SERVER_ERROR = "Internal Server Error";
var STATUS_SUCCESS = "Status success";
var STATUS_FAIL  = "Status fail";

function authenticate_user(username,password,callback) {
    var params = {
        "username": username,
        "password": MD5(password)
    }

    return request_to_api(callback, "v2services", "authenticateUser", params, API_URL);
}

function delete_bean(username, password, beankey, callback) {
    var params = {
        "username": username,
        "password": MD5(password),
        "beankey": beankey
    }

    return request_to_api(callback, "v2services", "deletebean", params, API_URL);
}

function get_apps(username, password, limit_value, callback) {
    /*
     *  should be this but atm we get apps for token user so we use password without md5
     */

//    var params = {
//        username: username,
//        password: MD5(password),
//        limit: limit_value
//    }

    var params = {
        username: username,
        password: password,
        limit: limit_value
    }

    return request_to_api(callback, "v2services", "apps", params, API_URL);
}

function get_award(username, password, appkey, callback) {

    var params = {
        username: username,
        password: MD5(password),
        appkey: appkey
    }

    return request_to_api(callback, "v2services", "awardcoupon", params, API_URL);
}


function get_beans(username, password, limit_value, sort_by, callback) {

    var params = {
        username: username,
        password: MD5(password),
        limit: limit_value,
        sortby: sort_by
    }

    return request_to_api(callback, "v2services", "beans", params, API_URL);
}

function get_categories(username, password, callback) {

    /*
     *  should be this but atm we get apps for token user so we use password without md5
     */

//    var params = {
//        username: username,
//        password: MD5(password)
//    }

    var params = {
        username: username,
        password: password
    }

    return request_to_api(callback, "v2services", "categories", params, API_URL);
}

function get_locations_for_sponsor(username,password,sponsorkey,callback){
    
    var params = {
        username: username,
        password: password,
        sponsorkey: sponsorkey,
    };
    
    return request_to_api(callback, "v2services", "sponsorlocations", params, API_URL); 
}

function get_sponsors(username, password, limit_value, callback) {

    /*
     *  should be this but atm we get apps for token user so we use password without md5
     */

//    var params = {
//        username: username,
//        password: MD5(password),
//        limit: limit_value
//    }

    var params = {
        username: username,
        password: password,
        limit: limit_value,
    }

    return request_to_api(callback, "v2services", "sponsors", params, API_URL);
}

function get_winners(limit_value, callback) {

    var params = {
        limit: limit_value
    };

    return request_to_api(callback, "v2services", "winners", params, API_URL);
}

function reedem_bean(username, password, beankey, callback) {
    var params = {
        "username": username,
        "password": MD5(password),
        "beankey": beankey
    }
    
    return request_to_api(callback, "v2services", "redeembean", params, API_URL);
}

function register_user(username, password, email, zipcode, categories, callback) {

    var params = {
        "username": username,
        "password": MD5(password),
        "email": email,
        "zipcode": zipcode,
        "categories": categories
    }

    return request_to_api(callback, "v2services", "registerUser", params, API_URL);
}

function send_password(username, callback) {

    var params = {
        "username": username
    }

    return request_to_api(callback, "v2services", "sendpassword", params, API_URL);
}

function validate_user(username,callback){
    
    var params = {
    "username":username
    }

    return request_to_api(callback, "v2services", "validateuser", params, API_URL);
}

function request_to_api(callback, resource, method, params, url) {
    var xhr = createCORSRequest("POST", url);
    xhr.withCredentials = true;
    if (!xhr) {
        alert('CORS not supported');
        return "corsNotSupported";
    }
    
    // Response handlers.
    xhr.onload = function() {
        var data = xhr.responseText;

        if (method === "winners"){
            parse_winners_and_callback(data, callback);
        } else if (method === "apps") {
            parse_apps_and_callback(data, callback);
        } else if (method === "sponsors"){
            parse_sponsors_and_callback(data, callback);
        } else if(method === "sponsorlocations"){
            parse_sponsor_locations_and_callback(data, callback);
        } else if (method === "beans"){
            parse_beans_and_callback(data, callback);
        } else if (method === "categories"){
            parse_categories_and_callback(data, callback);
        } else if (method === "awardcoupon"){
            parse_award_and_callback(data, callback);
        } else if (method === "registerUser"){
            parse_register_and_callback(data, callback);
        } else if (method === "sendpassword"){
            parse_sendpassword_and_callback(data, callback);
        } else if (method === "deletebean"){
           parse_deletebean_and_callback(data, callback);
        } else if (method === "redeembean"){
           parse_redeembean_and_callback(data, callback);
        } else if (method === "authenticateUser"){
            parse_authenticateuser_and_callback(data, callback);
        } else if (method === "validateuser"){
            parse_validateuser_and_callback(data, callback);
        }
    };

    xhr.onerror = function() {
        alert('There was an error making the request.');
    };

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({resource: resource, method: method, params: params}));

    return "error";
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

var apps = [];
var appsArray = [];
var numberOfApps;

function parse_apps(apps) {
    for (var i = 0; i < numberOfApps; i++) {
        push_to_apps(apps, i);
    }

    return apps;
}

function push_to_apps(apps, i) {
    apps.push({
        appkey: appsArray[i].appkey,
        appstoreurl: appsArray[i].appstoreurl,
        description: appsArray[i].description,
        iconurl: appsArray[i].iconurl,
        name: appsArray[i].name,
        publisher: appsArray[i].publisher,
        publisherkey: appsArray[i].publisherkey,
        publisherurl: appsArray[i].publisherurl
    });
}

function parse_apps_and_callback(data, callback) {  
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,apps);
        return;
    }
    
    apps = [];
    appsArray = [];
    var json = JSON.parse(data);
    var status = json.status;
    var result;
    
    if (status === 1) {
        appsArray = json.response.apps;
        numberOfApps = appsArray.length;
        parse_apps(apps);
        result = STATUS_SUCCESS;
        callback(result,apps);
    } else {
        result = STATUS_FAIL;
        callback(result,apps);
    }
}

function parse_authenticateuser_and_callback(data, callback){
    
   if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
   }
    
    var json = JSON.parse(data);
    var status = json.status;
    var message = json.response.message;
    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}

var award = [];
var currentWinArray = [];

function parse_award(award) {

    award.push({
        awarded: currentWinArray.awarded,
        beankey: currentWinArray.beankey,
        imageurl: currentWinArray.imageurl,
        message: currentWinArray.message
    });

    return award;
}

function parse_award_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,award);
        return;
    }
    
    award = [];
    awardArray = [];
    var json = JSON.parse(data);
    console.log("start get json");
    console.log(json);
    var status = json.status;


    var result;
    if (status === 1) {
        awardArray = json.response;
        parse_award(award);
        result = STATUS_SUCCESS;
        callback(result,awad);
    } else {
        result = STATUS_FAIL;
        callback(result,award);
    }
}


var beans = [];
var beansArray = [];
var numberOfBeans;

function parse_beans(beans) {
    for (var i = 0; i < numberOfBeans; i++) {
        push_to_beans(beans, i);
    }

    return beans;
};

function push_to_beans(beans,i) {
    beans.push({
        beankey: beansArray[i].beankey,
        expirationdate: beansArray[i].expirationdate,
        game: beansArray[i].game,
        geocodekey: beansArray[i].geocodekey,
        longdescription: beansArray[i].longdescription,
        redeembarcodeurl: beansArray[i].redeembarcodeurl,
        redemptionurl: beansArray[i].redemptionurl,
        redemptionvalidation: beansArray[i].redemptionvalidation,
        shortdescription: beansArray[i].shortdescription,
        sponsorkey: beansArray[i].sponsorkey,
        sponsorlogourl: beansArray[i].sponsorlogourl,
        sponsorname: beansArray[i].sponsorname,
        sponsorurl: beansArray[i].sponsorurl,
        wondate: beansArray[i].wondate,
        days: get_expiration_days(beansArray[i].expirationdate)
    });
};

function parse_beans_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,beans);
        return;
    }
    
    beans = [];
    beansArray = [];
    var json = JSON.parse(data);
    var status = json.status;
    var result;
    
    if (status === 1) {
        beansArray = json.response.beans;
        numberOfBeans = beansArray.length;
        parse_beans(beans);
        result = STATUS_SUCCESS;
        callback(result,beans);
    } else {
        result = STATUS_FAIL;
        callback(result,beans);
    }
}

function get_expiration_days(date) {
    var expirationdate = new Date(date);
    var now = new Date();
    var timeDiff = Math.abs(expirationdate.getTime() - now.getTime());

    return Math.floor(timeDiff / (60 * 60 * 24 * 1000));
}

var categories = [];
var categoriesArray = [];
var numberOfCategories;

function parse_categories(categories) {
    for (var i = 0; i < numberOfCategories; i++) {
        push_to_categories(categories, i);
    }

    return categories;
}

function push_to_categories(categories, i) {
    categories.push({
        categorykey: categoriesArray[i].categorykey,
        name: categoriesArray[i].name,
    });
}

function parse_categories_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,categories);
        return;
    }
    
    categories = [];
    categoriesArray = [];
    var json = JSON.parse(data);
    var status = json.status;
    
    var result;
    if (status === 1) {
        categoriesArray = json.response.categories;
        numberOfCategories = categoriesArray.length;
        parse_categories(categories);
        result = STATUS_SUCCESS;
        callback(result,categories);
    } else {
        result = STATUS_FAIL;
        callback(result,categories);
    }
}

function parse_deletebean_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    var json = JSON.parse(data);
    
    console.log("this is deletebean json ");
    console.log(json);
    var status = json.status;
    var message = json.response.message;
    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}

var MD5 = function (string) {
 
    function RotateLeft(lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }
 
    function AddUnsigned(lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
     }
 
     function F(x,y,z) { return (x & y) | ((~x) & z); }
     function G(x,y,z) { return (x & z) | (y & (~z)); }
     function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }
 
    function FF(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function GG(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function HH(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function II(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };
 
    function WordToHex(lValue) {
        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        }
        return WordToHexValue;
    };
 
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
 
        for (var n = 0; n < string.length; n++) {
 
            var c = string.charCodeAt(n);
 
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
 
        return utftext;
    };
 
    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;
 
    string = Utf8Encode(string);
 
    x = ConvertToWordArray(string);
 
    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
    for (k=0;k<x.length;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }
 
    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
    return temp.toLowerCase();
}

function parse_redeembean_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    console.log("this is reedem data");
    console.log(data);
    var json = JSON.parse(data);
    console.log("this is reedem json ");
    console.log(json);
    var status = json.status;
    var result;
    var message = json.response.message;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}

function parse_register_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    var json = JSON.parse(data);
    console.log("this is register json ");
    console.log(json);
    var status = json.status;
    var message = json.response.message;
    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}

function parse_sendpassword_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,winners);
        return;
    }
    
    if(data == null || data == 'undefinied' || data == "" || data == "null"){
        result = STATUS_FAIL;
        callback(result,message);
        return;
    }
    
    console.log("this is data");
    console.log(data);
    var json = JSON.parse(data);
    console.log("this is json from send password");
    console.log(json);
    
    var status = json.status;
    var message = json.response.message;

    var result;
    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}

function parse_sponsor_locations_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    console.log("this is data from locations of sponsor" + data);
    
    var json = JSON.parse(data);
    var status = json.status;
    var message = data;

    var result;
    
    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}

var sponsors = [];
var sponsorArray = [];
var numberOfSponsors;

function parse_sponsors(sponsors) {
    for (var i = 0; i < numberOfSponsors; i++) {
        push_to_sponsors(sponsors, i);
    }

    return sponsors;
}

function push_to_sponsors(sponsors, i) {
    sponsors.push({
        id: sponsorArray[i].id,
        sponsorkey: sponsorArray[i].sponsorkey,
        name: sponsorArray[i].name,
        siteurl: sponsorArray[i].siteurl,
        logourl: sponsorArray[i].logourl,
        category: sponsorArray[i].category,
        description: sponsorArray[i].description,
        offer: sponsorArray[i].offer,
        geocodekey: sponsorArray[i].geocodekey,
    });
};

function parse_sponsors_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,winners);
        return;
    }
    
    sponsors = [];
    sponsorArray = [];
    
    var json = JSON.parse(data);
    var status = json.status;

    var result;
    if (status === 1) {
        sponsorArray = json.response.sponsors;
        numberOfSponsors = sponsorArray.length;
        parse_sponsors(sponsors);
        result = STATUS_SUCCESS;
        callback(result,sponsors);
    } else {
        result = STATUS_FAIL;
        callback(result,sponsors);
    }
}


function parse_validateuser_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    var json = JSON.parse(data);
    console.log("this is validate json ");
    console.log(json);
    var status = json.status;
    var message = json.response.message;

    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}

var winners = [];
var winnersArray = [];
var numberOfWinners;

function parse_winners(winners) {
    for (var i = 0; i < numberOfWinners; i++) {
        push_to_winners(winners, i);
    }

    return winners;
}

function push_to_winners(winners, i) {
    winners.push({
        appkey: winnersArray[i].appkey,
        appname: winnersArray[i].appname,
        sponsorlogourl: winnersArray[i].sponsorlogourl,
        username: winnersArray[i].username
    });
}

function parse_winners_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,winners);
        return;
    }

    winners = [];
    winnersArray = [];
    var json = JSON.parse(data);
    var status = json.status;
    var result;
    
    if (status === 1) {    
        winnersArray = json.response.winners;
        numberOfWinners = winnersArray.length;

        parse_winners(winners);
        result = STATUS_SUCCESS;
        callback(result,winners);
    } else {
        result = STATUS_FAIL;
        callback(result,winners);
    }
}
