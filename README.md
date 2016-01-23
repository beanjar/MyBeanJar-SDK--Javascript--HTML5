# MyBeanJar SDK for JavaScript + HTML5

MyBeanJar is a mobile commerce/game reward platform that distributes targeted digital coupons for game achievements. These rewards are redeemed straight from the MyBeanJar wallet, which prompts redemption via location-alerts, sharing, and a real-time leaderboard.

* [Overview](#overview)
* [Installation](#install)
* [Examples](#examples)
* [API Documentation](#api)
* [Example Programs](#programs)
* [Troubleshooting](#troubleshooting)
* [License](#license)
* [Support](#support)

<a name="overview"></a>
## Overview
The MyBeanJar SDK allows developers to incorporate the MyBeanJar rewardware service into their games and apps. This package contains basic methods used to interact with the various endpoints of the MyBeanJar API as well as a turn-key user interface manager that takes care of user sign-in, registration, and award fulfillment.

### MyBeanJar Core API Methods
The core API methods contained within this package provide simplified access to all of the MyBeanJar API's endpoints. Built-in support methods handle request building and response handling. The following high-level methods are available for interacting with the MyBeanJar service.

* authenticate_user()
* get_apps()
* get_award()
* get_beans()
* get_categories()
* get_locations_for_sponsor()
* get_sponsors()
* get_winners()
* redeem_bean()
* delete_bean()
* register_user()
* send_password()
* validate_user()

Additional details on their use is provided in the Methods section below.



### User Interface Manager
The user interface manager simplifies things even further by providing a single method ( MyBeanJar.AwardBean() ) that can be used to award beans and to allow users to log in and/or register. Once invoked, this method determines whether or not a user is logged in and generates the appropriate modal object. If a user is not logged in, she is prompted to sign in or register a new account. If a user is logged in, an award modal is generated.

The user interface manager consists of two classes, the MyBeanJar controller and MbjModal, the modal object used for onboarding users and issuing beans. A single instance of the MyBeanJar controller is created at startup and is used to control the creation of modal objects. The MyBeanJar controller keeps track of user data, including beans to be awarded. The MbjModal class creates state-aware modal objects that contain logic to display the right content at the right time.



<a name="installation"></a>
## Installation

###Installing with npm
This package contains an npm manifest that itself contains dependencies and development dependencies. To get up and running via npm and the command line, navigate to the directory containing the MyBeanJar SDK's package.json manifest and enter the following command.

```sh
npm install
```

The npm manifest also includes gulp-based development tools for simple customization of the SDK.



###Manual Installation
Pre-built, concatenated versions of the SDK script and stylesheets are contained within the dist/js and dist/css directories, respectively. Copy mbj-sdk.js and mbj-ui.css to your desired location and link to them from your Web document.

The MyBeanJar SDK depends upon jQuery and Spin.js, so make sure you include those libraries in your project as well.



<a name="Usage"></a>
## Usage

The easiest way to get up and running with MyBeanJar is to attach the following call to any event for which you want the user to receive a bean and let it handle the rest.

```javascript
MyBeanJar.AwardBean();
```


<a name="customization"></a>
## Customization

###MyBeanJar.config
The MyBeanJar SDK includes a series of configuration options to allow you to quickly and easily customize the behavior of the SDK in your integration.

```javascript
MyBeanJarController.prototype = {

    /* *
     * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
     * ░░░░▒▒▓▓    MyBeanJar default settings    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
     * ░░░░▒▒▓▓                                  ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
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
    ...
```


