class Dialog {
  constructor() {
    this.callbackFunction = null; // Initialize the callbackFunction as null
  }

  onClose(callbackFunction) {
    // Store the callback
    this.callbackFunction = callbackFunction;
  }

  close() {
    // Invoke the callback if it's set
    if (this.callbackFunction) {
      this.callbackFunction();
    }
  }
}

module.exports = Dialog;
