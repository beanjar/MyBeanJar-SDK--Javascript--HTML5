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