var tokenUser = {
    user: "ryanfister3",
    password: "40f4d87250c70278580bc8fb47e5caaa"
};

function test_winners() {

    log_result = function(which_callback,result,winners){
        console.log("callback "+which_callback+". result of winners is ")
        console.log("callback "+which_callback+". " + result);
        console.log("callback "+which_callback+". " + "winners is ");
        console.log("callback "+which_callback+". ");
        console.log(winners);
        console.log("callback "+which_callback+". winners - end of callback function");
     }

    callback0 = function(result,winners) {
       log_result("0",result,winners);
    };
    
    callback1 = function(result,winners) {
       log_result("1",result,winners);
    };

    callback2 = function(result,winners) {
       log_result("2",result,winners);
    };

    get_winners("3", callback0);
    get_winners("1", callback1);
    get_winners("-3", callback2);
}

// we use token user here
function test_apps() {

    log_result = function(which_callback,result,apps){
        console.log("callback "+which_callback+". result of apps is ");
        console.log("callback "+which_callback+". "+result);
        console.log("callback "+which_callback+". apps is ");
        console.log("callback "+which_callback+". ");
        console.log(apps);
        console.log("callback "+which_callback+". apps - end of callback function");
    }

    callback0 = function(result,apps) {
        log_result("0",result,apps);
    };
    
    callback1 = function(result,apps) {
        log_result("1",result,apps);
    };
    
    callback2 = function(result,apps) {
        log_result("2",result,apps);
    };
    
    get_apps(tokenUser.user, tokenUser.password, "", callback0);
    get_apps(tokenUser.user, tokenUser.password, "3", callback1);
    get_apps(tokenUser.user, tokenUser.password, "1", callback2);
}

// we use token user here
function test_sponsors() {

    log_result = function(which_callback,result,sponsors){
        console.log("callback "+which_callback+". result of sponsors is ");
        console.log("callback "+which_callback+". "+result);
        console.log("callback "+which_callback+". sponsors is ");
        console.log(sponsors);
        console.log("callback "+which_callback+". sponsors - end of callback function");
    }

    callback0 = function(result,sponsors) {
        log_result("0",result,sponsors);
    };
    
    callback1 = function(result,sponsors) {
        log_result("1",result,sponsors);
    };
    
    callback2 = function(result,sponsors) {
        log_result("2",result,sponsors);
    };
    
    callback3 = function(result,sponsors) {
        log_result("3",result,sponsors);
    };
    
    callback4 = function(result,sponsors) {
        log_result("4",result,sponsors);
    };

    get_sponsors(tokenUser.user, tokenUser.password, "8", callback0);
    get_sponsors(tokenUser.user, tokenUser.password, "25", callback1);
    get_sponsors(tokenUser.user, "wrongpassword", "20", callback2);
    get_sponsors(tokenUser.user, tokenUser.password, "-5", callback3);
    get_sponsors("wrongusername", tokenUser.password, "20", callback4);
    
}

function test_sponsor_locations(){
    log_result = function(which_callback,result,message){
        console.log("callback "+which_callback+". result of sponsor locations is ");
        console.log("callback "+which_callback+". " + result);
        console.log("callback "+which_callback+". message of sponsor locations is ");
        console.log(message);
        console.log("callback "+which_callback+". sponsors location - end of callback function");
    }

    callback0 = function(result,message){
        log_result("0",result,message);
    };
    
    callback1 = function(result,message){
        log_result("1",result,message);
    };
    
    get_locations_for_sponsor(tokenUser.user,tokenUser.password,"a8baa56554f96369ab93e4f3bb068c22",callback0);
    get_locations_for_sponsor("lukasz123","lukasz123","a8baa56554f96369ab93e4f3bb068c22",callback1);
}

function test_beans() {
    
    log_result = function(which_callback,result,beans){
        console.log("callback "+which_callback+". result of beans is ");
        console.log("callback "+which_callback+". " + result);
        console.log("callback "+which_callback+". beans is ");
        console.log(beans);
        console.log("callback "+which_callback+". beans - end of callback function"); 
    }
    
    callback0 = function(result,beans) {
        log_result(0,result,beans);
    };
    
    callback1 = function(result,beans) {
        log_result(1,result,beans);
    };
    
    callback2 = function(result,beans) {
        log_result(2,result,beans);
    };
    
    callback3 = function(result,beans) {
        log_result(3,result,beans);
    };
    
    callback4 = function(result,beans) {
        log_result(4,result,beans);
    };

    get_beans("hujemuje", "abcdef", "0", "0", callback0);
    get_beans("hujkjkemuje", "abcdef", "0", "0", callback1);
    get_beans("hujemuje", "abcdekllkf", "0", "0", callback2);
    get_beans("hujemuje", "abcdef", "0", "1", callback3);
    get_beans("hujemuje", "abcdef", "0", "2", callback4);
}

function test_categories() {
    log_result = function(which_callback,result,categories){
        console.log("callback "+which_callback+". result of categories is ");
        console.log("callback "+which_callback+". "+result);
        console.log("callback "+which_callback+". categories is ");
        console.log(categories);
        console.log("callback "+which_callback+". categories - end of callback function");

    };

    callback0 = function(result,categories) {
        log_result("0",result,categories);
    };
    
    callback1 = function(result,categories) {
        log_result("1",result,categories);
    };
    
    callback2 = function(result,categories) {
        log_result("2",result,categories);
    };
    
    callback3 = function(result,categories) {
        log_result("3",result,categories);
    };
    
    callback4 = function(result,categories) {
        log_result("4",result,categories);
    };

    get_categories(tokenUser.user, tokenUser.password, callback0);
    get_categories("wrongusername", tokenUser.password, callback1);
    get_categories(tokenUser.user, "wrongpassword", callback2);
    get_categories("wrongusername", "wrongpassword", callback3);
}

function test_award() {

    log_result = function(which_callback,result,award){
        console.log("callback "+which_callback+". result of award is ");
        console.log("callback "+which_callback+". "+result);
        console.log("callback "+which_callback+". award is ");
        console.log(award);
        console.log("callback "+which_callback+". award - end of callback function");
    }

    callback0 = function(result,award) {
        log_result("0",result,award);
    };
    
    callback1 = function(result,award) {
        log_result("1",result,award);
    };
    
    callback2 = function(result,award) {
        log_result("2",result,award);
    };
    
    callback3 = function(result,award) {
        log_result("3",result,award);
    };
    
    callback4 = function(result,award) {
        log_result("4",result,award);
    };

    get_award("hujemuje", "abcdef", "e4da3b7fbbce2345d7772b0674a318d5", callback0);
    get_award("wrongpasswords", "abcdef", "e4da3b7fbbce2345d7772b0674a318d5", callback1);
    get_award("hujemuje", "abcdef", "wrongappkey", callback2);
    get_award("hujemuje", "abcdefsfsaf", "e4da3b7fbbce2345d7772b0674a318d5", callback3);
    get_award("hujemuje", "abcdef", "a87ff679a2f3e71d9181a67b7542122c", callback4);
}

function test_register() {
    
    log_result = function(which_callback,result,message){
        console.log("callback " + which_callback + ". result of register is ");
        console.log("callback " + which_callback + ". " + result);
        console.log("callback " + which_callback + ". register is ");
        console.log(message);
        console.log("callback " + which_callback + ". register - end of callback function");
    };
    
    callback0 = function(result,message){
        log_result("0",result,message);
    };
    
    callback1 = function(result,message){
        log_result("1",result,message);
    };
    
    callback2 = function(result,message){
        log_result("2",result,message);
    };
    
    callback3 = function(result,message){
        log_result("3",result,message);
    };
    
    callback4 = function(result,message){
        log_result("4",result,message);
    };

    var categories = ["c4ca4238a0b923820dcc509a6f75849b","c81e728d9d4c2f636f067f89cc14862c","eccbc87e4b5ce2fe28308fd9f2a7baf3"];
    
    register_user("h34u78723je", "abcdef","asiadsf233s123iu532235i@f23as.pl","12414242",categories, callback0);
    register_user("lukasz123", "lukasz123","asiassf23ai34ui@fsadas.pl","12241242",categories, callback1);
    register_user("4353m34ujfs6e", "abcdef","asi323176a4s23523iui@fsadas.pl","12413242",categories, callback2);
    register_user("hu344655332uje", "abasdcdef","asia76s32132iu23i@fsadas.pl","1241242",categories, callback3);
    register_user("hu234u7s52331je", "abcdsd5ef","asia76s32132iu23i@fsadas.pl","1241242",categories, callback4);  
}

function test_sendpassword(){
    
    log_result = function(which_callback,result,message){
        console.log("callback "+which_callback+". result of sendpassword is ");
        console.log("callback "+which_callback+". " + result);
        console.log("callback "+which_callback+". message of sendpassword is ");
        console.log("callback "+which_callback+". " + message);
    }
    
    callback0 = function(result,message){
        log_result("0",result,message);
    };
    
    callback1 = function(result,message){
        log_result("1",result,message);
    };
    
    callback2 = function(result,message){
        log_result("2",result,message);
    };
    
    callback3 = function(result,message){
        log_result("3",result,message);
    };
    
    callback4 = function(result,message){
        log_result("4",result,message);
    };

    send_password("hujemuje", callback0);
    send_password("lukasz123", callback1);
    send_password("lukasz1assa23", callback2);
    send_password("", callback3);
    send_password("1429012998dj288", callback4);
}

function test_deletebean(){
    log_result = function(which_callback,result,message){
        console.log("callback "+which_callback+". result of deletebean is ");
        console.log("callback "+which_callback+". " + result);
        console.log("callback "+which_callback+". message of deletebean is ");
        console.log("callback "+which_callback+". " + message);
    }
    
    callback0 = function(result,message){
        log_result("0",result,message);
    };
    
    callback1 = function(result,message){
        log_result("1",result,message);
    };
    
    callback2 = function(result,message){
        log_result("2",result,message);
    };
    
    callback3 = function(result,message){
        log_result("3",result,message);
    };
    
    callback4 = function(result,message){
        log_result("4",result,message);
    };
  
    delete_bean("lukasz123", "lukasz123", "b4681a619cf012318eed690452faeb0e94f", callback0);
    delete_bean("lukasasz1233", "abasdcdef", "b4681a123619cf018eed690452faeb0e94f", callback1);
    delete_bean("123dsaa3", "abcddaef", "b4681213a619cf018eed690452faeb0e94f", callback2);
    delete_bean("asd123fsa", "abcdadef", "b4681adsa619cf018eed690452faeb0e94f", callback3);
}

function test_reedembean() {
    
    log_result = function(which_callback, result, message){
        console.log("callback "+which_callback+". result of reedembean is ");
        console.log("callback "+which_callback+". "+result);
        console.log("callback "+which_callback+". message of reedembean is ");
        console.log("callback "+which_callback+". "+message);
    }
    
    callback0 = function(result, message){
        log_result("0",result,message);
    };
    
    callback1 = function(result, message){
        log_result("1",result,message);
    };
    
    callback2 = function(result, message){
        log_result("2",result,message);
    };
    
    reedem_bean("lukasz123", "lukasz123", "6b49323020asfassf5f780e1bcasf26945df7481e5", callback0);
    reedem_bean("wrongusernamedsa14", "abcdef", "6b493230205f780e1bcasfas26945df7481e5", callback1);
    reedem_bean("lukasz123", "wrongpassword42ds", "6b493230205f780e1bc26945sfafsadf7481e5", callback2);
}

function test_authenticateuser() {
    log_result = function(which_callback,result,message){
        console.log("callback "+which_callback+". result of authenticateuser is ");
        console.log("callback "+which_callback+". " + result);
        console.log("callback "+which_callback+". message of authenticateuser is ");
        console.log("callback "+which_callback+". " +message);
    }

    callback0 = function(result,message) {
        log_result("0",result,message);
    };
    
    callback1 = function(result,message) {
        log_result("1",result,message);
    };
    
    callback2 = function(result,message) {
        log_result("2",result,message);
    };
    
    callback3 = function(result,message) {
        log_result("3",result,message);
    };
    
    callback4= function(result,message) {
        log_result("4",result,message);
    };

    authenticate_user("lukasz123", "lukasz123", callback0);
    authenticate_user("lukasz12asfas3", "lukasz123", callback1);
    authenticate_user("lukasz123", "lukaszasfas123", callback2);
    authenticate_user("", "lukasz123", callback3);
    authenticate_user("", "", callback4);
}

function test_validateuser() {
    
    log_result = function(which_callback, result,message){
        console.log("callback "+which_callback+". result of validateuser is ");
        console.log("callback "+which_callback+". " + result);
        console.log("callback "+which_callback+". message of validateuser is ");
        console.log("callback "+which_callback+". " + message);
    };
    
    callback0 = function(result,message) {
        log_result("0",result,message);
    };
    
    callback1 = function(result,message) {
        log_result("1",result,message);
    };
    
    callback2 = function(result,message) {
        log_result("2",result,message);
    };
    
    callback3 = function(result,message) {
        log_result("3",result,message);
    };
    
    callback4 = function(result,message) {
        log_result("4",result,message);
    };
    
    validate_user("hujemuje", callback0);
    validate_user("lukasz123", callback1);
    validate_user("wrongusername", callback2);
    validate_user("", callback3);
    validate_user("-2103021809321", callback4);
}