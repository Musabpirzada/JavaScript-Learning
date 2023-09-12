const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        // Step 1: Get results
        const results = await getResults(patientId);

        // Step 2: Send results
        const response = await sendResults(patientId, results);

        // Step 3: Log response
        await logResponse(response);

        // If you want to return something, you can return a success message or a specific value here.
        return 'Results handled successfully';
    } catch (error) {
        // Handle any errors that occur during the process
        await logError(error);
        throw error; // Re-throw the error to propagate it further if needed.
    }
}

module.exports = handleResults;
