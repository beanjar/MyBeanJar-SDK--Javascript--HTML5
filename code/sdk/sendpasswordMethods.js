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


