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

