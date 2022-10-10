// import community module
const axios = require("axios").default;

// create axios instance, pass in API token
const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: "afda3ada5a2f4e599216feb186fdcdfd",
    "content-type": "application/json",
    "transfer-encoding": "chunked",
  },
});

// export axios instance
module.exports = {
  assembly
};
