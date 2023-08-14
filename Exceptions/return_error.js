function catchError(fn) {
    try {
        fn();
        return false; // No error thrown
    } catch (error) {
        // Handle the caught error here
        console.error("An error occurred:", error.message);
        return error; // Return the caught error
    }
}

module.exports = catchError;
