/* eslint no-unused-vars: "error" */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Assuming the API call is successful
      const response = { message: 'API response' };
      resolve(response);

      // If there's an error, you can reject the Promise
      // reject(new Error('API request failed'));
    }, 2000); // Simulating a delay of 2 seconds
  });
}
