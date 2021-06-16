const AWS = require("aws-sdk");

AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        console.log('Profile:', AWS.config.credentials.profile);
        console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
});