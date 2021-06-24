var axios = require("axios").default;
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8080"
});


//Get list of countries from skyscanner
var docClient = new AWS.DynamoDB.DocumentClient();
var options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US',
    headers: {
        'x-rapidapi-key': 'be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
};

//Take response from SkyScanner api and throw into database
axios.request(options).then(function (response) {
    console.log(response.data);
    response.forEach(function(country) {
        var params = {
            TableName: "Flight_Countries",
            Item: {
                "Code":  country.Code,
                "Name": country.Name
            }
        };
    
        docClient.put(params, function(err, data) {
           if (err) {
               console.error("Unable to add country", country.Code, ". Error JSON:", JSON.stringify(err, null, 2));
           } else {
               console.log("PutItem succeeded:", country.Code);
           }
        });
    });
}).catch(function (error) {
    console.error(error);
});

//Get flights from JKF to LAX in August
var options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/JFK-sky/LAX-sky/2021-09-01',
    params: {inboundpartialdate: '2019-12-01'},
    headers: {
      'x-rapidapi-key': 'be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
      response.forEach(function(flight) {
        var params = {
            TableName: "August_Flights",
            Item: {
                "Direct":  flight.Direct,
                "MinPrice": flight.MinPrice,
                "OutboundLeg": flight.OutboundLeg,
                "QuoteDateTime": flight.QuoteDateTime,
                "QuoteId": flight.QuoteId
            }
        };
    
        docClient.put(params, function(err, data) {
           if (err) {
               console.error("Unable to add flight", flight.Direct, ". Error JSON:", JSON.stringify(err, null, 2));
           } else {
               console.log("PutItem succeeded:", flight.Code);
           }
        });
    });
  }).catch(function (error) {
      console.error(error);
  });
