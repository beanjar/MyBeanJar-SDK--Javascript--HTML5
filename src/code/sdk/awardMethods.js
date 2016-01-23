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
        callback(result,award);
    } else {
        result = STATUS_FAIL;
        callback(result,award);
    }
}


