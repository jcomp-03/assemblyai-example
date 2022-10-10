// import built-in modules and community modules
const fs = require("fs");
const path = require("path");
const { assembly } = require('./axios');
const transcribe = require('./transcribe');

// declare variable to store information
let myUploadUrl = null;

// location of audio file to upload to AssemblyAI servers
const file = path.join(__dirname, "../assets/audio/typescript-audio-only.mp3");

// function for handling audio upload to AssemblyAI servers
function uploadAudio(audioData) {
  console.log('inside uploadAudio function');
  // make fetch POST request to /v2/upload endpoint
  assembly
    .post("/upload", audioData)
    .then((res) => {
      myUploadUrl = res.data.upload_url;
      // create promise and return it
      const p1 = new Promise((resolve, reject) => {
        resolve(myUploadUrl);
      });
      return p1;
    })
    .then((uploadUrl) => {
      transcribe(uploadUrl);
    })
    .catch((err) => console.error(err));
}

// read audio file asynchronously
fs.readFile(file, (err, data) => {
  if (err) console.error("******ERROR******", err);
  // run function uploadAudio, passing in data
  uploadAudio(data);
});
