var unirest = require("unirest");
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8080"
});


// We're pulling array of countries we can fly to
var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US");

req.headers({
	"x-rapidapi-key": "be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4",
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"useQueryString": true
});

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US',
  headers: {
    'x-rapidapi-key': 'be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.code);
	console.log(response.data.name);
}).catch(function (error) {
	console.error(error);
});

//Load set of countries into Dynamo

var docClient = new AWS.DynamoDB.DocumentClient();

req.end(function (res) {
	if (res.error) throw new Error(res.error);
	
	var allCountries = res.body;
	allCountries.forEach(element => {
		var countries = {
			TableName : "Countries",
			Item : {
				"code" : element.code,
				"name" : element.year
			}
		};

		docClient.put(countries, function(err, data) {
			if (err) {
				console.error("Unable to add movie", element.code, ". Error JSON:", JSON.stringify(err, null, 2));
			} else {
				console.log("PutItem succeeded:", element.name);
			}
		});
	
	});
	console.log(res.body);
});


