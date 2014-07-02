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