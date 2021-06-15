var axios = require("axios").default;
var AWS = require("aws-sdk");

//Load config file and establish client
AWS.config.loadFromPath('./config.json');
var docClient = new AWS.DynamoDB.DocumentClient();

var optionsGetCountries = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US',
  headers: {
    'x-rapidapi-key': 'be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

var optionsGetOutbound = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/JFK-sky/SFO-sky/2021-08',
    params: {inboundpartialdate: '2019-12-01'},
    headers: {
      'x-rapidapi-key': 'be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };
  
  axios.request(optionsGetOutbound).then(function (response) {
      console.log(response.data.Quotes);
      
      let augustFlights = response.data.Quotes;
      augustFlights.forEach(element => {
          var params = {
              TableName: "August_Flights",
              Item: {
                  "QuoteId": element.QuoteId,
                  "MinPrice": element.MinPrice,
                  "Direct": element.Direct,
                  "OutboundLeg": element.OutboundLeg,
                  "QuoteDateTime": element.QuoteDateTime
              }
          };

          docClient.put(params, function(err, data) {
              if(err) {
                  console.error("Unable to add movie", element.QuoteId, "Error JSON: ", JSON.stringify(err, null, 2));
              } else {
                  console.log("Put item succeeded: ", element.QuoteId);
              }
          });
      });


  }).catch(function (error) {
      console.error(error);
  });

axios.request(optionsGetCountries).then(function (response) {
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

    //     docClient.put(params, function(err, data) {
    //         if (err) {
    //             console.error("Unable to add movie", element.Code, ". Error JSON:", JSON.stringify(err, null, 2));
    //         } else {
    //             console.log("Put Item succeeded:", element.Name);
    //         }
    //     });
        
     });


}).catch(function (error) {
	console.error(error);
});