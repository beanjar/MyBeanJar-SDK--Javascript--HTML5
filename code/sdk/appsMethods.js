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