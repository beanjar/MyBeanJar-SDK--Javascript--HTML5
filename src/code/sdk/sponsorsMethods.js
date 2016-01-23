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
}
;

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


