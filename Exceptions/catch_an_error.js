function catchError(fn) {
    try {
        fn();
    } catch (error) {
        // Handle the caught error here
        console.error("An error occurred:", error.message);
    }
}

module.exports = catchError;
