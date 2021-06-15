var axios = require("axios").default;
var AWS = require("aws-sdk");


AWS.config.loadFromPath('./config.json');
//const config =

//AWS.config.update(config.aws_remote_config);c

var docClient = new AWS.DynamoDB.DocumentClient();

var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US',
  headers: {
    'x-rapidapi-key': 'be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.Countries);

    let countries = response.data.Countries;
    countries.forEach(element => {
        var params = {
            TableName: "Flight_Countries",
            Item: {
                "Code": element.Code,
                "Name": element.Name
            }
        };

        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add movie", element.Code, ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("PutItem succeeded:", element.Name);
            }
        });
        
    });


}).catch(function (error) {
	console.error(error);
});