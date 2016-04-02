var dash_button = require("../node_modules/node-dash-button"),
    hue = require("../node_modules/node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState
    dash = dash_button(["74:c2:46:44:cc:23"]),
    hostname = "192.168.29.246",
    user = "1bdc19f43daca72f26ccb81c19afbc97",
    api = new HueApi(hostname, user),
    on = false;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var state = lightState.create();

dash.on("detected", function (dash_id) {
    console.log("Dash button " + dash_id + " was clicked!");

    var hour = new Date().getHours();
    var brightLight = hour >= 21 || hour <= 6 ? state.bri(85) : state.bri(255);

    if (!on) {
        // Turn on the group of lights
        api.setGroupLightState(3, brightLight.on())
            .then(displayResult)
            .done();
    } else {
        // Turn off the group of lights
        api.setGroupLightState(3, brightLight.off())
            .then(displayResult)
            .done();
    }

    on = !on;
});
