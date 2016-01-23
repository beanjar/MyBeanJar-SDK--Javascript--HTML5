/* *
 *                                                                                                                        
 *        ************ **********                                            
 *       **      *    **** **** ***                                           
 *       **   **   **  **   **   **                                           
 *       **   **   **   *   **   **                                           
 *       **   **   **   *   **   **                                           
 *       **   **   **   *   **   **                                           
 *       **   **   **   **   *   **                                           
 *       *******************     **                                           
 *       **           ********   **                                           
 *       **    ****    ***   *   **                                           
 *       **    *****   ****     **                                            
 *       **    *****   *************   **********  ************               
 *       **    *****   ****        *****        ***           **              
 *       **    ***    ***     **    **    ****   **    ****    **             
 *       **           ***    ****    *    ****    *    ****    **             
 *       **    ****    **    ****    ****+****    *    ****    **             
 *       **    *****   **          ****           *    ****    **             
 *       **    *****   **    *********    ****    *    ****    **             
 *       **    *****   **    ****   **    ****    *    ****    **             
 *       **    *****   **    ****   **    ****    *    ****    **             
 *       **    ***    ****    **   ****    **    **    ****    **             
 *       **+*     ****  ****      ******       ****   *****   **             
 *         ********    ****************************************              
 *                   ***+......++******         **           ***             
 *                   **+.. ......+***    ****    *    ****    ***            
 *                  ***..   ....+++**    ****    *    *****    **            
 *                  **+..   .....++**********    *    **********             
 *                 ***..    .....++***           *    ***   **               
 *             *****...     ....+++**    ****    *    ***                    
 *           ***++...     .....++++**    ****    *    ***                    
 *          ***+..       ....+++++***    ****    *    ***                    
 *          **+...    ......+++++*****    **    **    ***                    
 *          **+..........++++++****  ***      *****  ***                     
 *           ***++.....++++++****       ******    ****                       
 *            *****+++++++*****                                              
 *               **********  
 *
 *
 *
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓                               ▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓    mbj-sdk.js                 ▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓                               ▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓    MyBeanJar HTML / JS SDK    ▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓    UI Kit                     ▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓                               ▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░
 * ░░░░░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░
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

    // If connection is insecure, disable the use of location services
    if (location.protocol !== 'https:') {
        this.Log('Connection is insecure. Disabling the use of location services.');
        this.config.offerLocation = false;
    }

    // Send an alert if appID is not set
    if (this.config.appID == '') {
        this.Log('MyBeanJar app ID not set. Add a valid app ID to mbj-sdk.js');
    }

    // Fetch bean award categories from MyBeanJar servers
    else {
        this.FetchCategories();
    }
}

MyBeanJarController.prototype = {

    /* *
     * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
     * ░░░░▒▒▓▓    MyBeanJar default settings    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
     * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    */
    
    config: { 

        /* * * * * * * * * * * * * * * * * * * * * * * *\
        *                                               *
        *   TOTALLY EDITABLE!                           *
        *                                               *
        *   Edit as needed to suit your application.    *
        *                                               *
        \* * * * * * * * * * * * * * * * * * * * * * * */

        hardUser:       'ryanfister3',                              // Username for use with API calls not related to actual user
        hardPass:       '40f4d87250c70278580bc8fb47e5caaa',         // Password for use with API calls not related to actual user
        appID:          '',                                         // The app key to be used to make API requests (visit http://mybeanjar.com for details)
        debugMode:      false,                                      // Enable/disable debug logging
        rewardLogin:    false,                                      // Enable/disable awards for user log-ins
        offerLocation:  false                                       // Enable/disable the option to use location during registration (NOTE: CURRENTLY DISABLED ON SERVER)

    },

    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */ 



    /* *
     * ░░░░▒▒▓▓
     * ░░░░▒▒▓▓    MyBeanJar controller object properties    
     * ░░░░▒▒▓▓
    */
    
    constructor: MyBeanJarController,
    categories: {},                                             // An array of bean categories, to be populated with data fetched from MyBeanJar servers
    queuedBeans: {},                                            // Beans queued to be fetched from server
    username: {},                                               // The username of the logged-in user (if present)
    userLoggedIn: false,                                        // User's log-in state



    /* *
     * ░░░░▒▒▓▓
     * ░░░░▒▒▓▓    MyBeanJar controller object methods    
     * ░░░░▒▒▓▓
    */

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
        var registerButton  = document.getElementById('mbj-register-button-' + this.uid);
        
        // Only display "Get Location" button if enabled and if content served over HTTPS
        if (MyBeanJar.config.offerLocation == true) {
            var locationButton  = document.getElementById('btn-geolocator-' + this.uid);

            locationButton.addEventListener('click', function(){
                MyBeanJar.GetLocation.bind(this)(this.StoreLocation);
            }.bind(this));
        }

        backButton.addEventListener('click', function(){
            this.lastView();
        }.bind(this));

        closeButton.addEventListener('click', function(){
            this.SelfDestruct();
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
        if (MyBeanJar.config.offerLocation == true) {
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
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\  
 * ░░░░▒▒▓▓    High-level request methods    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓    (mbj-sdk.api-methods.js)      ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/





/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    API Constants
 * ░░░░▒▒▓▓
*/

var API_URL = "https://api.mybeanjar.com/json/services";
var INTERNAL_SERVER_ERROR = "Internal Server Error";
var STATUS_SUCCESS = "Status success";
var STATUS_FAIL  = "Status fail";



/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    High-level API methods  
 * ░░░░▒▒▓▓
*/

function authenticate_user(username,password,callback) {
    var params = {
        "username": username,
        "password": MD5(password)
    }

    return request_to_api(callback, "v2services", "authenticateUser", params, API_URL);
}

function delete_bean(username, password, beankey, callback) {
    var params = {
        "username": username,
        "password": MD5(password),
        "beankey": beankey
    }

    return request_to_api(callback, "v2services", "deletebean", params, API_URL);
}

function get_apps(username, password, limit_value, callback) {

/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    [NOTICE]
 * ░░░░▒▒▓▓    Password optional at present. NOTE: This may change in the future.
 * ░░░░▒▒▓▓
*/

//    var params = {
//        username: username,
//        password: MD5(password),
//        limit: limit_value
//    }

    var params = {
        username: username,
        password: password,
        limit: limit_value
    }

    return request_to_api(callback, "v2services", "apps", params, API_URL);
}

function get_award(username, password, appkey, callback) {

    var params = {
        username: username,
        password: MD5(password),
        appkey: appkey
    }

    return request_to_api(callback, "v2services", "awardcoupon", params, API_URL);
}


function get_beans(username, password, limit_value, sort_by, callback) {

    var params = {
        username: username,
        password: MD5(password),
        limit: limit_value,
        sortby: sort_by
    }

    return request_to_api(callback, "v2services", "beans", params, API_URL);
}

function get_categories(username, password, callback) {

/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    [NOTICE]
 * ░░░░▒▒▓▓    Password optional at present. NOTE: This may change in the future.
 * ░░░░▒▒▓▓
*/

//    var params = {
//        username: username,
//        password: MD5(password)
//    }

    var params = {
        username: username,
        password: password
    }

    return request_to_api(callback, "v2services", "categories", params, API_URL);
}

function get_locations_for_sponsor(username,password,sponsorkey,callback){
    
    var params = {
        username: username,
        password: password,
        sponsorkey: sponsorkey,
    };
    
    return request_to_api(callback, "v2services", "sponsorlocations", params, API_URL); 
}

function get_sponsors(username, password, limit_value, callback) {

/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    [NOTICE]
 * ░░░░▒▒▓▓    Password optional at present. NOTE: This may change in the future.
 * ░░░░▒▒▓▓
*/

//    var params = {
//        username: username,
//        password: MD5(password),
//        limit: limit_value
//    }

    var params = {
        username: username,
        password: password,
        limit: limit_value,
    }

    return request_to_api(callback, "v2services", "sponsors", params, API_URL);
}

function get_winners(limit_value, callback) {

    var params = {
        limit: limit_value
    };

    return request_to_api(callback, "v2services", "winners", params, API_URL);
}

function reedem_bean(username, password, beankey, callback) {
    var params = {
        "username": username,
        "password": MD5(password),
        "beankey": beankey
    }
    
    return request_to_api(callback, "v2services", "redeembean", params, API_URL);
}

function register_user(username, password, email, zipcode, lat, lon, categories, callback) {

/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    [NOTICE]
 * ░░░░▒▒▓▓    Issues have been reported with use of lat/long data
 * ░░░░▒▒▓▓
*/

    var params = {
        "username": username,
        "password": MD5(password),
        "email": email,
        "zipcode": zipcode,
        "categories": categories,
        "lat": lat,
        "lon": lon
    }

    return request_to_api(callback, "v2services", "registerUser", params, API_URL);
}

function send_password(username, callback) {

    var params = {
        "username": username
    }

    return request_to_api(callback, "v2services", "sendpassword", params, API_URL);
}

function validate_user(username,callback){
    
    var params = {
        "username":username
    }

    return request_to_api(callback, "v2services", "validateuser", params, API_URL);
}






/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\  
 * ░░░░▒▒▓▓    API Response Parsers          ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓    (mbj-sdk.api-parser.**.js)    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/



/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Apps Response
 * ░░░░▒▒▓▓
*/

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
    
    if (data.indexOf(INTERNAL_SERVER_ERROR) > -1){
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
    } 

    else {
        result = STATUS_FAIL;
        callback(result,apps);
    }
}




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



/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Award Response
 * ░░░░▒▒▓▓
*/

var currentWinArray = [];



function parse_award(currentWinArray) {
    var award = [];

    award.push({
        awarded: currentWinArray.awarded,
        beankey: currentWinArray.beankey,
        imageurl: currentWinArray.imageurl,
        message: currentWinArray.message
    });

    return award;
}



function parse_award_and_callback(data, callback) {
    
    if (data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,award);
        return;
    }
    
    award = [];
    //awardArray = [];
    var json = JSON.parse(data);
    console.log("start get json");
    console.log(json);
    var status = json.status;


    var result;
    if (status === 1) {
        //awardArray = json.response;
        award = json.response;
        parse_award(award);
        result = STATUS_SUCCESS;
        callback(result,award);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,award);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Beans Response
 * ░░░░▒▒▓▓
*/

var beans = [];
var beansArray = [];
var numberOfBeans;



function parse_beans(beans) {
    for (var i = 0; i < numberOfBeans; i++) {
        push_to_beans(beans, i);
    }

    return beans;
};



function push_to_beans(beans,i) {
    beans.push({
        beankey: beansArray[i].beankey,
        expirationdate: beansArray[i].expirationdate,
        game: beansArray[i].game,
        geocodekey: beansArray[i].geocodekey,
        longdescription: beansArray[i].longdescription,
        redeembarcodeurl: beansArray[i].redeembarcodeurl,
        redemptionurl: beansArray[i].redemptionurl,
        redemptionvalidation: beansArray[i].redemptionvalidation,
        shortdescription: beansArray[i].shortdescription,
        sponsorkey: beansArray[i].sponsorkey,
        sponsorlogourl: beansArray[i].sponsorlogourl,
        sponsorname: beansArray[i].sponsorname,
        sponsorurl: beansArray[i].sponsorurl,
        wondate: beansArray[i].wondate,
        days: get_expiration_days(beansArray[i].expirationdate)
    });
};



function parse_beans_and_callback(data, callback) {
    
    if (data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,beans);
        return;
    }
    
    beans = [];
    beansArray = [];
    var json = JSON.parse(data);
    var status = json.status;
    var result;
    
    if (status === 1) {
        beansArray = json.response.beans;
        numberOfBeans = beansArray.length;
        parse_beans(beans);
        result = STATUS_SUCCESS;
        callback(result,beans);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,beans);
    }
}



function get_expiration_days(date) {
    var expirationdate = new Date(date);
    var now = new Date();
    var timeDiff = Math.abs(expirationdate.getTime() - now.getTime());

    return Math.floor(timeDiff / (60 * 60 * 24 * 1000));
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Categories Response
 * ░░░░▒▒▓▓
*/

var categories = [];
var categoriesArray = [];
var numberOfCategories;



function parse_categories(categories) {
    for (var i = 0; i < numberOfCategories; i++) {
        push_to_categories(categories, i);
    }

    return categories;
}



function push_to_categories(categories, i) {
    categories.push({
        categorykey: categoriesArray[i].categorykey,
        name: categoriesArray[i].name,
    });
}



function parse_categories_and_callback(data, callback) {
    
    if (data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,categories);
        return;
    }
    
    categories = [];
    categoriesArray = [];
    var json = JSON.parse(data);
    var status = json.status;
    
    var result;
    if (status === 1) {
        categoriesArray = json.response.categories;
        numberOfCategories = categoriesArray.length;
        parse_categories(categories);
        result = STATUS_SUCCESS;
        callback(result,categories);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,categories);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Delete Bean Response
 * ░░░░▒▒▓▓
*/

function parse_deletebean_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    var json = JSON.parse(data);
    
    console.log("this is deletebean json ");
    console.log(json);
    var status = json.status;
    var message = json.response.message;
    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    MD5 Helper
 * ░░░░▒▒▓▓
*/

var MD5 = function (string) {
 
    function RotateLeft(lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }
 
    function AddUnsigned(lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
     }
 
    function F(x,y,z) { return (x & y) | ((~x) & z); }
    function G(x,y,z) { return (x & z) | (y & (~z)); }
    function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }
 
    function FF(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function GG(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function HH(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function II(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };
 
    function WordToHex(lValue) {
        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        }
        return WordToHexValue;
    };
 
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
 
        for (var n = 0; n < string.length; n++) {
 
            var c = string.charCodeAt(n);
 
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
 
        return utftext;
    };
 
    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;
 
    string = Utf8Encode(string);
 
    x = ConvertToWordArray(string);
 
    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
    for (k=0;k<x.length;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }
 
    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
    return temp.toLowerCase();
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Password Recovery Response
 * ░░░░▒▒▓▓
*/

function parse_sendpassword_and_callback(data, callback) {
    
    if (data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,winners);
        return;
    }
    
    if (data == null || data == 'undefinied' || data == "" || data == "null"){
        result = STATUS_FAIL;
        callback(result,message);
        return;
    }
    
    console.log("this is data");
    console.log(data);
    var json = JSON.parse(data);
    console.log("this is json from send password");
    console.log(json);
    
    var status = json.status;
    var message = json.response.message;

    var result;
    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Redeem Bean Response
 * ░░░░▒▒▓▓
*/

function parse_redeembean_and_callback(data, callback) {
    
    if (data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    console.log("this is reedem data");
    console.log(data);
    var json = JSON.parse(data);
    console.log("this is reedem json ");
    console.log(json);
    var status = json.status;
    var result;
    var message = json.response.message;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Registration Response
 * ░░░░▒▒▓▓
*/

function parse_register_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    var json = JSON.parse(data);
    console.log("this is register json ");
    console.log(json);
    var status = json.status;
    var message = json.response.message;
    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Password Recovery Response
 * ░░░░▒▒▓▓
*/

function parse_sponsor_locations_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    console.log("this is data from locations of sponsor" + data);
    
    var json = JSON.parse(data);
    var status = json.status;
    var message = data;

    var result;
    
    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Sponsors Response
 * ░░░░▒▒▓▓
*/

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
};



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
    } 

    else {
        result = STATUS_FAIL;
        callback(result,sponsors);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    User Validation Response
 * ░░░░▒▒▓▓
*/

function parse_validateuser_and_callback(data, callback) {
    
    if(data.indexOf(INTERNAL_SERVER_ERROR) > -1){
        result = INTERNAL_SERVER_ERROR;
        callback(result,message);
        return;
    }
    
    var json = JSON.parse(data);
    console.log("this is validate json ");
    console.log(json);
    var status = json.status;
    var message = json.response.message;

    var result;

    if (status === 1) {
        result = STATUS_SUCCESS;
        callback(result,message);
    } 

    else {
        result = STATUS_FAIL;
        callback(result,message);
    }
}




/* *
 * ░░░░▒▒▓▓
 * ░░░░▒▒▓▓    Winners Response
 * ░░░░▒▒▓▓
*/

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
    } 

    else {
        result = STATUS_FAIL;
        callback(result,winners);
    }
}






/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\  
 * ░░░░▒▒▓▓    API Request Builder           ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\ 
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓    (mbj-sdk.api-requester.js)    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/


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
 *  MyBeanJar integrations.                                                       
 *                                                                                  
*/

var mbjAddAwardBean = function() {
    return MyBeanJar.AwardBean();
}





