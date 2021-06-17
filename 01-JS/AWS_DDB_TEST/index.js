
const AWS = require("aws-sdk");
AWS.config.update({region:"us-east-2"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

//create a test table
const tID = 42;

  var params = {
    TableName : 'TestTable',
    Key:{
      PK:"TEST42",
    },
  };
  
 

  dynamodb.delete(params, function(err, data){
    if (err) console.log(err);
    else console.log(data);
  });