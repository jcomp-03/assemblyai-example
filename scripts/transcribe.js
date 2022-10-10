// import module
const { assembly } = require("./axios");

// declare variable to store information
let transcriptId;

// function for sending audio transcribe request to AssemblyAI servers
function transcribe(uploadUrl) {
  console.log("transcribe uploadUrl is", uploadUrl);
  // make fetch POST request to /v2/transcript
  assembly
    .post("/transcript", {
      audio_url: uploadUrl,
      // webhook below changes for each user
      webhook_url: process.env.WEBHOOK_URL,
      webhook_auth_header_name: "Authorization",
      webhook_auth_header_value: "Bearer foobar",
    })
    .then((res) => {
      transcriptId = res.data.id;
      console.log("transcriptId now has value", transcriptId);
    });
}

module.exports = transcribe;
