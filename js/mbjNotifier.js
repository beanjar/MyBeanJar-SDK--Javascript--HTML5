var hardUser = "ryanfister3";
var hardPass = "40f4d87250c70278580bc8fb47e5caaa";

// var isplay = false;
// var mbjUserLoggedIn = false;
// var j=0;
// var imagelenght1 = '';
// var msgAwardSuccess = "Bean Awarded!";
// var msgMoreInfo = 'Visit <a href="http://mybeanjar.com">MyBeanJar.com</a> for more info.';
// var u = null;
// var p = "";
// var email = "";
// var result = null;
// var queuedBeans = 0;
// var footerCollapsed = false;
// var footerHeight = 0;

var loginStatusFlashing;
// var capsulePlaceholderImageURL = "img/mbj_payload_img.png";

// Timeouts
// var capsuleLidTimeout;
// var capsuleBodyTimeout;
// var capsulePayloadTimeout;
// var capsuleFadeOutTimeout;
// var image = null;
// var customids = '';
// var randomimg;
// var validpurchase = false;
// var catArray = null;

var debugMode = true;




//
//  MyBeanJar debug message handler
//

function mbjDebug(message) {
    if (typeof debugMode != 'undefined') {
        if (debugMode == true) {
            console.log(message);
        }
    }
};



//
//  Locally grants the user a queued Bean (to be redeemed for an actual Bean from the MyBeanJar server)
//

function mbjAddAwardBean() {
    
    // Get any queued Beans in session storage, add a new one, save new total to session storage
    queuedBeans = sessionStorage.getItem("queuedBeans");
    queuedBeans++;
    sessionStorage.setItem("queuedBeans", queuedBeans);

    mbjDebug("Queued Bean count: " + queuedBeans);

    // If no other modal is present, attempt to get award
    if (!jQuery( '#mbj_modal' ).length) {
        mbjAttemptAward();
    };
}



function mbjAttemptAward() {

    // Get session data relevant to login state
    username = sessionStorage.getItem("username");
    userLoggedIn = sessionStorage.getItem("mbjUserLoggedIn");

    
    // If user is logged in and username is valid, attempt to retrieve award bean
    if (userLoggedIn && username != 'null') {
        u = sessionStorage.getItem("username");
        p = 'password';

        if (sessionStorage.getItem("queuedBeans") > 0) {
            // for (i = queuedBeans; i > 0; i--) {
            //     get_award(u, p, mbjAppID, BeanAwardAlert);
            //     mbjDebug(queuedBeans + " queued Beans remaining...");
            // }
            mbjDebug("User logged in as " + u + " : " + p + ": " +mbjAppID +" Requesting award Bean");
            get_award(u, p, mbjAppID, BeanAwardAlert);
            queuedBeans = sessionStorage.getItem("queuedBeans");
            queuedBeans--;
            sessionStorage.setItem("queuedBeans", queuedBeans);
            mbjDebug(queuedBeans + " queued Beans remaining...");
        }
    } else {

        mbjAttemptYouvewon();
    }
}



function mbjAttemptLogin() {
    mbjDebug('Prompting user to log in...');
// Prompt for login/registration
//    jQuery('div.mbj_notification_container').fadeIn();
    jQuery( '#mbj_notification_container_youvewon' ).hide();
    MbjCreateOnboardModal();

// If login form is submitted...
    jQuery('#mbj_login_form').off('submit').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        u = jQuery('#mbj_form_u',this).val();
        p = jQuery('#mbj_form_p', this).val();
        p = '';
        mbjDebug("Attempting to log in... " + u);
        mbjDebug("Queued Bean count: " + queuedBeans);

        mbjAttemptAuthenticate(u, p);
        mbjDebug("Authentication method called.");

    });

// If registration form is submitted...
    jQuery('#mbj_registration_form').off('submit').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        u = jQuery('#mbj_form_reg_u', this).val();
        p = jQuery('#mbj_form_reg_p', this).val();
        p2 = jQuery('#mbj_form_reg_p2', this).val();
        email = jQuery('#mbj_form_reg_email', this).val();
        zip = jQuery('#mbj_form_reg_zip', this).val();

// Add checkbox items to array
/*        var catArray = [],
                inputs = document.getElementsByClassName("mbj_checkbox");

        for (var i = inputs.length - 1; i >= 0; i--) {
            if (inputs[i].type === "checkbox" && inputs[i].checked) {
                catArray.push(inputs[i].value);
            }
        }

        cats = catArray;*/
        mbjDebug("Attempting to register...");
        mbjDebug("Queued Bean count: " + queuedBeans);

        mbjAttemptRegistration();

    });

    jQuery('#mbj_notification_close').off('submit').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery( '#mbj_modal' )
                .fadeOut(500, "swing")
                .remove();

    });

    jQuery('div.mbj_notification_pane_selector').off('click').on('click', function(event) {

        jQuery('div.mbj_notification_pane_selector').each(function() {
            mbjDebug("Check!");

            if (jQuery(this).hasClass('active_selector')) {
                jQuery(this).removeClass('active_selector').addClass('inactive_selector');
            }
            else {
                jQuery(this).removeClass('inactive_selector').addClass('active_selector');
            }
            ;
        });

        jQuery('div.mbj_login_or_register').each(function() {

            if (jQuery(this).hasClass('active_pane')) {
                jQuery(this).removeClass('active_pane').addClass('inactive_pane');
            }
            else {
                jQuery(this).removeClass('inactive_pane').addClass('active_pane');
            }
            ;
        });

// if (jQuery('#mbj_register').hasClass('active_pane')){                                    // Commented out to temporarily resolve close button vanishing issue

//  jQuery('#mbj_notification_container_login')
//      .finish()
//      .animate({ 'height' : '100%' });
// }

// else {

//  jQuery('#mbj_notification_container_login')
//      .finish()
//      .animate({ 'height' : '100%' });

// };
    });
}

mbjRevealModal = function() {
    jQuery('#mbj_modal')
        .fadeIn(200,"swing");
};

mbjDestroyModal = function() {
    jQuery('#mbj_modal')
        .fadeOut(200, "swing", function() {
            jQuery( this ).remove();

           
            // Get session data relevant to login state
            username = sessionStorage.getItem("username");
            userLoggedIn = sessionStorage.getItem("mbjUserLoggedIn");

            // If user is logged in, check to see if any beans are left to be awarded after modal closes
            if (userLoggedIn && username != 'null') {
                mbjAttemptAward();
            };
        //.remove();
    });
}

function mbjAttemptYouvewon() {
    mbjDebug('Prompting user to log in...');
// Prompt for login/registration
//    jQuery('div.mbj_notification_container').fadeIn();
    
    // Create modal div if it doesn't already exist
    if (!jQuery( '#mbj_modal' ).length) {
        jQuery( 'body' ).append( '<table id="mbj_modal"></table>' );
        jQuery( '#mbj_modal' ).load( './assets/modal/login-register.htm' + '?' + new Date().getTime(), mbjRevealModal );
        //jQuery( 'body' ).append(''
        // + '<table id="mbj_modal">'
        // +   '<tbody id="modal-tbody">'
        // +       '<tr id="modal-tr">'
        // +           '<td id="modal-td">'
        // +               '<div id="modal-box">'
        // +                   '<div id="modal-content">'
        // +                       '<div id="modal-body">'
        // +                           '<!-- CONTENT -->'
        // +                           '<div class="mbj_notification mbj_notification_container onboard-modal" id="mbj_notification_container_youvewon" style="max-width: none; width: 343px; padding: 0px; display: block; position: relative;">'
        // +                                '<div class="mbj_notification_inner" id="mbj-youvewon-init">'
        // +                                    '<div class="mbj_notification_sub_inner">'
        // +                                        '<form class="mbj-form" id="mbj_login_form2" method="post" onsubmit="return false">'
        // +                                            '<div style="float: left;color:white;background:black;font-size:8pt;font-family:Arial;width:80px;text-align:center">'
        // +                                                'MBJ users<br>log in'
        // +                                            '</div>'
        // +                                            '<div class="element-input" style="float: left; padding-right: 5px;margin-top:0px">'
        // +                                                '<input class="" style="width: 120px; background-color: silver; float: left;border-color:black;border-width:3px" id="mbj_form_u" type="text" name="mbj_login" required />'
        // +                                            '</div>'
        // +                                            '<button class="submit" style="height: 24px; margin-top: 0px;float:right;background:white" onclick="mbjAttemptAuthenticate()">'
        // +                                                '<span class="mbj-button-text" style="color: black">Log In</span>'
        // +                                            '</button>'
        // +                                        '</form>'
        // +                                    '</div>'
        // +                                    '<div style="margin-top: 0px; margin-left:10px;">'
        // +                                        '<a href="javascript:closeOnboardModal2()"><img src="img/forfun.png"></a>'
        // +                                        '<a href="javascript:MbjDisplayRegistrationView2()"><img src="img/rewards.png"></a>'
        // +                                    '</div>'
        // +                                '</div>'
        // +                            '</div>'
        // +                       '</div>'
        // +                   '</div>'
        // +               '</div>'
        // +           '</td>'
        // +       '</tr>'
        // +   '</tbody>'
        // + '</table>');

        //jQuery('#mbj_modal').fadeIn(500,"swing");

        // <div class="mbj_notification mbj_notification_container onboard-modal" id="mbj_notification_container_youvewon" style="max-width: none; height: 400px; width: 343px; padding: 0px; left: 504px; top: 42px; display: block;"><div class="mbj_notification_inner" id="mbj-youvewon-init" style="height:375px; width:343px;background-color:black; background-image: url(\'img/youcouldvewon.png\');position:absolute;background-repeat:no-repeat"><div style="width: 270px; padding: 5px; margin-top:255px;margin-left:10px;background:black;height:32px;"><form class="mbj-form" id="mbj_login_form2" method="post" onsubmit="return false"><div style="float: left;color:white;background:black;font-size:8pt;font-family:Arial;width:80px;text-align:center">MBJ users<br>log in</div><div class="element-input" style="float: left; padding-right: 5px;margin-top:0px"><input class="" style="width: 120px; background-color: silver; float: left;border-color:black;border-width:3px" id="mbj_form_u" type="text" name="mbj_login" required=""></div><button class="submit" style="height: 24px; margin-top: 0px;float:right;background:white" onclick="mbjAttemptAuthenticate()"><span class="mbj-button-text" style="color: black">Log In</span></button></form></div><div style="margin-top: 0px; margin-left:10px;"><a href="javascript:closeOnboardModal2()"><img src="img/forfun.png"></a><a href="javascript:MbjDisplayRegistrationView2()"><img src="img/rewards.png"></a></div></div> ');
    }
    // MbjDisplayhYouveWon();
    // MbjCreateOnboardModal2();

// If login form is submitted...
    jQuery('#mbj_login_form').off('submit').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        u = jQuery('#mbj_form_u',this).val();
        p = jQuery('#mbj_form_p', this).val();
        p = '';
        mbjDebug("Attempting to log in... " + u);
        mbjDebug("Queued Bean count: " + queuedBeans);

        mbjAttemptAuthenticate();

        mbjDebug("Authentication method called.");

    });

// If registration form is submitted...
    jQuery('#mbj_registration_form').off('submit').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        u = jQuery('#mbj_form_reg_u', this).val();
        p = jQuery('#mbj_form_reg_p', this).val();
        p2 = jQuery('#mbj_form_reg_p2', this).val();
        email = jQuery('#mbj_form_reg_email', this).val();
        zip = jQuery('#mbj_form_reg_zip', this).val();

// Add checkbox items to array
/*        var catArray = [],
                inputs = document.getElementsByClassName("mbj_checkbox");

        for (var i = inputs.length - 1; i >= 0; i--) {
            if (inputs[i].type === "checkbox" && inputs[i].checked) {
                catArray.push(inputs[i].value);
            }
        }

        cats = catArray;*/
        mbjDebug("Attempting to register...");
        mbjDebug("Queued Bean count: " + queuedBeans);

        mbjAttemptRegistration();

    });

    jQuery('#mbj_notification_close').off('submit').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        mbjDestroyModal();

        // jQuery( '#mbj_modal' )
        //         .fadeOut(500, "swing")
        //         .remove();

    });

    //fadeElementOut( jQuery('#mbj_notification_close'), jQuery( '#mbj_modal' ) );
    

    jQuery('div.mbj_notification_pane_selector').off('click').on('click', function(event) {

        jQuery('div.mbj_notification_pane_selector').each(function() {
            mbjDebug("Check!");

            if (jQuery(this).hasClass('active_selector')) {
                jQuery(this).removeClass('active_selector').addClass('inactive_selector');
            }
            else {
                jQuery(this).removeClass('inactive_selector').addClass('active_selector');
            }
            ;
        });

        jQuery('div.mbj_login_or_register').each(function() {

            if (jQuery(this).hasClass('active_pane')) {
                jQuery(this).removeClass('active_pane').addClass('inactive_pane');
            }
            else {
                jQuery(this).removeClass('inactive_pane').addClass('active_pane');
            }
            ;
        });

// if (jQuery('#mbj_register').hasClass('active_pane')){                                    // Commented out to temporarily resolve close button vanishing issue

//  jQuery('#mbj_notification_container_login')
//      .finish()
//      .animate({ 'height' : '100%' });
// }

// else {

//  jQuery('#mbj_notification_container_login')
//      .finish()
//      .animate({ 'height' : '100%' });

// };
    });
}



function mbjAttemptAuthenticate(username, password) {

    jQuery('div.mbj_login_status').removeClass('success fail');
    jQuery('div.mbj_login_status').html('<div id="spinner_login"></div>');

//    event.preventDefault();
//    event.stopPropagation();

    u = jQuery('#mbj_form_u').val();

    // Add submitted username to session storage
    if (typeof u != 'undefined') {
        sessionStorage.setItem('username',u);
    };

    flashLoginStatus();
    SummonSpinner('spinner_login');

    validate_user(u, mbjNotifyAuthenticate);
    mbjDebug("Queued Bean count: " + queuedBeans);
}



function mbjNotifyAuthenticate(result, message, email) {

    mbjDebug("Authenticating...");

    if (result == STATUS_SUCCESS) {
        mbjDebug("Result = " + result);
        mbjDebug("Message = " + message);
        mbjDebug("Authentication succeeded.");
        //mbjDebug("Email" + email);
        // sessionStorage.setItem('email',email);
        sessionStorage.setItem('mbjUserLoggedIn','true');
          jQuery('#email').val(email);
 
      jQuery("#mbj_form_reg_email").val(email);

    //      //testpostedimg();

        mbjUserLoggedIn = true;
        //ga('send', 'pageview', 'mbjLoggedIn');
//        if(isplay)
   //     {
            //testpostedimg();
 //       }
//mbjGetUserimage();
// Hide "sign-up button"
        jQuery("button#footer-signup").fadeOut(200, "swing");
        jQuery(".footer-cta-title").css({
            width: "100%",
            textAlign: "center"
        });

        setTimeout(function() {
            jQuery("div.mbj_login_status").addClass("success");

            jQuery("div.mbj_login_status").html('<img src="img/ui_action_success.png"><p class="status success">Login successful.</p>');

            flashLoginStatus();

            setTimeout(function() {
                mbjDestroyModal();
            }, 2000);
        }, 200);
    }
    else {
        mbjDebug("Result = " + result);
        mbjDebug("Message = " + message);
        mbjDebug("Authentication failed.");


        setTimeout(function() {
            jQuery("div.mbj_login_status").addClass("fail");

            jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status fail">Login failed.</p>');

            flashLoginStatus();
        }, 200);
    }
}

function mbjAttemptRegistration() {

    jQuery("div.mbj_login_status").removeClass("success fail");
    jQuery("div.mbj_login_status").html('<div id="spinner_login"></div>');
    flashLoginStatus();
    SummonSpinner('spinner_login');

    /*
    *
    *   [question]
    *   Why were these here..?
    *
    */

    // event.preventDefault();
    // event.stopPropagation();


    u = jQuery('#mbj_form_reg_email').val();
    p = jQuery('#mbj_form_reg_p').val();
    p2 = jQuery('#mbj_form_reg_p2').val();
    email = jQuery('#mbj_form_reg_email').val();
    zip = jQuery('#mbj_form_reg_zip').val();
    lat = jQuery('#lat').val();
    lon = jQuery('#lon').val();    
    cats = jQuery('#mbj_form_reg_cats').val();
    //cats = cats.split(',');
//Add checkbox items to array
/*        var catArray = [],
            inputs = document.getElementsByClassName("mbj_checkbox");

    for (var i = inputs.length - 1; i >= 0; i--) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            catArray.push(inputs[i].value);
        }
    }

    cats = catArray;*/

    
    if (p != p2) {
        mbjDebug("Password mismatch detected");
        mbjNotifyRegistrationPassMismatch();
//        mbjAttemptLogin();
    } else if (p.length < 6) {
        mbjDebug("Invalid password");
        mbjNotifyRegistrationInvalidPass();
 //       mbjAttemptLogin();
    } else if ( cats == null)     { 
        mbjNotifyRegistrationCategories(3);
 //       mbjAttemptLogin();    
    } else if (cats.length < 3){
        mbjNotifyRegistrationCategories(3);
  //      mbjAttemptLogin();
    } else {

        register_user(u, p, email, zip, lat,lon, cats,mbjNotifyRegistration);

    }
    
}




function mbjNotifyRegistrationPassMismatch() {

    setTimeout(function() {
        jQuery("div.mbj_login_status").addClass("fail");

        jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status success">Passwords do not match.</p>');

        flashLoginStatus();

        jQuery("#mbj_form_reg_p")
                .animate({backgroundColor: '#c21010'}, 200);

        jQuery("#mbj_form_reg_p2")
                .animate({backgroundColor: '#c21010'}, 200);
    }, 200);

    setTimeout(function() {
        jQuery("#mbj_form_reg_p")
                .animate({backgroundColor: '#ffffff'}, 200);

        jQuery("#mbj_form_reg_p2")
                .animate({backgroundColor: '#ffffff'}, 200);
    }, 3000);
}

function mbjNotifyRegistrationCategories(ctmin) {

    setTimeout(function() {
        jQuery("div.mbj_login_status").addClass("fail");

        jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status success">You must select at least ' + ctmin + ' categories.</p>');

        flashLoginStatus();

        jQuery("#mbj_form_reg_cats")
                .animate({backgroundColor: '#c21010'}, 200);
    }, 200);

    setTimeout(function() {
        jQuery("#mbj_form_reg_cats")
                .animate({backgroundColor: '#ffffff'}, 200);

 
    }, 3000);
}


function mbjNotifyRegistrationInvalidPass() {

    setTimeout(function() {
        jQuery("div.mbj_login_status").addClass("fail");

        jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status success">Password must be at least 6 alphanumeric characters. Special characters not allowed.</p>');

        flashLoginStatus();

        jQuery("#mbj_form_reg_p")
                .animate({backgroundColor: '#c21010'}, 200);

        jQuery("#mbj_form_reg_p2")
                .animate({backgroundColor: '#c21010'}, 200);
    }, 200);

    setTimeout(function() {
        jQuery("#mbj_form_reg_p")
                .animate({backgroundColor: '#ffffff'}, 200);

        jQuery("#mbj_form_reg_p2")
                .animate({backgroundColor: '#ffffff'}, 200);
    }, 3000);
}
;

function mbjNotifyRegistrationInvalidZip() {

    setTimeout(function() {
        jQuery("div.mbj_login_status").addClass("fail");

        jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status success">Invalid ZIP code.</p>');

        flashLoginStatus();

        jQuery("#mbj_form_reg_zip")
                .animate({backgroundColor: '#c21010'}, 200);
    }, 200);

    setTimeout(function() {
        jQuery("#mbj_form_reg_zip")
                .animate({backgroundColor: '#ffffff'}, 200);
    }, 3000);
}
;

function mbjNotifyRegistration(result, message) {
    if (result == STATUS_SUCCESS) {
        mbjDebug("Result = " + result);
        mbjDebug("Message = " + message);
        mbjDebug("Registration succeeded as " + email);

        sessionStorage.setItem('username',email);
        sessionStorage.setItem('mbjUserLoggedIn','true');
        jQuery('#email').val(email);

    jQuery("#mbj_form_reg_email").val(email);

        //testpostedimg();

    mbjUserLoggedIn = true;
      //ga('send', 'pageview', 'registrationSuccess');

// award Bean for successful registration
//        queuedBeans++;
      
    setTimeout(function() {
        jQuery("div.mbj_login_status").addClass("success");

        jQuery("div.mbj_login_status").html('<img src="img/ui_action_success.png"><p class="status success">Login successful.</p>');

        flashLoginStatus();

        setTimeout(function() {
            MbjDisplayYoureIn();
        }, 2000);
    }, 200);

      //MbjDisplayYoureIn();



 //       setTimeout(function() {
 //           jQuery("div.mbj_login_status").addClass("success");

  //          jQuery("div.mbj_login_status").html('<img src="img/ui_action_success.png"><p class="status success"> ' + message + ' </p>');

   //         flashLoginStatus();

 //           setTimeout(function() {
  //              jQuery("div.mbj_notification_container")
  //                      .fadeOut(200, "swing");
  //          }, 3000);
  //      }, 200);

//        if (queuedBeans > 0) {
//            mbjAttemptAward();
//        }
    }
    else {
        mbjDebug("Result = " + result);
        mbjDebug("Message = " + message);
        mbjDebug("Registration failed.");


        setTimeout(function() {
 //
  //        alert("Registration Failed: " + message);
            jQuery("div.mbj_login_status").addClass("fail");

            jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status fail">Registration failed. ' + message + ' </p>');

            flashLoginStatus();
        }, 200);
 //       mbjAttemptLogin();
    }
}



function flashLoginStatus() {
    if (typeof loginStatusFlashing === 'undefined') {
        if (!loginStatusFlashing) {
            loginStatusFlashing = true;
            jQuery("div.mbj_login_status")
                    .finish()
                    .animate({
                        opacity: 1
                    }, 0)
                    .slideDown()
                    .fadeIn(200)
                    .delay(3000)
                    .animate({
                        opacity: 0
                    }, 200)
                    .slideUp(function() {
                        loginStatusFlashing = false;
                    }
                    );
        }
    }
}
;


function SummonSpinner(div_id) {
    var opts = {
        lines: 12, // The number of lines to draw
        length: 7, // The length of each line
        width: 2, // The line thickness
        radius: 5, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#fff', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
    };
    var target = document.getElementById(div_id);
    var spinner = new Spinner(opts).spin(target);
}
;


BeanAwardAlert = function(result, award) {

    mbjDebug("Retrieving award from server.");
    mbjDebug(result);

// check to see if request was successful

    if (result == STATUS_SUCCESS) {
        var awardImage = awardArray.imageurl;
        queuedBeans--;
        mbjDebug("Request successful!");
        if (!jQuery( '#mbj_modal' ).length) {
            jQuery( 'body' ).append( '<table id="mbj_modal"></table>' );
            jQuery( '#mbj_modal' ).load( './assets/modal/bean-award.htm' + '?' + new Date().getTime(), function(){
                jQuery('.bean_notification_image')
                .replaceWith('<img class="bean_notification_image" id="mbj_award_img" src="' + awardImage + '">');
                mbjRevealModal();
            });
            // jQuery( 'body' ).append(''
            // + '<table id="mbj_modal">'
            // +   '<tbody id="modal-tbody">'
            // +       '<tr id="modal-tr">'
            // +           '<td id="modal-td">'
            // +               '<div id="modal-box">'
            // +                   '<div id="modal-content">'
            // +                       '<div id="modal-body">'
            // +                           '<!-- CONTENT -->'
            // +                           '<div class="mbj_notification bean_notification_window">'
            // +                               '<img class="bean_notification_image" src="">'
            // +                           '</div>'
            // +                       '</div>'
            // +                   '</div>'
            // +               '</div>'
            // +           '</td>'
            // +       '</tr>'
            // +   '</tbody>'
            // + '</table>');

            // jQuery( 'body' ).append('<div class="mbj_notification bean_notification_window"><img class="bean_notification_image" src=""><!--                    <p class="bean_notification_text">...</p>--></div>' );
        }
        
        // jQuery('#mbj_award_img')
        //         .replaceWith('<img class="mbj_capsule_payload_contents" id="mbj_award_img" src="' + awardImage + '">');
// mbjCapsuleAward();
        
        // jQuery("#mbj_modal, .bean_notification_window")
        //         .fadeIn(500, "swing");
        // jQuery("div.bean_notification_window")
        //         .html('<button type="submit" class="btn-close" id="mbj_notification_close_submit" onClick="this.parentElement.style.display = \'none\';"> <img src="img/ui_action_close.png"> </button> <img class="mbj_award_img" src="' + awardImage + '">');//( '<img src="/mbj/mbj_sdk/code/img/mbj_notifier_header.png"><div id="spinner_award"></div><p class="mbj_caption">' + msgMoreInfo + '</p>' );
        

        setTimeout(function(){
            mbjDestroyModal();
        }, 10000);
        // jQuery(".bean_notification_window, #mbj_modal")
        //         .delay(10000)
        //         .fadeOut(500, "swing");
        //ga('send', 'pageview', 'beanAward');
    }


    /*
    *
    *   [QUESTION]
    *   Why was this causing issues?
    * 
    */

    // else if (failArray.message == "No beans available for your category and/or location.") {
    //     mbjDebug("WARNING: " + failArray.message);
    // }


    /*
    *
    *   [QUESTION]
    *   What is the desired way to gracefully fail
    * 
    */

    else {
        mbjDebug("Request failed.");
        jQuery('#mbj_award_img')
                .replaceWith('<img class="mbj_capsule_payload_contents" id="mbj_award_img" src="' + capsulePlaceholderImageURL + '">');
        jQuery("div.bean_notification_window")
                .html('<img src="/mbj/mbj_sdk/code/img/mbj_notifier_header.png"><img class="bean_notification_image" src="img/ui_action_fail.png">')
                .delay(5000)
                .fadeOut(500, "swing");
    }
};

// FakeBeanAwardAlert = function(result, award) {
//     mbjDebug("Awarding mock Bean!");
//     awardImage = "img/7170.png";
//     msgMoreInfo = "This is a fake Bean.";
//     jQuery('.bean_notification_image')
//             .replaceWith('<img class="bean_notification_image" id="mbj_award_img" src="' + awardImage + '">');
//     jQuery('#mbj_award_img')
//             .replaceWith('<img class="mbj_capsule_payload_contents" id="mbj_award_img" src="' + awardImage + '">');
// // mbjCapsuleAward();
//     jQuery("div.bean_notification_window")
//             .fadeIn(500, "swing");
//     jQuery("div.bean_notification_window")
//             .html('<img class="mbj_award_img" src="' + awardImage + '">');//( '<img src="/mbj/mbj_sdk/code/img/mbj_notifier_header.png"><div id="spinner_award"></div><p class="mbj_caption">' + msgMoreInfo + '</p>' );
//     jQuery("div.bean_notification_window")
//             .delay(100000)
//             .fadeOut(500, "swing");
// };




// function mbjImagePreloader() {
//     jQuery('body').html('<div class="nada"><img src="img/ui_action_fail.png"><img src="img/ui_action_success.png"><img src="img/ui_action_close.png"></div>');
// }
// ;

// function append_totalbeans(totalWin) {
//     mbjDebug("updating bean count");
//     if (oldWinCount == 0) {
//         oldWinCount = totalWin;
//     }
//     if (oldWinCount != totalWin) {
//         jQuery(".count_wins").addClass("newcount");
//         jQuery(".count_wins").empty();
//         jQuery(".count_wins").append("<span>Total Beans awarded: " + totalWin + "</span>");
//         setInterval(function() {
//             jQuery(".count_wins").removeClass("newcount");
//         }, 5000);
//         oldWinCount = totalWin;
//     }
// }
// ;



//
//Misc. helpers
//

function fetchCategories(){
    get_categories(hardUser, hardPass, prepareCategories);
}

function prepareCategories(result, categories) {
    catArray = categories;
}

function centerOnboardModal(){    
jQuery('.onboard-modal').each(function(){
    mbjDebug("This.height: " + jQuery(this).outerHeight());
    mbjDebug("Parent.height: " + jQuery(this).innerHeight());
    jQuery(this).css('left',((((jQuery(window).innerWidth() - (jQuery(this).outerWidth())) / 2)) + 'px'));
    jQuery(this).css('top',((((jQuery(window).innerHeight() - (jQuery(this).outerHeight())) / 3)) + 'px'));
});
};



//
//Onboarding Modal view controllers
//

function MbjCreateOnboardModal(){
/*
if ( jQuery( '#mbj_notification_container_login' ).length ) {
    jQuery( '#mbj_notification_container_login' ).remove()
}
*/
//get_winners("teaser");
fetchCategories();
//jQuery( 'body' ).append('<div class="mbj_notification mbj_notification_container onboard-modal" id="mbj_notification_container_login"><button type="submit" class="btn-close" id="mbj_notification_close_submit" onClick="closeOnboardModal()"> <img src="img/ui_action_close.png"> </button> <div class="mbj_notification_inner" id="mbj-login-init"> <div class="mbj_notification_title"> <img src="img/mbj_logo_50px.png"/> <h2>WIN REAL STUFF YOU CHOOSE</h2> </div><div class="mbj_notification_beanticker"> <div id="main_container" class="panel_container"> <div class="slider_temp"> <div id="slider1_container_t"> <div u="slides" id="slider_components_t"> </div></div></div></div></div><div class="mbj_notification action-buttons"><fb:login-button  data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="false" scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button><button class="btn-mbj submit full-width" id="mbj-login" onClick="MbjDisplayLoginView()"> <span class="mbj-button-icon"><i class="ion-log-in" style="font-size: 28px; vertical-align: middle; padding-right:0.5em;"></i></span><span class="mbj-button-text">Log in / sign up with MyBeanJar</span> </button> </div></div></div>');

centerOnboardModal();

jQuery( '#mbj_notification_container_login' ).fadeOut(1, "swing");

jQuery('#mbj_notification_container_login').fadeIn(500, "swing");
}

// function MbjCreateOnboardModal2(){

//     fetchCategories();

//     //centerOnboardModal();

//     if (!jQuery( '#mbj_modal' ).length) {
//         MbjDisplayhYouveWon();
//     }

//     else if (!jQuery( '#mbj_modal' ).css('display') == 'none') {
//         jQuery( '#mbj_modal' ).fadeOut(1, "swing");
//     }

//     //MbjDisplayhYouveWon();
//     jQuery('#mbj_modal').fadeIn(500, "swing");
// }

function RegistrationBack() {
    //jQuery('#mbj-login-details').replaceWith(mbjloginregister);
    jQuery( '#mbj_modal' ).load( './assets/modal/login-register.htm' + '?' + new Date().getTime(), mbjRevealModal );
}

var mbjloginregister =  '<div class="mbj_notification_inner" id="mbj-login-register"> <div class="mbj_notification_title"> <img src="img/mbj_logo_50px.png"/> <h2>SIGN IN AND WIN FOR REAL</h2> </div><div class="mbj-login mbj-form-block" id="mbj_login"> <form class="mbj-form" id="mbj_login_form" method="post"> <div class="element-input"> <label class="title" style="color: #a9a9a9;">username</label> <input class="large" id="mbj_form_u" type="text" name="mbj_login" required/> <a class="password-recovery" onClick="MbjDisplayAccountRecoveryView()">forgot username?</a></div><div class="mbj_login_status"> </div></form> </div><div class="submit action-buttons"> <button class="btn-mbj submit full-width" id="mbj-login" onClick="mbjAttemptAuthenticate()"> <span class="mbj-button-icon"><i class="ion-log-in" style="font-size: 28px; vertical-align: middle; padding-right:0.5em;"></i></span><span class="mbj-button-text">Log In</span> </button> <button class="btn-mbj submit full-width" id="mbj-login" onClick="MbjDisplayRegistrationView()"> <span class="mbj-button-icon"><i class="ion-android-clipboard" style="font-size: 28px; vertical-align: middle; padding-right:0.5em;"></i></span><span class="mbj-button-text">Sign Up</span> </button> </div></div>';

// function MbjDisplayLoginView() {
//     jQuery( '#mbj-login-init' ).replaceWith('  <div class="mbj_notification_inner" id="mbj-login-register"> <div class="mbj_notification_title"> <img src="img/mbj_logo_50px.png"/> <h2>SIGN IN AND WIN FOR REAL</h2> </div><div class="mbj-login mbj-form-block" id="mbj_login"> <form class="mbj-form" id="mbj_login_form" method="post"> <div class="element-input"> <label class="title" style="color: #a9a9a9;">username</label> <input class="large" id="mbj_form_u" type="text" name="mbj_login" required/> <a class="password-recovery" onClick="MbjDisplayAccountRecoveryView()">forgot username?</a></div><div class="mbj_login_status"> </div></form> </div><div class="submit action-buttons"> <button class="btn-mbj submit full-width" id="mbj-login" onClick="mbjAttemptAuthenticate()"> <span class="mbj-button-icon"><i class="ion-log-in" style="font-size: 28px; vertical-align: middle; padding-right:0.5em;"></i></span><span class="mbj-button-text">Log In</span> </button> <button class="btn-mbj submit full-width" id="mbj-login" onClick="MbjDisplayRegistrationView()"> <span class="mbj-button-icon"><i class="ion-android-clipboard" style="font-size: 28px; vertical-align: middle; padding-right:0.5em;"></i></span><span class="mbj-button-text">Sign Up</span> </button> </div></div>');
// }

function MbjDisplayAccountRecoveryView() {
jQuery( '#mbj-login-register' ).replaceWith('  <div class="mbj_notification_inner" id="mbj-login-recovery"> <div class="mbj_notification_title"> <img src="img/mbj_logo_50px.png"/> <h2>SIGN IN AND WIN FOR REAL</h2> </div><div class="mbj-login mbj-form-block" id="mbj_login"> <form class="mbj-form" id="mbj_login_form" method="post"> <div class="element-input"> <label class="title" style="color: #a9a9a9;">e-mail</label> <input class="large" id="mbj_form_reg_email" type="email" name="mbj_reg_email" required/> </div><div class="mbj_login_status"> </div></form> </div><div class="submit action-buttons"> <button class="btn-mbj submit full-width" id="mbj-login" onClick="send_password()"> <span class="mbj-button-icon"><i class="ion-paper-airplane" style="font-size: 28px; vertical-align: middle; padding-right:0.5em;"></i></span><span class="mbj-button-text">Recover Password</span> </button></div></div>');
}

function MbjDisplayRegistrationView() {
    if (typeof catArray != 'undefined') {
        var catSize = catArray.length;
    };
    var catSelect = '<select id="mbj_form_reg_cats" name="cats" style="width:100%" multiple="multiple">';
    
    for (var i = 0; i < catSize; i++){
        var catName = catArray[i].name;
        var catKey = catArray[i].categorykey;
        catSelect = catSelect + '<option value="'+catKey+ '">'+catName+'</option>';
    }   
        catSelect = catSelect + '</select>';

    jQuery( '.mbj_notification_container' ).load( './assets/modal/register.htm' + '?' + new Date().getTime(), function(){
        jQuery( '.mbj-category-selector' ).html( catSelect );
    });
    

}


// function MbjDisplayRegistrationView2() {
//     var catSize = catArray.length;
//     var catSelect = '<select id="mbj_form_reg_cats" name="cats" style="width:100%;" multiple="multiple">';
    
//     for (var i = 0; i < catSize; i++){
//         var catName = catArray[i].name;
//         var catKey = catArray[i].categorykey;
//         catSelect = catSelect + '<option value="'+catKey+ '">'+catName+'</option>';
//     }   
//         catSelect = catSelect + '</select>';
// jQuery( '#mbj-youvewon-init'  ).replaceWith(' <div class="mbj_notification_inner" id="mbj-login-details"> <button type="submit" class="btn-close" id="mbj_notification_close_submit" onClick="closeOnboardModal2()"> <img src="img/ui_action_close.png"> </button><br clear="all"><div class="mbj_notification_title"><h2 style="color:yellow;font-size: 1.1rem;top:-10px;font-weight: bold; ">get real&mdash;redeem NOW!</h2><h3 style="color:white">Real stuff, not points or badges. Instant redemptions from anywhere.</h3> </div><div class="mbj-login mbj-form-block" id="mbj_details"> <form class="mbj-form" id="mbj_details_form" method="post"><input type="hidden" name="lat" id="lat" value=""/><input type="hidden" name="lon" id="lon" value=""/><div class="element-input"> <label class="title" style="color: #a9a9a9;">email&mdash;no spam ever</label> <input class="large" id="mbj_form_reg_email" type="email" name="mbj_reg_email" required/></div><div style="width: 100%;padding-top:5px"><div class="element-input" style="width:45%;float:left;"> <label class="title" style="color: #a9a9a9;">password (&gt;5 chars)</label> <input class="small" style="width:100%;" id="mbj_form_reg_p" type="password" name="mbj_password" required=""></div><div class="element-input" style="width: 45%;float:right;margin-top:0px"><label class="title">confirm password</label><input class="small" style="width:100%;" id="mbj_form_reg_p2" type="password" name="mbj_password_confirm"></div></div><div style="width: 100%;padding-top:5px;white-space:nowrap;display:inline-block"><div class="element-input"> <label class="title" style="color: #a9a9a9;font-size:8pt;padding-top:5px">ZIP (US only)&mdash;to find cool stuff nearby</label> <input class="small"  style="width:45%;" maxlength="5" id="mbj_form_reg_zip" type="text" name="mbj_reg_zip"/>&nbsp;or&nbsp;<button type="button" class="btn-mbj btn-location" style="margin-top:0px;float:right;background-color:lightgreen;border-color:lightgreen" onClick="getLocation();"><span class="mbj-button-text" style="color:black;font-size:8pt">current location</span></button></div></div><div class="element-input"><label class="title"><br>Choose only the rewards you want (select 3+)</label>'+catSelect+'</div><div class="mbj_login_status"> </div></form> </div><div class="submit action-buttons"><a href="http://www.mybeanjar.com/#players" style="text-decoration:none"><img src="img/bean.png" style="vertical-align:middle">&nbsp;myBeanJar.com</a> <button class="btn-mbj submit small" style="float:right" id="mbj-submit-done" onClick="mbjAttemptRegistration()"><span class="mbj-button-text">done</span> </button> </div></div>');

// }

// function MbjDisplayRegistrationView3() {
// //  MbjCreateOnboardModal();
//     fetchCategories();

//     centerOnboardModal();
    
//     jQuery('#mbj_notification_container_youvewon').fadeIn(500,"swing");

// }

// function MbjHomeLogin(){
//     centerOnboardModal();   
//     jQuery( '#mbj_notification_container_youvewon' ).fadeOut(1, "swing");

//     jQuery('#mbj_notification_container_login').fadeIn(500, "swing");
// }






// function MbjDisplayLoginView() {
//     //ga('send', 'pageview', 'youvewon');
//     jQuery( '#mbj-youvewon-init'  ).replaceWith('<div class="mbj_notification_inner" id="mbj-youvewon-init" style="height:375px; width:343px;background-color:black; background-image: url(\'img/youcouldvewon.png\');position:relative;background-repeat:no-repeat"><div style="width: 270px; padding: 5px; margin-top:255px;margin-left:10px;background:black;height:32px;"><form class="mbj-form" id="mbj_login_form2" method="post" onsubmit="return false"><div style="float: left;color:white;background:black;font-size:8pt;font-family:Arial;width:80px;text-align:center">MBJ users<br>log in</div><div class="element-input" style="float: left; padding-right: 5px;margin-top:0px"><input class=""   style="width: 120px; background-color: silver; float: left;border-color:black;border-width:3px" id="mbj_form_u" type="text" name="mbj_login" required /></div><button class="submit"    style="height: 24px; margin-top: 0px;float:right;background:white"  onClick="mbjAttemptAuthenticate()"><span class="mbj-button-text" style="color: black">Log In</span></button></form></div><div style="margin-top: 0px; margin-left:10px;"><a href="javascript:closeOnboardModal2()"><img src="img/forfun.png"></a><a href="javascript:MbjDisplayRegistrationView2()"><img src="img/rewards.png"></a></div></div> ');
//     //jQuery( '#mbj-youvewon-init'  ).parent().css("max-width","none").css("height","auto").css("width","343px").css("padding","0px");
//     jQuery('#mbj-youvewon-init').fadeIn(500,"swing");
// }






// function MbjDisplayhYouveWon() {
//     //ga('send', 'pageview', 'youvewon');
//     jQuery( '#mbj-youvewon-init'  ).replaceWith('<div class="mbj_notification_inner" id="mbj-youvewon-init" style="height:375px; width:343px;background-color:black; background-image: url(\'img/youcouldvewon.png\');position:relative;background-repeat:no-repeat"><div style="width: 270px; padding: 5px; margin-top:255px;margin-left:10px;background:black;height:32px;"><form class="mbj-form" id="mbj_login_form2" method="post" onsubmit="return false"><div style="float: left;color:white;background:black;font-size:8pt;font-family:Arial;width:80px;text-align:center">MBJ users<br>log in</div><div class="element-input" style="float: left; padding-right: 5px;margin-top:0px"><input class=""   style="width: 120px; background-color: silver; float: left;border-color:black;border-width:3px" id="mbj_form_u" type="text" name="mbj_login" required /></div><button class="submit"    style="height: 24px; margin-top: 0px;float:right;background:white"  onClick="mbjAttemptAuthenticate()"><span class="mbj-button-text" style="color: black">Log In</span></button></form></div><div style="margin-top: 0px; margin-left:10px;"><a href="javascript:closeOnboardModal2()"><img src="img/forfun.png"></a><a href="javascript:MbjDisplayRegistrationView2()"><img src="img/rewards.png"></a></div></div> ');
//     jQuery( '#mbj-youvewon-init'  ).parent().css("max-width","none").css("height","auto").css("width","343px").css("padding","0px");
// }

// function MbjDisplayhYouveWonOld() {
    
//     jQuery( '#mbj-youvewon-init'  ).replaceWith('<div class="mbj_notification_inner" id="mbj-youvewon-init" style="padding:0px 0px 10px 0px;width:100%;background:black"> <div class="mbj_notification action-buttons" style="background:grey;padding-bottom: 10px"><button type="submit" class="btn-close" id="mbj_notification_close_submit" style="top:-10px" onClick="closeOnboardModal2()"> <img src="img/ui_action_close.png"> </button> <br><button class="btn-mbj submit" id="mbj-login" onClick="closeOnboardModal2();play()" style="height:30px;margin:auto"><span class="mbj-button-text" style="color:black;font-family:sans-serif;text-align:center;font-size:16px;font-weight: bold;margin: 0px 0 0 0px;">keep playing for fun</span> </button> </div><div class="mbj_notification action-buttons" style="background:black;text-align:center"><h3 style="color: orange;text-align:center;font-size:16pt"><i>or</i></h3><button class="btn-mbj-light submit" id="mbj-login" onClick="MbjDisplayRegistrationView2()" style="height:60px;padding:0px;margin:auto;max-width:90%;"><span class="mbj-button-text" style="color:black;text-align:center;font-size:24px;font-weight: bold;margin: 0 0 0 5px;">keep playing for fun <i style="font-style:italic">and</i> real stuff</span> </button> </div>    <div class="mbj_notification_title"> <h2 style="color:lightgreen;font-weight: bold;font-family: sans-serif;font-size: 18px">from sponsors like these:</h2></div><div class="mbj_notification_beanticker" style="margin: 2em 0px 1em 0px;"> <div id="main_container" class="panel_container"> <div class="slider_temp"> <div id="slider1_container_t2"> <div u="slides" id="slider_components_t2"> <img src="img/ticker.jpg" style="width:100%"></div></div></div></div></div><div style="width:90%;padding:5px;margin:auto;"><form class="mbj-form" id="mbj_login_form2" method="post" onsubmit="return false"> <div style="float:left"><img src="img/mbj_logo_50px.png" style="width:50px;height:50px;"/> </div><div class="element-input" style="float:left;padding-right:5px"> <label class="" style="color: orange;font-family:sans-serif;font-size:14px;font-weight:bold">MBJ Users Log In:</label> <input class="" style="width:120px;background-color:silver;float:left" id="mbj_form_u" type="text" name="mbj_login" required/></div>&nbsp;<button class="btn-mbj submit"  style="height:30px;float:left;margin-top:1em" onClick="mbjAttemptAuthenticate()" ><span class="mbj-button-text" style="color:black">Log In</span> </button>  </form></div>');
// }

function MbjDisplayYoureIn() { 
    jQuery( '.mbj_notification_container' ).load( './assets/modal/registration-successful.htm' + '?' + new Date().getTime(), mbjRevealModal );
    //jQuery('#mbj-login-details').replaceWith('<div class="mbj_notification_inner" id="mbj-youvewon-init" style="padding:0px 0px 0px 0px;width:100%;background:black"> <button type="submit" class="btn-close" id="mbj_notification_close_submit" onClick="closeOnboardModal2();closeOnboardModal()"> <img src="img/ui_action_close.png"> </button><br clear="all"><div style="text-align:center"><h2 style="color:goldenrod;font-weight:bold;font-size:24pt">YOU\'RE IN!</h2><p style="font-size:12pt">Keep playing to win more in this game.</p><p style="font-size:12pt">Check your email later for instructions on how to redeem your rewards, and install the MyBeanJar app</p></div><button class="btn-mbj submit" onClick="closeOnboardModal2();closeOnboardModal();" style="height:30px;margin:auto;width:80%;text-align:center"><span class="mbj-button-text" style="color:black;font-family:sans-serif;text-align:center;font-size:16px;font-weight:bold;">Play On</span></div>');
}

function MbjDisplayCategoriesView() {
catSize = catArray.length;
jQuery( '#mbj-login-details' ).replaceWith('<div class="mbj_notification_inner" id="mbj-login-categories"> <div class="mbj_notification_title"> <img src="img/mbj_logo_50px.png"/> <h2>SIGN IN AND WIN FOR REAL</h2> </div><div class="mbj-login mbj-form-block" id="mbj_categories"> <form class="mbj-form" id="mbj_categories_form" method="post"> <div class="mbj_notification_copy"> <p>What sort of rewards would you like to receive?</p><p>Select at least 3</p></div><div class="action-buttons category-list" id="category-list">');
for (var i = 0; i < catSize; i++){
    var catName = catArray[i].name;
    jQuery( '#category-list' ).append('<button type="button" class="btn-mbj btn-category full-width" id="mbj-category-' + i + '" onClick="MbjSelectCategory(this)"> <span class="mbj-button-text">' + catName + '</span><span class="mbj-button-icon"><i class="ion-android-radio-button-off"></i></span></button>');
}
jQuery( '#mbj-login-categories' ).append('</div><div class="action-buttons"><button class="btn-mbj submit full-width" id="mbj-login" onClick="MbjDisplayLoginView()"><span class="mbj-button-icon"><i class="ion-android-send"></i></span><span class="mbj-button-text">Submit</span> </button> </div></form></div></div>');
}
function MbjSelectCategory(category) {

if (jQuery( category ).hasClass('btn-category-selected')){
    
    // Deselect active button
    jQuery( category ).removeClass('btn-category-selected');
    jQuery( category ).children('span.mbj-button-icon').children('i').addClass('ion-android-radio-button-off').removeClass('ion-android-radio-button-on');
}

else {
    
    // Select active button
    jQuery( category ).addClass('btn-category-selected');
    jQuery( category ).children('span.mbj-button-icon').children('i').removeClass('ion-android-radio-button-off').addClass('ion-android-radio-button-on');
}

}


//
//  View close behaviors
//

jQuery(document).ready(function() {
    
    // TEMP
    if (typeof debugMode != 'undefined') {
        if (debugMode == true) {
            sessionStorage.clear();
        }
    }

    if (sessionStorage.getItem("mbjUserLoggedIn") !== null) { 
        mbjUserLoggedIn = true;
    }

    // Fetch MyBeanJar award categories on page load
    fetchCategories();

});

function closeOnboardModal() {
    jQuery('#mbj_modal')
        .fadeOut(200, "swing", function(){
            jQuery( this ).remove();
        }
    );
}

//*********  Geolocation *********//

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser");
    }
}
function showPosition(position) {
    var lat = document.getElementById("lat");
    var lon = document.getElementById("lon");
    lat.value = position.coords.latitude;
    lon.value = position.coords.longitude; 
    alert(lat.value + ' x ' + lon.value);
    jQuery('.btn-location').replaceWith('<div style="font-weight:bold;color:yellow;font-size:larger">Using Current Location</div>');
}







function fadeElementOut(activator, target) {
    jQuery(activator).off('submit').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery( target )
                .fadeOut(500, "swing")
                .remove();
    });
};





// ------ EXPERIMENTAL MODAL ------ //

function testModal() {
jQuery( 'body' ).append('' 
    + '<table id="modal">'
    +   '<tbody id="modal-tbody">'
    +       '<tr id="modal-tr">'
    +           '<td id="modal-td">'
    +               '<div id="modal-box">'
    +                   '<div id="modal-content">'
    +                       '<div id="modal-body">'
    +                           '<!-- CONTENT -->'
    +                           '<h2>Test</h2>'
    +                           '<p>This is a test.</p>'
    +                       '</div>'
    +                   '</div>'
    +               '</div>'
    +           '</td>'
    +       '</tr>'
    +   '</tbody>'
    + '</table>');
};

window.addEventListener('resize', function(){
    document.getElementById('modal-content').style.maxHeight = document.documentElement.offsetHeight;
}, false);


