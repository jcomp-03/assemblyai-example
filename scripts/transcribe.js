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
      webhook_url: "https://a6f2-75-74-146-199.ngrok.io/hook",
      webhook_auth_header_name: "Authorization",
      webhook_auth_header_value: "Bearer foobar",
    })
    .then((res) => {
      transcriptId = res.data.id;
      console.log("transcriptId now has value", transcriptId);
    });
}

module.exports = transcribe;
