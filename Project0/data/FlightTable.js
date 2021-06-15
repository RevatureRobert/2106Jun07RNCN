var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8080"
});

var dynamodb = new AWS.DynamoDB();
