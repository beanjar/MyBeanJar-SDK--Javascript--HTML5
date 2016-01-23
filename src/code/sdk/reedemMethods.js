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

