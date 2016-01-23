/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Authentication Response
 * ░░░░▒▒▓▓
*/

function parse_authenticateuser_and_callback(data, callback){

   if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
   }
    
    var json = JSON.parse(data);
    var status = json.status;
    var message = json.response.message;
    var email = json.response.email;

    if (email != '') { 
    sessionStorage.setItem('email',email);
    $('#email').val(email);
    } 

    else {
        sessionStorage.removeItem('email') ;    
    }
    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message,email);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}