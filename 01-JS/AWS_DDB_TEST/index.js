
const AWS = require("aws-sdk");
AWS.config.update({region:"us-east-2"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

//create a test table
const tID = 42;

var params = {
    TableName : 'TestTable',
    Item: {
        PK: `TEST${tID}`,
        SK: `TESTDATA${tID}`,
        name:"Test Inc",
        deleteme: "delete"
    }
  };
  
  dynamodb.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });