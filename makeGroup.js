    hue = require("../node_modules/node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState
    hostname = "192.168.29.246",
    user = "1bdc19f43daca72f26ccb81c19afbc97",
    api = new HueApi(hostname, user);

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

api.createGroup("Bedroom Lights", [6, 7])
    .then(displayResult)
    .done();
