const axiosRequest = require('axios')

async function getActivity() {
    try {
        let response = axiosRequest.get("https://httpstat.us/500")
        console.log(`You could ${response.data.activity}`)
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

getActivity()