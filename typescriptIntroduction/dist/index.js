console.log("This is typescript");
var Holiday;
(function (Holiday) {
    Holiday[Holiday["NEW_YEAR"] = 0] = "NEW_YEAR";
    Holiday[Holiday["INDEPENDENCE_DAY"] = 1] = "INDEPENDENCE_DAY";
    Holiday[Holiday["THANKSGIVING"] = 2] = "THANKSGIVING";
})(Holiday || (Holiday = {}));
console.log(Holiday.NEW_YEAR);
