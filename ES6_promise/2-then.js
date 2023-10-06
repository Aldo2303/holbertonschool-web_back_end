/*
Using the function prototype below
function handleResponseFromAPI(promise)
*/

function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
