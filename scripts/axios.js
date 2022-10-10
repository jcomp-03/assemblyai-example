// import community module
const axios = require("axios").default;
require('dotenv').config();

// create axios instance, pass in API token
const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: process.env.ASSEMBLYAI_API_KEY,
    "content-type": "application/json",
    "transfer-encoding": "chunked",
  },
});

// export axios instance
module.exports = {
  assembly
};
