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