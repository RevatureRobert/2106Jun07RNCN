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
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});