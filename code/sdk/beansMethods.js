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
