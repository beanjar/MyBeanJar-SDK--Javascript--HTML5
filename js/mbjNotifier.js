/*°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø
|
|   MyBeanJar UI Kit
|
|   The mussless and fussless way to get up and running with MyBeanJar!
|
|   This script contains a constructor for MyBeanJar modal objects that can be used to 
|   prompt users for credentials, prompt them to register a new account, and award beans.
|
|   These modal objects handle the logic behind bean award events so you don't have to.
|   Any time you want to award a bean to a user, simply call the mbjAddAwardBean() method
|   and it will take care of the rest. If the user hasn't yet logged in, it will prompt them
|   to do so. If they have logged in, it will request a new bean for that user from the 
|   MyBeanJar servers. That's it! Just attach that method to any events for which you would
|   like a user to receive a bean and let this script handle the rest.
|
°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø*/

    



    /*°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø
    |
    |  Basic variables
    |
    °`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø*/

    var queuedBeans;
    var loginStatusFlashing;
    var categories = new Array();

    
    


    /*°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø
    |
    |  Default configuration settings
    |
    °`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø*/

    var config = {
        hardUser: 'ryanfister3',                            // username for use with API calls not related to actual user
        hardPass: '40f4d87250c70278580bc8fb47e5caaa',       // password for use with API calls not related to actual user
        debugMode: true,                                    // Enable/disable debug logging
        rewardLogin: true                                   // Enable/disable awards for user log-ins
    }





/*°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø
|
|   MbjModal constructor
|   
|   This constructor accepts an optional parameter that is used to determine the type of modal generated.
|       
|       'login':        The login/registration modal
|       'awardbean':    The bean award modal (containing a freshly minted bean)
|
|   If no parameter is supplied, a bean award modal will be generated. If the user has not logged into MyBeanJar,
|   the modal will fall back to a login/registration modal instead.
|
°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø*/

var MbjModal = function(variant){
    
    // Assign unique ID based on current timestamp
    this.uid = Date.now();

    // On construction, generate a new HTMLement and map it to the modal object 
    this.Spawn();

    // Link modal object to its HTMLement 
    this.element = document.getElementById('mbj-modal-' + this.uid);
    
    // Link modal object to its content
    this.payload = document.getElementById('mbj-modal-payload-' + this.uid);

    // Overload checker
    // If no arguments are supplied, 
    if (arguments.length == 0 || variant == 'awardbean') {
        this.AwardBean();
    } else if (variant == 'login') {
        this.LoadLoginView();
    }
}

MbjModal.prototype = {
    
    /* * *
     * Modal object properties
     */

    constructor: MbjModal,
    uid: {},                            // The unique identifier of the modal (timestamp)
    payload: {},                        // The contents of the modal
    beanImage: {},                      // The URL for the bean award image
    timeout: {},                        // The timeout for  modal self-destruction
    geolocation: {                      // The lat/long coordinates of the browser
        lat: {},                        // The latitude coordinate supplied by the browser
        lon: {}                         // The longitude coordinate supplied by the browser
    },
    currentView: function () {},        // The [function used to generate the] contents of the modal's current view
    lastView: function() {},            // The [function used to generate the] contents of the modal's previous view (for navigating back)



    /* * *
     * Modal object methods
     */

    // Adds a modal container to the DOM 
    Spawn: function() {
        var modal = this;
        jQuery( 'body' ).append( modalContent.frame(modal) );
    },

    // Loads login view into modal
    LoadLoginView: function() {
        var modal = this;

        // Fetch bean categories if they haven't yet been fetched
        if (typeof categories == 'undefined'){
            categories = fetchCategories();
        };

        // Load template as modal content
        jQuery( this.payload ).html( modalContent.login(modal) );

        
        // Map buttons and assign handlers
        var closeButton     = document.getElementById('close-modal-' + modal.uid);
        var registerButton  = document.getElementById('load-registration-view-' + modal.uid);
        var loginButton     = document.getElementById('mbj-login-button-' + modal.uid);

        registerButton.addEventListener('click', function(){
            this.LoadRegistrationView();
        }.bind(this));

        closeButton.addEventListener('click', function(){
            this.SelfDestruct();
        }.bind(this));

        loginButton.addEventListener('click', function(){
            u = jQuery('#mbj_form_u', this.element).val();
            //p = jQuery('#mbj_form_p', modal.element).val();
            mbjAttemptAuthenticate.bind(this, u)();//, p);
        }.bind(this));
        
        // Fade modal into view once loaded
        this.FadeIn();

        // Update view tracker
        this.currentView = this.LoadLoginView;
    },
    
    // Loads bean award view into modal
    LoadAwardView: function() {
        var modal = this;

        this.lastView = this.currentView;

        // Load template as modal content
        jQuery( this.payload ).html( modalContent.bean(modal) );

        // Load bean image into modal
        jQuery('.bean_notification_image').replaceWith('<img class="bean_notification_image" id="mbj_award_img" src="' + this.beanImage + '">');

        // Map buttons and assign handlers
        var closeButton     = document.getElementById('close-modal-' + this.uid);

        closeButton.addEventListener('click', function(){
            this.SelfDestruct();
        }.bind(this));

        // Fade modal into view once loaded
        this.FadeIn();

        // Set modal self-destruct timeout
        this.timeout = setTimeout(function() {
            this.SelfDestruct();
        }.bind(this), 8000);

        // Update view tracker
        this.currentView = this.LoadAwardView;
    },


    // Loads registration view into modal
    LoadRegistrationView: function() {
        var modal = this;

        this.lastView = this.currentView;

        // Load template as modal content
        jQuery( this.payload ).html( modalContent.registration(modal) );

        // Load categories into content
        this.ParseCategories(categories);
        //MbjLoadRegistrationView(categories);

        // Map buttons and assign handlers
        var backButton      = document.getElementById('back-modal-' + this.uid);
        var closeButton     = document.getElementById('close-modal-' + this.uid);
        var locationButton  = document.getElementById('btn-geolocator-' + this.uid);
        var registerButton  = document.getElementById('mbj-register-button-' + this.uid);

        backButton.addEventListener('click', function(){
            this.lastView();
        }.bind(this));

        closeButton.addEventListener('click', function(){
            this.SelfDestruct();
        }.bind(this));

        locationButton.addEventListener('click', function(){
            getLocation.bind(this)(this.StoreLocation);
        }.bind(this));

        registerButton.addEventListener('click', function(){
            this.SubmitRegistration();
        }.bind(this));

        // Update view tracker
        this.currentView = this.LoadRegistrationView;
    },

    // Injects category selector into view
    ParseCategories: function(catArray) {
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

        jQuery( '#mbj-category-selector-' + this.uid).html( catSelect );
    },

    // Applies location data stored within modal object to registration fields
    ApplyLocation: function() {
        if (!jQuery.isEmptyObject(this.geolocation)) {
            var lat = document.getElementById("lat-" + this.uid);
            var lon = document.getElementById("lon-" + this.uid);
            lat.value = this.geolocation.lat;
            lon.value = this.geolocation.lon;

            // Replace geolocator button block with notification that location data is being used
            jQuery('#geolocator-block-' + this.uid).html('<div class="notification-geolocator"><span>(Using Current Location)</span></div>');
        };
    },

    // Requests award bean from MyBeanJar
    AwardBean: function(){
        var modal = this;

        // Get session data relevant to login state
        var username = sessionStorage.getItem("username");
        var userLoggedIn = sessionStorage.getItem("mbjUserLoggedIn");

        
        // If user is logged in and username is valid, attempt to retrieve award bean
        if (userLoggedIn && username != 'null') {
            u = sessionStorage.getItem("username");
            
            // Passwords currently disabled against the best advice of a certain technical consultant...
            p = 'password';

            // If user has queued beans, attempt to get them from MyBeanJar
            if (sessionStorage.getItem("queuedBeans") > 0) {
                
                // If no other modal is present, execute request
                if (!jQuery( '#mbj_modal' ).length) {
                    mbjDebug("User logged in as " + u + " : " + p + ": " +mbjAppID +" Requesting award Bean");
                    get_award(u, p, mbjAppID, function(result, award){
                        mbjDebug('Award: ' + award);
                        //!\\ BUILD IN FAILURE STATES
                        this.beanImage = award.imageurl;
                        this.LoadAwardView();
                    }.bind(this));
                    queuedBeans = sessionStorage.getItem("queuedBeans");
                    queuedBeans--;
                    sessionStorage.setItem("queuedBeans", queuedBeans);
                    mbjDebug(queuedBeans + " queued Beans remaining...");
                }
            }

        } else {
            // If user isn't logged in, prompt them to do so or to register
            this.LoadLoginView();
        }
    },

    // Fade the modal HTMLement into view
    FadeIn: function() {
        jQuery( this.element )
            .fadeIn(200,"swing");
    },

    // Requests new user registration through MyBeanJar
    SubmitRegistration: function() {
        jQuery("div.mbj_login_status").removeClass("success fail");
        jQuery("div.mbj_login_status").html('<div id="spinner_login"></div>');
        flashLoginStatus();
        SummonSpinner('spinner_login');

        u = jQuery('#mbj_form_reg_email').val();
        p = jQuery('#mbj_form_reg_p').val();
        p2 = jQuery('#mbj_form_reg_p2').val();
        email = jQuery('#mbj_form_reg_email').val();
        zip = jQuery('#mbj_form_reg_zip').val();
        lat = jQuery('#lat-' + this.uid).val();
        lon = jQuery('#lon-' + this.uid).val();    
        cats = jQuery('#mbj_form_reg_cats').val();
        
        if (p != p2) {
            mbjDebug("Password mismatch detected");
            //!\\ Replace with object method
            mbjNotifyRegistrationPassMismatch();
        } 

        else if (p.length < 6) {
            mbjDebug("Invalid password");
            //!\\ Replace with object method
            mbjNotifyRegistrationInvalidPass();
        }

        else if (cats == null)     { 
            //!\\ Replace with object method
            mbjNotifyRegistrationCategories(3);  
        }

        else if (cats.length < 3){
            //!\\ Replace with object method
            mbjNotifyRegistrationCategories(3);
        }

        else {    
            // Pass user data off to API methods
            register_user(u, p, email, zip, lat,lon, cats, function(result, message) {
                this.UpdateRegistrationStatus(result, message);
            }.bind(this));
        }
    },

    // Updates authentication status notification and cleans up authentication activities
    UpdateAuthenticationStatus: function(result, message, email) {
        mbjDebug("Authenticating...");

        // If request was successful, record in session storage, show success notification, and destroy the calling modal
        if (result == STATUS_SUCCESS) {
            mbjDebug("Result = " + result);
            mbjDebug("Message = " + message);
            mbjDebug("Authentication succeeded.");

            sessionStorage.setItem('mbjUserLoggedIn','true');

            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("success");

                jQuery("div.mbj_login_status").html('<img src="img/ui_action_success.png"><p class="status success">Login successful.</p>');

                flashLoginStatus();

                this.timeout = setTimeout(function() {
                    this.SelfDestruct();
                }.bind(this), 2000);
            }.bind(this), 200);
        }
        else {
            mbjDebug("Result = " + result);
            mbjDebug("Message = " + message);
            mbjDebug("Authentication failed.");

            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("fail");

                jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status fail">Login failed.</p>');

                flashLoginStatus();
            }.bind(this), 200);
        }
    },
    
    LoadRegistrationSuccessView: function() {
        var modal = this;

        this.lastView = this.currentView;

        // Load template as modal content
        jQuery( this.payload ).html( modalContent.registrationSuccess(modal) );

        // Map buttons and assign handlers
        var closeButton     = document.getElementById('close-modal-' + modal.uid);
        var closeButtonAlt  = document.getElementById('close-modal-button-' + modal.uid);

        closeButton.addEventListener('click', function(){
            modal.SelfDestruct();
        });

        closeButtonAlt.addEventListener('click', function(){
            modal.SelfDestruct();
        });

        // Update view tracker
        this.currentView = this.LoadRegistrationSuccessView;
    },

    UpdateRegistrationStatus: function(result, message) {
        if (result == STATUS_SUCCESS) {
            mbjDebug("Result = " + result);
            mbjDebug("Message = " + message);
            mbjDebug("Registration succeeded as " + email);

            sessionStorage.setItem('username',email);
            sessionStorage.setItem('mbjUserLoggedIn','true');
            jQuery('#email').val(email);
            jQuery("#mbj_form_reg_email").val(email);
              
            // Display registration success notifications
            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("success");

                jQuery("div.mbj_login_status").html('<img src="img/ui_action_success.png"><p class="status success">Login successful.</p>');

                flashLoginStatus();

                setTimeout(function() {
                    this.LoadRegistrationSuccessView();
                }.bind(this), 2000);
            }.bind(this), 200);

        }
        
        else {
            mbjDebug("Result = " + result);
            mbjDebug("Message = " + message);
            mbjDebug("Registration failed.");


            // Display registration failure notification
            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("fail");

                jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status fail">Registration failed. ' + message + ' </p>');

                flashLoginStatus();
            }, 200);
        }

    },

    // Stores location data received from browser and applies it to the registration view, if appropriate
    StoreLocation: function(position) {
        this.geolocation.lat = position.coords.latitude;
        this.geolocation.lon = position.coords.longitude;

        // If in registration view, apply coordinates
        if (this.currentView == this.LoadRegistrationView) {
            this.ApplyLocation();
        }
    },

    // Gracefully destroys modal
    SelfDestruct: function() {

        // Clear any previously set modal destruction timeouts
        clearTimeout(this.timeout);

        jQuery( this.element )
        .fadeOut(200, "swing", function() {
            jQuery( this ).remove();
            
            // If user has queued beans and is logged in, attempt to get them from MyBeanJar (See options)
            if (config.rewardLogin && sessionStorage.getItem("mbjUserLoggedIn")) {
                if (sessionStorage.getItem("queuedBeans") > 0) {
                    new MbjModal('awardbean');
                }
            }

        });
    }
}





/*°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø
|
|   Modal Content Object
|
|   Contains strings representing HTML data to be used in the different modal views.
|   Used by modal object methods to generate distinct views dynamically.
|
°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø*/

var modalContent = {
    
    // The table element that houses modal content
    // (A table is used here to ensure vertical and horizontal centering)
    frame: function(modal){
        htmlementString =       '<table class="mbj-modal" id="mbj-modal-' + modal.uid + '">'
                                +  '    <tbody id="modal-tbody">'
                                +  '        <tr id="modal-tr">'
                                +  '            <td id="modal-td">'
                                +  '                <div id="modal-box">'
                                +  '                    <div id="modal-content">'
                                +  '                        <div class="mbj-notification" id="mbj-modal-payload-' + modal.uid + '">'
                                +  '                        </div>'
                                +  '                    </div>'
                                +  '                </div>'
                                +  '            </td>'
                                +  '        </tr>'
                                +  '    </tbody>'
                                +  '</table>';
        return htmlementString;
    },

    // The login/register prompt view
    login: function(modal){
        htmlementString =       '<div class="mbj-notification mbj_notification_container onboard-modal" id="mbj-modal-payload-' + modal.uid + '">'
                                +  '    <div class="mbj_notification_inner" id="mbj-youvewon-init">'
                                +  '        <div class="mbj_notification_sub_inner">'
                                +  '            <form class="mbj-form" id="mbj_login_form2" method="post" onsubmit="return false">'
                                +  '                <div id="mbj-label-init-username">'
                                +  '                    <span>MBJ users<br>log in</span>'
                                +  '                </div>'
                                +  '                <div class="element-input" id="mbj-field-init-username">'
                                +  '                    <input class="" id="mbj_form_u" type="text" name="mbj_login" required />'
                                +  '                </div>'
                                +  '                <button class="submit" id="mbj-login-button-' + modal.uid + '">'//onclick="mbjAttemptAuthenticate()">'
                                +  '                    <span class="mbj-button-text">Log In</span>'
                                +  '                </button>'
                                +  '            </form>'
                                +  '        </div>'
                                +  '        <div id="mbj-onboard-buttons">'
                                +  '            <img id="close-modal-' + modal.uid + '" src="img/forfun.png"></a>'
                                +  '            <img id="load-registration-view-' + modal.uid + '" src="img/rewards.png"></a>'
                                +  '        </div>'
                                +  '    </div>'
                                +  '</div>';
        return htmlementString;
    },
    
    // The registration form view
    registration:   function(modal){
        
        // Check to see if page is secure, if so, prepare "get location" button
        // (getCurrentPosition is deprecated on insecure sites)
        var locationButtonString;
        
        // If site is secure, include button to get location from browser
        if (location.protocol === 'https:') {
            locationButtonString = '                    <div class="geolocator-block" id="geolocator-block-' + modal.uid + '">'
                                +  '                        <span class="mbj-form-label">&nbsp;or&nbsp;</span>'
                                +  '                        <button type="button" class="btn-mbj green btn-location" id="btn-geolocator-' + modal.uid + '">'
                                +  '                            <span class="mbj-button-text" style="color:black;font-size:8pt">current location</span>'
                                +  '                        </button>'
                                +  '                    </div>'
        }
        
        // ...otherwise, don't
        else {
            locationButtonString = '';
        }

        htmlementString =       '<div class="mbj-notification mbj_notification_container onboard-modal" id="mbj-modal-payload-' + modal.uid + '">'
                                +  '<div class="mbj_notification_inner" id="mbj-login-details">'
                                +  '    <div class="mbj-nav-button-block">'
                                +  '            <button type="submit" class="btn-back" id="back-modal-' + modal.uid + '">'
                                +  '                <img src="img/ui_action_back.png">'
                                +  '            </button>'
                                +  '            <button type="submit" class="btn-close" id="close-modal-' + modal.uid + '">'
                                +  '                <img src="img/ui_action_close.png">'
                                +  '            </button>'
                                +  '        </div>'
                                +  '        <br clear="all">'
                                +  '        <div class="mbj_notification_title">'
                                +  '            <h2>get real&mdash;redeem NOW!</h2>'
                                +  '            <h3>Real stuff, not points or badges. Instant redemption from anywhere.</h3>'
                                +  '        </div>'
                                +  '        <div class="mbj-login mbj-form-block" id="mbj_details">'
                                +  '            <form class="mbj-form" id="mbj_details_form" method="post">'
                                +  '                <input type="hidden" name="lat" id="lat-' + modal.uid + '" value=""/>'
                                +  '                <input type="hidden" name="lon" id="lon-' + modal.uid + '" value=""/>'
                                +  '                <div class="element-input">'
                                +  '                    <label class="title mbj-form-label">email&mdash;no spam ever</label>'
                                +  '                    <input class="large" id="mbj_form_reg_email" type="email" name="mbj_reg_email" required/>'
                                +  '                </div>'
                                +  '                <div style="width: 100%;padding-top:5px">'
                                +  '                       <div class="element-input" style="width:45%;float:left;">'
                                +  '                                <label class="title mbj-form-label">password (&gt;5 chars)</label>'
                                +  '                                <input class="small" style="width:100%;" id="mbj_form_reg_p" type="password" name="mbj_password" required="">'
                                +  '                        </div>'
                                +  '                        <div class="element-input" style="width: 45%;float:right;margin-top:0px">'
                                +  '                            <label class="title mbj-form-label">confirm password</label>'
                                +  '                            <input class="small" style="width:100%;" id="mbj_form_reg_p2" type="password" name="mbj_password_confirm">'
                                +  '                        </div>'
                                +  '                </div>'
                                +  '                <div style="width: 100%;padding-top:5px;white-space:nowrap;display:inline-block">'
                                +  '                    <div class="element-input" >'
                                +  '                        <label class="title mbj-form-label">ZIP (US only)&mdash;to find cool stuff nearby</label>'
                                +  '                        <input class="small"  style="width:45%;" maxlength="5" id="mbj_form_reg_zip" type="text" name="mbj_reg_zip"/>'
                                +  '                       ' + locationButtonString
                                +  '                    </div>'
                                +  '                </div>'
                                +  '                <div class="element-input">'
                                +  '                    <label class="title mbj-form-label"><br>Choose only the rewards you want (select 3+)</label>'
                                +  '                    <div class="mbj-category-selector" id="mbj-category-selector-' + modal.uid + '">'
                                +  '                    </div>'
                                +  '                </div>'
                                +  '                <div class="mbj_login_status"> ' 
                                +  '                </div>'
                                +  '            </form>'
                                +  '        </div>'
                                +  '        <div class="submit action-buttons">'
                                +  '            <a href="http://www.mybeanjar.com/#players" style="text-decoration:none">'
                                +  '                <img src="img/bean.png" style="vertical-align:middle"><span>&nbsp;myBeanJar.com</span>'
                                +  '            </a>'
                                +  '            <button class="btn-mbj green submit small" style="float:right" id="mbj-register-button-' + modal.uid + '">'
                                +  '                    <span class="mbj-button-text">done</span>'
                                +  '            </button>'
                                +  '        </div>'
                                +  '    </div>'
                                +  '</div>';
        return htmlementString;
    },

    // The registration success view
    registrationSuccess:   function(modal){
        htmlementString =          '<div class="mbj-notification mbj_notification_container onboard-modal" id="mbj-modal-payload-' + modal.uid + '">'
                                +  '    <div class="mbj_notification_inner" id="mbj-registration-successful">'
                                +  '        <div class="mbj-nav-button-block">'
                                +  '            <button type="submit" class="btn-close" id="close-modal-' + modal.uid + '">'
                                +  '                <img src="img/ui_action_close.png">'
                                +  '            </button>'
                                +  '        </div>'
                                +  '        <div class="mbj_notification_title">'
                                +  '            <h2>YOU\'RE IN!</h2>'
                                +  '            <p>Keep playing to win more in this game.</p>'
                                +  '            <p>Check your email later for instructions on how to redeem your rewards, and install the MyBeanJar app.</p>'
                                +  '        </div>'
                                +  '        <button class="btn-mbj submit" id="close-modal-button-' + modal.uid + '">'
                                +  '            <span class="mbj-button-text">Play On</span>'
                                +  '        </button>'
                                +  '    </div>';
        return htmlementString;
    },

    // The bean award view
    bean:   function(modal){
        htmlementString =          '<div class="mbj-notification bean_notification_window" id="mbj-bean-modal-' + modal.uid + '">'
                                +  '    <button type="submit" class="btn-close" id="close-modal-' + modal.uid + '">'//id="mbj_notification_close_submit" onClick="mbjDestroyModal()">'
                                +  '        <img src="img/ui_action_close.png">'
                                +  '    </button>'
                                +  '    <img class="bean_notification_image" src="">'
                                +  '</div>';
        return htmlementString;
    }

}








/*°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø
|
|   MyBeanJar debug message handler
|
|   If debug mode has been enabled in the configuration settings,
|   this method will log debug messages to the console.
|
°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø,¸¸,ø¤º°`°º¤ø*/

function mbjDebug(message) {
    if (typeof config.debugMode != 'undefined') {
        if (config.debugMode == true) {
            console.log(message);
        }
    }
};




//
//  Locally grants the user a queued bean (to be exchanged for an actual bean from the MyBeanJar service)
//  and instantiates a new modal to process that queued bean
//

function mbjAddAwardBean() {
    
    // Get any queued Beans in session storage, add a new one, save new total to session storage
    queuedBeans = sessionStorage.getItem("queuedBeans");
    queuedBeans++;
    sessionStorage.setItem("queuedBeans", queuedBeans);

    mbjDebug("Queued Bean count: " + queuedBeans);

    // If no other modal is present, attempt to get award
    if (!jQuery( '.mbj-modal' ).length) {
        var modal = new MbjModal();
    }

}



// function mbjAttemptAward() {

//     // Get session data relevant to login state
//     username = sessionStorage.getItem("username");
//     userLoggedIn = sessionStorage.getItem("mbjUserLoggedIn");

    
//     // If user is logged in and username is valid, attempt to retrieve award bean
//     if (userLoggedIn && username != 'null') {
//         u = sessionStorage.getItem("username");
//         p = 'password';

//         // If user has queued beans, attempt to get them from MBJ
//         if (sessionStorage.getItem("queuedBeans") > 0) {
            
//             // If no other modal is present, execute request
//             if (!jQuery( '#mbj_modal' ).length) {
//                 mbjDebug("User logged in as " + u + " : " + p + ": " +mbjAppID +" Requesting award Bean");
//                 get_award(u, p, mbjAppID, BeanAwardAlert);
//                 queuedBeans = sessionStorage.getItem("queuedBeans");
//                 queuedBeans--;
//                 sessionStorage.setItem("queuedBeans", queuedBeans);
//                 mbjDebug(queuedBeans + " queued Beans remaining...");
//             }
//         }
//     } else {

//         mbjAttemptYouvewon();
//     }
// }




function mbjAttemptAuthenticate(username) {

    jQuery('div.mbj_login_status').removeClass('success fail');
    jQuery('div.mbj_login_status').html('<div id="spinner_login"></div>');

    u = jQuery('#mbj_form_u').val();

    // Add submitted username to session storage
    if (typeof u != 'undefined') {
        sessionStorage.setItem('username',u);
    };

    flashLoginStatus();
    SummonSpinner('spinner_login');

    validate_user(u, function(result, message){
        //mbjNotifyAuthenticate.bind(this, result, message)();
        this.UpdateAuthenticationStatus(result, message);
    }.bind(this));
    mbjDebug("Queued Bean count: " + queuedBeans);
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
};

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
};




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
            });
        }
    }
};


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
};





//
//  Misc. helpers
//

function fetchCategories(){
    var categories = [];
    get_categories(config.hardUser, config.hardPass, function(result, categories){
        categories = result;
        return categories;
    });
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

//  Modal repositioner listner  
window.addEventListener('resize', function(){
    document.getElementById('modal-content').style.maxHeight = document.documentElement.offsetHeight;
}, false);





//
//  Initializer behaviors
//

jQuery(document).ready(function() {
    
    // TEMP
    if (typeof config.debugMode != 'undefined') {
        if (config.debugMode == true) {
            sessionStorage.clear();
        }
    }

    if (sessionStorage.getItem("mbjUserLoggedIn") !== null) { 
        mbjUserLoggedIn = true;
    }

    // Fetch MyBeanJar award categories on page load
    fetchCategories();

});



//*********  Geolocation *********//


// Accepts a function as a parameter. This function will get passed to the getCurrentPosition method.
function getLocation(fx) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fx.bind(this));
            /*, function(error){
            console.log(error);
            if (error == 0) {
                this.ApplyLocation();
            }
        }.bind(this));*/
    } else {
        mbjDebug("Geolocation is not supported by this browser");
    }
}


function showPosition(position) {
    var lat = document.getElementById("lat");
    var lon = document.getElementById("lon");
    lat.value = position.coords.latitude;
    lon.value = position.coords.longitude; 
    //alert(lat.value + ' x ' + lon.value);
    jQuery('.btn-location').replaceWith('<div style="font-weight:bold;color:yellow;font-size:larger">Using Current Location</div>');
}







