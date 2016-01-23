function request_to_api(callback, resource, method, params, url) {
    var xhr = createCORSRequest("POST", url);
    xhr.withCredentials = true;
    if (!xhr) {
        alert('CORS not supported');
        return "corsNotSupported";
    }
    
    // Response handlers.
    xhr.onload = function() {
        var data = xhr.responseText;

        if (method === "winners"){
            parse_winners_and_callback(data, callback);
        } else if (method === "apps") {
            parse_apps_and_callback(data, callback);
        } else if (method === "sponsors"){
            parse_sponsors_and_callback(data, callback);
        } else if(method === "sponsorlocations"){
            parse_sponsor_locations_and_callback(data, callback);
        } else if (method === "beans"){
            parse_beans_and_callback(data, callback);
        } else if (method === "categories"){
            parse_categories_and_callback(data, callback);
        } else if (method === "awardcoupon"){
            parse_award_and_callback(data, callback);
        } else if (method === "registerUser"){
            parse_register_and_callback(data, callback);
        } else if (method === "sendpassword"){
            parse_sendpassword_and_callback(data, callback);
        } else if (method === "deletebean"){
           parse_deletebean_and_callback(data, callback);
        } else if (method === "redeembean"){
           parse_redeembean_and_callback(data, callback);
        } else if (method === "authenticateUser"){
            parse_authenticateuser_and_callback(data, callback);
        } else if (method === "validateuser"){
            parse_validateuser_and_callback(data, callback);
        }
    };

    xhr.onerror = function() {
        alert('There was an error making the request.');
    };

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({resource: resource, method: method, params: params}));

    return "error";
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}