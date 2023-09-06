What are the major app models?/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
  callbackFunction();
}

module.exports = runCallback;
