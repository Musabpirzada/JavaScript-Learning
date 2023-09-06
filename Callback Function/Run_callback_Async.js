/**
 * Runs a callback function asynchronously after 1 second
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
  setTimeout(callbackFunction, 1000); // Delay execution by 1000 milliseconds (1 second)
}

module.exports = runCallback;
