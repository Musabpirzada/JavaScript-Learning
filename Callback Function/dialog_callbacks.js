class Dialog {
  constructor() {
    this.callbackFunctions = []; // Initialize an empty array to store callback functions
  }

  onClose(callbackFunction) {
    // Store the callback in the array
    this.callbackFunctions.push(callbackFunction);
  }

  close() {
    // Invoke all the stored callback functions
    for (const callback of this.callbackFunctions) {
      callback();
    }
  }
}

module.exports = Dialog;
