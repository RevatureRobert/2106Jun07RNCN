var unirest = require("unirest");
var req = unirest("GET", "https://vx-e-additives.p.rapidapi.com/categories/6");
req.query({
    "locale": "en"
});
req.headers({
    "x-rapidapi-key": "be2957b1f3msh586aed459ef47ffp109e49jsn5f8093a8bbe4",
    "x-rapidapi-host": "vx-e-additives.p.rapidapi.com",
    "useQueryString": true
});
req.end(function (res) {
    if (res.error)
        throw new Error(res.error);
    console.log(res.body);
});
