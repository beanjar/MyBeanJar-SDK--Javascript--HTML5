# MyBeanJar SDK for JavaScript + HTML5

The MyBeanJar JS SDK allows you to incorporate the [MyBeanJar rewardware service](http://mybeanjar.com) into your Web apps and games. It contains methods used to interact with the various endpoints of the MyBeanJar API as well as a turn-key user interface manager that takes care of user sign-in, registration, and award fulfillment.

* [Overview](#overview)
* [Installation](#installation)
* [Configuration](#configuration)
* [Usage](#usage)


<a name="overview"></a>
## Overview
MyBeanJar is a mobile commerce/game reward platform that distributes targeted digital coupons for game achievements. These rewards are redeemed straight from the MyBeanJar wallet, which prompts redemption via location-alerts, sharing, and a real-time leaderboard.

Instead of providing users with empty badges, trophies, or achievements, MyBeanJar allows you to reward users with real-world coupons and offers served up on demand.

The MyBeanJar SDK allows developers to incorporate the MyBeanJar rewardware service into their games and apps. This package contains basic methods used to interact with the various endpoints of the MyBeanJar API as well as a turn-key user interface manager that takes care of user sign-in, registration, and award fulfillment.


<a name="installation"></a>
## Installation

### Installing with npm
This package contains an npm manifest that itself contains dependencies and development dependencies. To get up and running via npm and the command line, navigate to the directory containing the MyBeanJar SDK's package.json manifest and enter the following command,

```sh
npm install
```

This will install the SDK files and their dependencies into your project.

##### Customization
The npm manifest also includes gulp-based development tools for simple customization of the SDK. Customizations can be made to JavaScript and SCSS files contained within the ```SRC``` directory. The build scripts provided will process and autoprefix stylesheets and combine and minify the SDK's JavaScript components into a single production-ready file, ```mbj-sdk-min.js```.

To use the build scripts to prepare the SDK files for production, run the following command from the project directory,

```sh
gulp
```

The build scripts will then run any time a change is made to the ```src``` files and output the production files to the ```JS``` and ```CSS``` directories of your project. If your project uses a different directory structure, you can modify the output locations by editing the ```gulpfile.js``` file in the project directory.

### Manual Installation
Copy the folders containing the SDK files into your project,

```
JS
CSS
FONT
IMG
```

Include a reference to the files in your project by copying the following code and pasting it into the `<head>` element of your project's HTML file(s),

```HTML
<!-- STYLES -->
<link type="text/css" rel="stylesheet" href="css/mbj-ui.css" />

<!-- SCRIPTS -->
<script type="text/javascript" src="js/mbj-sdk.js"></script>
```

##### Don't forget the dependencies!
The MyBeanJar SDK depends on **jQuery** and **spin.js**—be sure to include them in your project,

* https://github.com/jquery/jquery/
* https://github.com/fgnass/spin.js/


<a name="configuration"></a>
## Configuration

### Register your app
Before you can begin integrating MyBeanJar into your apps and games, you must first [register your app on MyBeanJar.com](http://www.mybeanjar.com/#contact). 
Once you've registered your app, you will receive an App ID that will be used to access the MyBeanJar API. Copy and paste your App ID into the `appID` property in `mbj-sdk.js`,

```javascript
MyBeanJarController.prototype = {

    /* *
     * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
     * ░░░░▒▒▓▓    MyBeanJar default settings    ▓▓▒▒░░░░░░░░░░░░░░░░░░░░░
     * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
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

Once you've added your app ID to the SDK code, you're ready to start making calls.


<a name="usage"></a>
## Usage

### Basic (issuing rewards)
One of the more common uses of MyBeanJar is to issue rewards to your users for completing tasks within your games or apps. The MyBeanJar SDK's UI kit simplifies this process by allowing you to initiate the entire reward flow with a single call; the SDK handles everything else.

To issue an award to your users, simply add the following call to the handler for the event for which you'd like to issue a reward,

```javascript
MyBeanJar.AwardBean();
```

This will trigger the award flow within the SDK. From here, the SDK will determine whether or not a user has signed into MyBeanJar. If they _**have not** signed in_, the SDK will spawn a modal that prompts the user to sign in or register. If they _**have** signed in_, the SDK will send a request to the MyBeanJar API to award a bean to the user. Once the SDK receives a response from the MyBeanJar API, it will spawn another modal containing the reward notification that gets displayed to the user.

All of this happens automagically, without the need for additional calls. Just make sure ```MyBeanJar.AwardBean();``` gets called whenever you want a user to receive a reward bean and the SDK will handle the rest.

### Advanced
In addition to providing access to the endpoints used for awarding beans and registering and authenticating users, the MyBeanJar SDK also provides methods for accessing the MyBeanJar APIs other endpoints as well. The following is a list of all of the API methods available through the SDK,

* [authenticate_user()](#authenticate_user)
* [get_apps()](#get_apps)
* [get_award()](#get_award)
* [get_beans()](#get_beans)
* [get_categories()](#get_categories)
* [get_locations_for_sponsor()](#get_locations_for_sponsor)
* [get_sponsors()](#get_sponsors)
* [get_winners()](#get_winners)
* [redeem_bean()](#redeem_bean)
* [delete_bean()](#delete_bean)
* [register_user()](#register_user)
* [send_password()](#send_password)
* [validate_user()](#validate_user)


<a name="authentivate_user"></a>
#### authenticate_user()
##### Description
Determines whether the supplied credentials are valid for a supplied username

##### Parameters
`username` (string)
The username of the account to be authenticated

`password` (string)
The password of the account to be authenticated

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `message`

##### Callback Parameters
`result` (string)
The status of the request

`message` (string)
A verbose description of the result of the request

##### JSON Response Structure
```javascript
“response” : {
    “message” :
}
“status” :
```

##### Additional Notes
The password parameter is expected in plaintext. The SDK automatically hashes it before it is included in the request.


<a name="get_apps"></a>
#### get_apps()
##### Description
Returns an array of apps that use MyBeanJar

##### Parameters
`username` (string)
The username of the account making the request

`password` (string)
The password of the account making the request

`limit_value` (int)
The maximum number of apps to return

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `apps`

##### Callback Parameters
`result` (string)
The status of the request

`apps` (array)
An array of apps, including key-value pairs for each app

##### JSON Response Structure
```javascript
“response” : {
  “apps” : [{
    “appkey” :,
    “appstoreurl” :,
    “description” :,
    “iconurl” :,
    “name” :,
    “publisher” :,
    “publisherkey” :,
    “publisherurl” :
  }]
}
“status” :
```

##### Additional Notes
This method does not automatically hash the password parameter before submitting. However, the server expects an MD5 hash. Be sure to hash passwords before passing them to this function.


<a name="get_award"></a>
#### get_award()
##### Description
Adds a Bean to the user’s wallet. Information about the awarded Bean is returned in the callback.

##### Parameters
`username` (string)
The username of the account receiving the bean

`password` (string)
The password of the account receiving the bean

`appkey` (string)
The unique ID of the app making the request

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `award`

##### Callback Parameters
`result` (string)
The status of the request

`award` (array)
An array of award Beans, including key-value pairs for each Bean.

##### JSON Response Structure
```javascript
“response” : {
  award : [{
    “awarded” :,
    “beankey” :,
    “imageurl” :,
    “iconurl” :,
    “message” :
  }]
}
“status” :
```

##### Additional Notes
This method does not automatically hash the password parameter before submitting. However, the server expects an MD5 hash. Be sure to hash passwords before passing them to this function.


<a name="get_beans"></a>
#### get_beans()
##### Description
Returns an array of Beans available to be awarded to users.

##### Parameters
`username` (string)
The username of the account making the request.

`password` (string)
The password of the account making the request.

`limit_value` (int)
The maximum number of Beans to return.

`sort_by` (int)
The sort method by which results will returned. Valid sort methods include:
* 0: Sort by award date
* 1: Sort by expiration date
* 2: Sort by user proximity
* 3: Sort by sponsor name
* 4: Sort by category name

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `beans`

##### Callback Parameters
`result` (string)
The status of the request

`beans` (array)
An array of Beans, including key-value pairs for each Bean.

##### JSON Response Structure
```javascript
“response” : {
  “beans” : [{
    “beankey” :,
    “expirationdate” :,
    “game” :,
    “geocodekey” :,
    “longdescription” :,
    “redeembarcodeurl” :,
    “redemptionurl” :,
    “redemptionvalidation” :,
    “shortdescription” :,
    “sponsorkey” :,
    “sponsorlogourl” :,
    “sponsorname” :,
    "sponsorurl” :,
    “wondate” :
  }]
}
“status” :
```

##### Additional Notes
The password parameter is expected in plaintext. The SDK automatically hashes it before it is included in the request.




<a name="get_categories"></a>
#### get_categories()
##### Description
Returns an array of categories in which Beans can be awarded.

##### Parameters
`username` (string)
The username of the account making the request.

`password` (string)
The password of the account making the request.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `categories`

##### Callback Parameters
`result` (string)
The status of the request

`categories` (array)
An array of categories, including key-value pairs for each Bean.

##### JSON Response Structure
```javascript
“response” : {
  “categories” : [{
    “categorykey” :,
    “name” :
  }]
}
“status” :
```

##### Additional Notes
This method does not automatically hash the password parameter before submitting. However, the server expects an MD5 hash. Be sure to hash passwords before passing them to this function.


<a name="get_locations_for_sponsor"></a>
#### get_locations_for_sponsor()
##### Description
Returns an array of redemption locations for a given sponsor.

##### Parameters
`username` (string)
The username of the account making the request.

`password` (string)
The password of the account making the request.

`sponsorkey` (string)
The unique ID of the sponsor for which redemption locations are sought.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `locations`

##### Callback Parameters
`result` (string)
The status of the request

`locations` (array)
An array of redemption location objects, including key-value pairs for each location.

##### JSON Response Structure
```javascript
“response” : {
  "locations" : [{}]
}
“status” :
```

##### Additional Notes
This method is still under development. Any calls made using this method will yield only an empty locations array

This method does not automatically hash the password parameter before submitting. However, the server expects an MD5 hash. Be sure to hash passwords before passing them to this function.


<a name="get_sponsors"></a>
#### get_sponsors()
##### Description
Returns an array of sponsors associated with Beans

##### Parameters
`username` (string)
The username of the account making the request.

`password` (string)
The password of the account making the request.

`limit_value` (int)
The maximum number of sponsors to return.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `sponsors`

##### Callback Parameters
`result` (string)
The status of the request

`sponsors` (array)
An array of sponsors, including key-value pairs for each location.

##### JSON Response Structure
```javascript
“response” : {
  "sponsors" : [{
    "description" :,
    "geocodekey" :,
    "logourl" :,
    "name" :,
    "siteurl" :,
    "sponsorkey":
  }]
}
“status” :
```

##### Additional Notes
This method does not automatically hash the password parameter before submitting. However, the server expects an MD5 hash. Be sure to hash passwords before passing them to this function.


<a name="get_winners"></a>
#### get_winners()
##### Description
Returns the cumulative number of Beans awarded (system-wide) along with details on each Bean.

##### Parameters
`limit_value` (int)
The maximum number of sponsors to return.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `winners`

##### Callback Parameters
`result` (string)
The status of the request

`winners` (array)
An array of winners and their awarded Beans, including key-value pairs for
each.

##### JSON Response Structure
```javascript
“response” : {
  "totalbeans" :,
  "winners" : [{
    "appkey" :,
    "appname" :,
    "sponsorlogourl" :,
    "username" :
  }]
}
“status” :
```

##### Additional Notes
This method does not automatically hash the password parameter before submitting. However, the server expects an MD5 hash. Be sure to hash passwords before passing them to this function.


<a name="redeem_bean"></a>
#### redeem_bean()
##### Description
Redeems a Bean contained within the user’s wallet. On redemption, the Bean is removed from the user’s wallet. This call returns a redemption code for the transaction.

##### Parameters
`username` (string)
The username of the account redeeming the Bean.

`password` (string)
The password of the account redeeming the Bean.

`beankey` (string)
The unique ID of the Bean to be redeemed.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `message`

##### Callback Parameters
`result` (string)
The status of the request

`message` (array)
A verbose description of the result of the request.

##### JSON Response Structure
```javascript
“response” : {
  “message” :
  “data” : [{
    “0” :,
    “1” :
  }]
}
“status” :
```

##### Additional Notes
Earlier versions of the SDK contain a typo in the declaration of this method (i.e., “reedem_bean” versus “redeem_bean”).

The password parameter is expected in plaintext. The SDK automatically hashes it before it is included in the request.

This method is still under development. The unparsed JSON response to this request appears to include a malformed key-value pair. Within the “data” object is an array containing keys of “0” and “1” with values of “redemptioncode” and an actual redemption code.


<a name="delete_bean"></a>
#### delete_bean()
##### Description
Deletes a specified Bean from the user’s wallet.

##### Parameters
`username` (string)
The username of the account from which the Bean is to be deleted.

`password` (string)
The password of the account from which the Bean is to be deleted.

`beankey` (string)
The unique ID of the Bean to be deleted.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `message`

##### Callback Parameters
`result` (string)
The status of the request

`message` (array)
A verbose description of the result of the request.

##### JSON Response Structure
```javascript
“response” : {
  “message” :
}
“status” :
```

##### Additional Notes
The password parameter is expected in plaintext. The SDK automatically hashes it before it is included in the request.


<a name="register_user"></a>
#### register_user()
##### Description
Registers a new user account. Also triggers an activation e-mail message to be sent to the address supplied. Accounts remain inactive until they are activated by user.

##### Parameters
`username` (string)
The desired username of the account to be registered.

`password` (string)
The desired password of the account to be registered.

`email` (string)
The e-mail address to be associated with the account to be registered.

`zipcode` (string)
The ZIP code to be associated with the account to be registered.

`categories` (array)
An array of category ID strings.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `message`

##### Callback Parameters
`result` (string)
The status of the request

`message` (array)
A verbose description of the result of the request.

##### JSON Response Structure
```javascript
“response” : {
  “message” :
}
“status” :
```

##### Additional Notes
The password parameter is expected in plaintext. The SDK automatically hashes it before it is included in the request.

The categories parameter should have no fewer than three category IDs included within it.


<a name="send_password"></a>
#### send_password()
##### Description
Sends an e-mailed password recovery link to the e-mail address associated with the specified username.

##### Parameters
`username` (string)
The username of the account for which a password recovery message is to be sent.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `message`

##### Callback Parameters
`result` (string)
The status of the request

`message` (array)
A verbose description of the result of the request.

##### JSON Response Structure
```javascript
“response” : {
  "message" :
}
“status” :
```

##### Additional Notes
Contrary to its name, this method does not actually send a password to the specified user. Rather, this method triggers the sending of a password recovery link to the e-mail address of the specified user.


<a name="validate_user"></a>
#### validate_user()
##### Description
Returns the status of the account for a specified username (i.e., whether or not the account exists).

##### Parameters
`username` (string)
The username of the account for which a password recovery message is to be sent.

`callback` (function)
The function to be performed on completion of the request. Receives two parameters from the API, `result` and `message`

##### Callback Parameters
`result` (string)
The status of the request

`message` (array)
A verbose description of the result of the request.

##### JSON Response Structure
```javascript
“response” : {
  "message" :
}
“status” :
```

##### Additional Notes
Does not actually validate the account of the username supplied. This method only indicates whether the account has been previously validated/activated by the user.