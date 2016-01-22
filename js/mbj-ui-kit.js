/* *
 *                                                                             
 *       ************* **********                                            
 *       **      *    ****  *** ***                                           
 *       **   **   **  **   **   **                                           
 *       **   **   **   *   **   **                                           
 *       **   **   **   *   **   **                                           
 *       **   **   **   *   **   **                                           
 *       **   **   **   **  **   **                                           
 *       ********************   **                                           
 *       **           ********   **                                           
 *       **    ****    ***   *   **                                           
 *       **    *****   ****     **                                            
 *       **    *****   *************   ********** *************               
 *       **    *****   ****        *****        ***           **              
 *       **    ***    ***    ****   ***   ****   **    ****    **             
 *       **           ***    ****    *    ****    *    ****    ***            
 *       **    ****    **    ****   **   +****    *    ****    ***            
 *       **    *****   **     **   *****          *    ****    ***            
 *       **    *****   **    *  *******   ****    *    ****    ***            
 *       **    *****   **    ****    *    ****    *    ****    ***            
 *       **    *****   **    ****   **    ****    *    ****    ***            
 *       **    ***    ****    **   ****    **    **    ****    ***            
 *       **+      ****  ****   *********      *****  ******  ***             
 *        +********    ******************    ******* **   *****              
 *                   ***+.   ..++*****    **    **     **    ***             
 *                   **+.    ....+***    ****    *    *****   ***            
 *                  ***..    ...+++**    ****    *    *****    **            
 *                  **+..    ....++*******  *    *    **********             
 *                 ***..     ....++***    **     *    ***   **               
 *             *****...     ....+++**    ****    *    ***                    
 *           ***++...     .....++++**    ****    *    ***                    
 *          ***+..       ....+++++***    ****    *    ***                    
 *          **+...    ......+++++*****          **    ***                    
 *          **+..........++++++****  *****  *******  ***                     
 *           ***++.....++++++****       ******   ******                      
 *            *****+++++++*****                                              
 *               ***********      
 *
 *
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓                               ▓▓▓▓▓▒▒▒▒░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓    mbj-ui-kit.js              ▓▓▓▓▓▒▒▒▒░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓                               ▓▓▓▓▓▒▒▒▒░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓    MyBeanJar HTML / JS SDK    ▓▓▓▓▓▒▒▒▒░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓    UI Kit                     ▓▓▓▓▓▒▒▒▒░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓                               ▓▓▓▓▓▒▒▒▒░░░░░░░░░
 * 
 *
 *  http://mybeanjar.com
 *  https://github.com/beanjar
 *
 *
 *  The mussless and fussless way to get up and running with MyBeanJar!         
 *
 *  This toolkit contains a constructor for MyBeanJar modal objects that 
 *  can be used to prompt users for credentials, prompt them to register
 *  a new account, and award beans. 
 *
 *  These modal objects handle the logic behind bean award events so you
 *  don't have to. Any time you want to award a bean to a user, simply 
 *  call the MyBeanJar.AwardBean() method and it will take care of the 
 *  rest. If the user hasn't yet logged in, it will prompt them to do so.
 *  If they have logged in, it will request a new bean for that user from
 *  the MyBeanJar servers. 
 *
 *  That's it! Just attach that method to any events for which you would
 *  like a user to receive a bean and let this script handle the rest.
 *
*/





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\
 * ░░░░▒▒▓▓                                 ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\  
 * ░░░░▒▒▓▓    Constructors & Prototypes    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                 ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/ 



/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    MyBeanJar controller constructor 
 * ░░░░▒▒▓▓
 *
 *  The MyBeanJar controller object contains system-wide references and 
 *  support methods.
 *
 *  One instance is created on load.
 *
*/

var MyBeanJarController = function() {
    
    // Assign unique ID based on current timestamp
    this.FetchCategories();

    // Clear session storage if debug mode is active
    if (typeof this.config.debugMode != 'undefined') {
        if (this.config.debugMode == true) {
            sessionStorage.clear();
        }
    }

    // Sync MyBeanJar object with session data, if present
    else {
        
        if (sessionStorage.getItem("queuedBeans") != null) {
            this.queuedBeans = sessionStorage.getItem("queuedBeans");
        }

        if (sessionStorage.getItem("username") != null) {
            this.username = sessionStorage.getItem("username");
        }

        if (sessionStorage.getItem("mbjUserLoggedIn") != null) {
            this.userLoggedIn = sessionStorage.getItem("mbjUserLoggedIn");
        }      
    } 
}

MyBeanJarController.prototype = {

    /*
     * ░░░░▒▒▓▓
     * ░░░░▒▒▓▓    MyBeanJar controller object properties    
     * ░░░░▒▒▓▓
    */
    
    constructor: MyBeanJarController,
    categories: {},                                             // An array of bean categories, to be populated with data fetched from MyBeanJar servers
    queuedBeans: {},                                            // Beans queued to be fetched from server
    username: {},                                               // The username of the logged-in user (if present)
    userLoggedIn: false,                                        // User's log-in state
    

    config: {                                                   // Default settings

        /* * * * * * * * * * * * * * * * * * * * * * * *\
        *                                               *
        *   TOTALLY EDITABLE!                           *
        *                                               *
        *   Edit as needed to suit your application.    *
        *                                               *
        \* * * * * * * * * * * * * * * * * * * * * * * */

        hardUser:       'ryanfister3',                              // Username for use with API calls not related to actual user
        hardPass:       '40f4d87250c70278580bc8fb47e5caaa',         // Password for use with API calls not related to actual user
        appID:          '4e732ced3463d06de0ca9a15b6153677',         // The app key to be used to make API requests (visit http://mybeanjar.com for details)
        debugMode:      true,                                       // Enable/disable debug logging
        rewardLogin:    true                                        // Enable/disable awards for user log-ins

    },

    // Gets latest category list from MyBeanJar servers
    FetchCategories: function() {
        get_categories(this.config.hardUser, this.config.hardPass, function(result, categories){
            this.categories = categories;
        }.bind(this));
    },

    // Accepts a function as a parameter. This supplied function will get passed to the getCurrentPosition method.
    GetLocation: function(fx) {
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(fx.bind(this));
        } 

        else {
            MyBeanJar.Log("Geolocation is not supported by this browser");
        }
    },

    // Optional debug log. Used to process debug log messages. (Enable/disable from MyBeanJar.config.debugMode)
    Log: function(message){
        if (typeof this.config.debugMode != 'undefined') {
            if (this.config.debugMode == true) {
                console.log(message);
            }
        }
    },

    // Locally grants the user a queued bean (to be exchanged for an actual bean from the MyBeanJar service) and instantiates a new modal to process that queued bean
    AwardBean: function() {
        
        // Get any queued Beans in session storage, add a new one, save new total to session storage
        this.queuedBeans = sessionStorage.getItem("queuedBeans");
        this.queuedBeans++;
        sessionStorage.setItem("queuedBeans", this.queuedBeans);
        MyBeanJar.Log("Queued Bean count: " + this.queuedBeans);

        // If no other modal is present, attempt to get award
        if (!jQuery( '.mbj-modal' ).length) {
            var modal = new MbjModal();
        }

    }
}





/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    MyBeanJar modal constructor 
 * ░░░░▒▒▓▓
 *
 *  This constructor accepts an optional parameter (variant) that is used to determine the type of modal generated.
 *       
 *      'login':        The login/registration modal
 *      'awardbean':    The bean award modal (containing a freshly minted bean)
 *
 *  If no parameter is supplied, a bean award modal will be generated. If the user has not logged into MyBeanJar,
 *  the modal will fall back to a login/registration modal instead.
 *
*/

var MbjModal = function(variant) {
    
    // Assign unique ID based on current timestamp
    this.uid = Date.now();

    // On construction, generate a new HTMLement and map it to the modal object 
    this.Spawn();

    // Link modal object to its HTMLement 
    this.element = document.getElementById('mbj-modal-' + this.uid);
    
    // Link modal object to its content
    this.payload = document.getElementById('mbj-modal-payload-' + this.uid);

    // Link modal object to its payload's immediate container (used for dynamic resizing and repositioning)
    this.payloadContainer = jQuery( this.payload ).parent()[0];

    // Overload checker
    // If no arguments are supplied, 
    if (arguments.length == 0 || variant == 'awardbean') {
        this.AwardBean();
    } else if (variant == 'login') {
        this.LoadLoginView();
    }
}

MbjModal.prototype = {
    
    /* *
     * ░░░░▒▒▓▓
     * ░░░░▒▒▓▓    Modal object properties  
     * ░░░░▒▒▓▓
    */

    constructor: MbjModal,
    uid: {},                            // The unique identifier of the modal (timestamp)
    payload: {},                        // The contents of the modal
    payloadContainer: {},               // The parent div of the modal payload
    beanImage: {},                      // The URL for the bean award image
    timeout: {},                        // The timeout for  modal self-destruction
    loginStatusFlashing: false,         // The status of the login flasher (true = active)
    geolocation: {                      // The lat/long coordinates of the browser
        lat: {},                        // The latitude coordinate supplied by the browser
        lon: {}                         // The longitude coordinate supplied by the browser
    },
    currentView: function () {},        // The [function used to generate the] contents of the modal's current view
    lastView: function() {},            // The [function used to generate the] contents of the modal's previous view (for navigating back)



    /* *
     * ░░░░▒▒▓▓
     * ░░░░▒▒▓▓    Modal object methods  
     * ░░░░▒▒▓▓
    */

    // Adds a modal container to the DOM 
    Spawn: function() {
        
        var modal = this;
        jQuery( 'body' ).append( modalContent.frame(modal) );
        
        //  Modal repositioner listner  
        window.addEventListener('resize', function(){
            this.payloadContainer.style.maxHeight = document.documentElement.offsetHeight;
        }.bind(this), false);

    },


    // Loads login view into modal
    LoadLoginView: function() {
        var modal = this;

        // Fetch bean categories if they haven't yet been fetched
        if (!jQuery.isEmptyObject(MyBeanJar.categories)) {
            MyBeanJar.FetchCategories();
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
            this.SubmitAuthentication(u);
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
            MyBeanJar.GetLocation.bind(this)(this.StoreLocation);
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
        
        var catSelect = '<select id="mbj-form-reg-cats-' + this.uid + '" name="cats" style="width:100%" multiple="multiple">';
        
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
                    MyBeanJar.Log("User logged in as " + u + " : " + p + ": " + MyBeanJar.config.appID +" Requesting award Bean");
                    get_award(u, p, MyBeanJar.config.appID, function(result, award){
                        MyBeanJar.Log('Award: ' + award);
                        this.beanImage = award.imageurl;
                        this.LoadAwardView();
                    }.bind(this));
                    MyBeanJar.queuedBeans = sessionStorage.getItem("queuedBeans");
                    MyBeanJar.queuedBeans--;
                    sessionStorage.setItem("queuedBeans", MyBeanJar.queuedBeans);
                    MyBeanJar.Log(MyBeanJar.queuedBeans + " queued Beans remaining...");
                }
            }

        } 

        else {
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
        jQuery("div.mbj_login_status").html('<div id="spinner-login-' + this.uid + '"></div>');
        this.FlashLoginStatus();
        this.SummonSpinner('spinner-login-' + this.uid);

        // Formerly, username was accepted here. E-mail addresses are used now.
        u = jQuery('#mbj-form-reg-email-' + this.uid).val();
        p = jQuery('#mbj-form-reg-p-' + this.uid).val();
        p2 = jQuery('#mbj-form-reg-p2-' + this.uid).val();
        email = jQuery('#mbj-form-reg-email-' + this.uid).val();
        zip = jQuery('#mbj-form-reg-zip-' + this.uid).val();
        lat = jQuery('#lat-' + this.uid).val();
        lon = jQuery('#lon-' + this.uid).val();    
        cats = jQuery('#mbj-form-reg-cats-' + this.uid).val();
        
        if (p != p2) {
            MyBeanJar.Log("Password mismatch detected");
            this.NotifyPasswordMismatch();
        } 

        else if (p.length < 5) {
            MyBeanJar.Log("Invalid password");
            this.NotifyPasswordInvalid();
        }

        else if (zip + lat + lon == '') {
            MyBeanJar.Log("Location data not supplied");
            this.NotifyInsufficientLocation();
        }

        else if (!jQuery.isEmptyObject(cats) && cats.length < 3) {
            MyBeanJar.Log("Insufficient categories selected");
            this.NotifyInsufficientCategories();
        }

        else if (jQuery.isEmptyObject(cats)) {
            MyBeanJar.Log("Insufficient categories selected");
            this.NotifyInsufficientCategories();
        }

        else {    
            // Pass user data off to API methods
            register_user(u, p, email, zip, lat, lon, cats, function(result, message) {
                this.UpdateRegistrationStatus(result, message);
            }.bind(this));
        }
    },


    SubmitAuthentication: function(username){

        jQuery('div.mbj_login_status').removeClass('success fail');
        jQuery('div.mbj_login_status').html('<div id="spinner-login-' + this.uid + '"></div>');

        // Add submitted username to session storage
        if (typeof username != 'undefined') {
            sessionStorage.setItem('username', username);
        };

        this.FlashLoginStatus.bind(this)();
        this.SummonSpinner('spinner-login-' + this.uid);

        validate_user(username, function(result, message){
            this.UpdateAuthenticationStatus(result, message);
        }.bind(this));
        MyBeanJar.Log("Queued Bean count: " + MyBeanJar.queuedBeans);
    },


    // Updates authentication status notification and cleans up authentication activities
    UpdateAuthenticationStatus: function(result, message, email) {
        MyBeanJar.Log("Authenticating...");

        // If request was successful, record in session storage, show success notification, and destroy the calling modal
        if (result == STATUS_SUCCESS) {
            MyBeanJar.Log("Result = " + result);
            MyBeanJar.Log("Message = " + message);
            MyBeanJar.Log("Authentication succeeded.");

            MyBeanJar.userLoggedIn = true;
            sessionStorage.setItem('mbjUserLoggedIn','true');

            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("success");
                jQuery("div.mbj_login_status").html('<img src="img/ui_action_success.png"><p class="status success">Login successful.</p>');
                this.FlashLoginStatus();
                this.timeout = setTimeout(function() {
                    this.SelfDestruct();
                }.bind(this), 2000);
            }.bind(this), 200);
        }
        else {
            MyBeanJar.Log("Result = " + result);
            MyBeanJar.Log("Message = " + message);
            MyBeanJar.Log("Authentication failed.");

            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("fail");
                jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status fail">Login failed.</p>');
                this.FlashLoginStatus();
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
            MyBeanJar.Log("Result = " + result);
            MyBeanJar.Log("Message = " + message);
            MyBeanJar.Log("Registration succeeded as " + email);

            sessionStorage.setItem('username',email);
            MyBeanJar.userLoggedIn = true;
            sessionStorage.setItem('mbjUserLoggedIn','true');
            jQuery('#email').val(email);
            jQuery("#mbj-form-reg-email").val(email);
              
            // Display registration success notifications
            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("success");

                jQuery("div.mbj_login_status").html('<img src="img/ui_action_success.png"><p class="status success">Login successful.</p>');

                this.FlashLoginStatus();

                setTimeout(function() {
                    this.LoadRegistrationSuccessView();
                }.bind(this), 2000);
            }.bind(this), 200);

        }
        
        else {
            MyBeanJar.Log("Result = " + result);
            MyBeanJar.Log("Message = " + message);
            MyBeanJar.Log("Registration failed.");


            // Display registration failure notification
            setTimeout(function() {
                jQuery("div.mbj_login_status").addClass("fail");

                jQuery("div.mbj_login_status").html('<img src="img/ui_action_fail.png"><p class="status fail">Registration failed. ' + message + ' </p>');

                this.FlashLoginStatus();
            }.bind(this), 200);
        }
    },

    
    NotifyPasswordMismatch: function() {
        setTimeout(function() {
            jQuery("div.mbj_login_status").addClass("fail");
            jQuery("div.mbj_login_status").html( modalContent.notify.passwordMismatch(this) );

            this.FlashLoginStatus();

            // Highlight problematic fields
            jQuery('#mbj-form-reg-p-' + this.uid)
            .css({backgroundColor: '#dd8d82'});

            jQuery('#mbj-form-reg-p2-' + this.uid)
            .css({backgroundColor: '#dd8d82'});
        }.bind(this), 200);

        setTimeout(function() {
            jQuery('#mbj-form-reg-p-' + this.uid)
            .css({backgroundColor: '#ffffff'});

            jQuery('#mbj-form-reg-p2-' + this.uid)
            .css({backgroundColor: '#ffffff'});
        }.bind(this), 3000);
    },


    NotifyPasswordInvalid: function() {
        setTimeout(function() {
            jQuery("div.mbj_login_status").addClass("fail");
            jQuery("div.mbj_login_status").html( modalContent.notify.invalidPassword(this) );

            this.FlashLoginStatus();

            // Highlight problematic fields
            jQuery('#mbj-form-reg-p-' + this.uid)
            .css({backgroundColor: '#dd8d82'});

            jQuery('#mbj-form-reg-p2-' + this.uid)
            .css({backgroundColor: '#dd8d82'});
        }.bind(this), 200);

        setTimeout(function() {
            jQuery('#mbj-form-reg-p-' + this.uid)
            .css({backgroundColor: '#ffffff'});

            jQuery('#mbj-form-reg-p2-' + this.uid)
            .css({backgroundColor: '#ffffff'});
        }.bind(this), 3000);
    },


    NotifyLocationInvalid: function() {
        setTimeout(function() {
            jQuery("div.mbj_login_status").addClass("fail");
            jQuery("div.mbj_login_status").html( modalContent.notify.invalidLocation(this) );

            this.FlashLoginStatus();

            // Highlight problematic fields
            jQuery("#mbj-form-reg-zip" + this.uid)
            .css({backgroundColor: '#dd8d82'});
        }.bind(this), 200);

        setTimeout(function() {
            jQuery("#mbj-form-reg-zip" + this.uid)
            .css({backgroundColor: '#ffffff'});
        }.bind(this), 3000);
    },


    NotifyInsufficientLocation: function() {
        setTimeout(function() {
            jQuery("div.mbj_login_status").addClass("fail");
            jQuery("div.mbj_login_status").html( modalContent.notify.insufficientLocation(this) );

            this.FlashLoginStatus();

            // Highlight problematic fields
            jQuery("#mbj-form-reg-zip-" + this.uid)
            .css({backgroundColor: '#dd8d82'});
        }.bind(this), 200);

        setTimeout(function() {
            jQuery("#mbj-form-reg-zip-" + this.uid)
            .css({backgroundColor: '#ffffff'});
        }.bind(this), 3000);
    },

    
    NotifyInsufficientCategories: function() {
        setTimeout(function() {
            jQuery("div.mbj_login_status").addClass("fail");
            jQuery("div.mbj_login_status").html( modalContent.notify.insufficientCategories(this) );

            this.FlashLoginStatus();

            // Highlight problematic fields
            jQuery("#mbj-form-reg-cats-" + this.uid)
            .css({backgroundColor: '#dd8d82'});
        }.bind(this), 200);

        setTimeout(function() {
            jQuery("#mbj-form-reg-cats-" + this.uid)
            .css({backgroundColor: '#ffffff'});
        }.bind(this), 3000);
    },

    
    FlashLoginStatus: function() {
        if (!this.loginStatusFlashing) {
            this.loginStatusFlashing = true;
            var statusID = '#mbj-login-status-' + this.uid;
            jQuery(statusID)
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
                this.loginStatusFlashing = false;
            }.bind(this));
        }
    },


    CenterSelf: function() { 
        jQuery( this.payload ).each(function(){
            MyBeanJar.Log("This.height: " + jQuery(this).outerHeight());
            MyBeanJar.Log("Parent.height: " + jQuery(this).innerHeight());
            jQuery(this).css('left',((((jQuery(window).innerWidth() - (jQuery(this).outerWidth())) / 2)) + 'px'));
            jQuery(this).css('top',((((jQuery(window).innerHeight() - (jQuery(this).outerHeight())) / 3)) + 'px'));
        });
    },


    // Summon activity indicator (NOTE: Depends on spin.js library)
    SummonSpinner: function(id) {
        var opts = {
            lines: 12,                              // The number of lines to draw
            length: 7,                              // The length of each line
            width: 2,                               // The line thickness
            radius: 5,                              // The radius of the inner circle
            corners: 1,                             // Corner roundness (0..1)
            rotate: 0,                              // The rotation offset
            direction: 1,                           // 1: clockwise, -1: counterclockwise
            color: '#fff',                          // #rgb or #rrggbb or array of colors
            speed: 1,                               // Rounds per second
            trail: 60,                              // Afterglow percentage
            shadow: false,                          // Whether to render a shadow
            hwaccel: true,                          // Whether to use hardware acceleration
            className: 'mbj-activity-indicator',    // The CSS class to assign to the spinner
            zIndex: 2e9,                            // The z-index (defaults to 2000000000)
            top: '50%',                             // Top position relative to parent
            left: '50%'                             // Left position relative to parent
        };
        var target = document.getElementById(id);
        var spinner = new Spinner(opts).spin(target);
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


    // Gracefully destroy modal
    SelfDestruct: function() {

        // Clear any previously set modal destruction timeouts
        clearTimeout(this.timeout);

        jQuery( this.element )
        .fadeOut(200, "swing", function() {
            jQuery( this ).remove();
            
            // If user has queued beans and is logged in, attempt to get them from MyBeanJar (See options)
            if (MyBeanJar.config.rewardLogin && sessionStorage.getItem("mbjUserLoggedIn")) {
                if (sessionStorage.getItem("queuedBeans") > 0) {
                    new MbjModal('awardbean');
                }
            }

        });
    }
}




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                   ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\  
 * ░░░░▒▒▓▓    Modal Content String Blocks    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                   ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 *                                                                                
 *  These string blocks are used to populate the various views of the modal           
 *                                                                                
*/

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
                                +  '                        <div class="mbj-notification mbj-modal-payload" id="mbj-modal-payload-' + modal.uid + '">'
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
        htmlementString =       '<div class="mbj-notification mbj-modal-payload mbj_notification_container onboard-modal" id="mbj-modal-payload-' + modal.uid + '">'
                                +  '    <div class="mbj_notification_inner" id="mbj-youvewon-init">'
                                +  '        <div class="mbj_notification_sub_inner">'
                                +  '            <form class="mbj-form" id="mbj_login_form2" method="post" onsubmit="return false">'
                                +  '                <div id="mbj-label-init-username">'
                                +  '                    <span>MBJ users<br>log in</span>'
                                +  '                </div>'
                                +  '                <div class="element-input" id="mbj-field-init-username">'
                                +  '                    <input class="" id="mbj_form_u" type="text" name="mbj_login" required />'
                                +  '                </div>'
                                +  '                <button class="submit" id="mbj-login-button-' + modal.uid + '">'
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

        htmlementString =       '<div class="mbj-notification mbj-modal-payload mbj_notification_container onboard-modal" id="mbj-modal-payload-' + modal.uid + '">'
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
                                +  '                    <input class="large" id="mbj-form-reg-email-' + modal.uid + '" type="email" name="mbj_reg_email" required/>'
                                +  '                </div>'
                                +  '                <div style="width: 100%;padding-top:5px">'
                                +  '                       <div class="element-input" style="width:45%;float:left;">'
                                +  '                                <label class="title mbj-form-label">password (&gt;5 chars)</label>'
                                +  '                                <input class="small" style="width:100%;" id="mbj-form-reg-p-' + modal.uid + '" type="password" name="mbj_password" required="">'
                                +  '                        </div>'
                                +  '                        <div class="element-input" style="width: 45%;float:right;margin-top:0px">'
                                +  '                            <label class="title mbj-form-label">confirm password</label>'
                                +  '                            <input class="small" style="width:100%;" id="mbj-form-reg-p2-' + modal.uid + '" type="password" name="mbj_password_confirm">'
                                +  '                        </div>'
                                +  '                </div>'
                                +  '                <div style="width: 100%;padding-top:5px;white-space:nowrap;display:inline-block">'
                                +  '                    <div class="element-input" >'
                                +  '                        <label class="title mbj-form-label">ZIP (US only)&mdash;to find cool stuff nearby</label>'
                                +  '                        <input class="small"  style="width:45%;" maxlength="5" id="mbj-form-reg-zip-' + modal.uid + '" type="text" name="mbj_reg_zip"/>'
                                +  '                       ' + locationButtonString
                                +  '                    </div>'
                                +  '                </div>'
                                +  '                <div class="element-input">'
                                +  '                    <label class="title mbj-form-label"><br>Choose only the rewards you want (select 3+)</label>'
                                +  '                    <div class="mbj-category-selector" id="mbj-category-selector-' + modal.uid + '">'
                                +  '                    </div>'
                                +  '                </div>'
                                +  '                <div class="mbj_login_status" id="mbj-login-status-' + modal.uid + '">' 
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
        htmlementString =          '<div class="mbj-notification mbj-modal-payload mbj_notification_container onboard-modal" id="mbj-modal-payload-' + modal.uid + '">'
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
                                +  '    <button type="submit" class="btn-close" id="close-modal-' + modal.uid + '">'
                                +  '        <img src="img/ui_action_close.png">'
                                +  '    </button>'
                                +  '    <img class="bean_notification_image" src="">'
                                +  '</div>';
        return htmlementString;
    },


    // Notification message snippets
    notify: {
        passwordMismatch:       function(modal) { return '<img src="img/ui_action_fail.png"><p class="status success">Passwords do not not not match.</p>' },
        insufficientCategories: function(modal) { return '<img src="img/ui_action_fail.png"><p class="status success">You must select at least 3 categories.</p>' },
        invalidPassword:        function(modal) { return '<img src="img/ui_action_fail.png"><p class="status success">Password must be at least 6 alphanumeric characters. Special characters not allowed.</p>' },
        insufficientLocation:   function(modal) { return '<img src="img/ui_action_fail.png"><p class="status success">No location data provided.</p>' }
    }

}




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                           ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░\  
 * ░░░░▒▒▓▓    MyBeanJar Controller Initialization    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                           ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░
 *                                                                              
 *  Creates a new instance of the MyBeanJar controller object.               
 *                                                                                
 *  It really ties the room together.                                          
 *                                                                                  
*/

var MyBeanJar = new MyBeanJarController();





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                        ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░\  
 * ░░░░▒▒▓▓    Support for Legacy Methods          ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                        ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 *
 *                                                                              
 *  Additional methods to provide backwards compatibility with existing 
 *  MyBeanJar integrations                                                       
 *                                                                                  
*/

var mbjAddAwardBean = function() {
    return MyBeanJar.AwardBean();
}





