var unirest = require("unirest");
var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US");
req.headers({
    "x-rapidapi-key": "be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "useQueryString": true
});
req.end(function (res) {
    if (res.error)
        throw new Error(res.error);
    console.log(res.body);
});
