HueApi = require("../node_modules/node-hue-api").HueApi;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.29.246",
    username = "1bdc19f43daca72f26ccb81c19afbc97",
    api;

api = new HueApi(host, username);

// --------------------------
// Using a callback
//api.lights(function(err, lights) {
//    if (err) throw err;
//    displayResult(lights);
//});

api.groups()
    .then(displayResult)
    .done();
