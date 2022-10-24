// import built-in modules and community modules
import { readFile } from "fs";
import { assembly } from './axios';

// absolute location of audio file to upload to AssemblyAI servers,
// retrieved from node process arguments array
const file = process.argv.slice(2,3)[0];

// function for handling audio upload to AssemblyAI servers
async function uploadAudio(audioFile) {
  try {
    const response = await assembly.post("/upload", audioFile);
    const { upload_url } = response.data;
    // pass upload_url into transcribe function
    transcribe(upload_url);
  } catch (err) {
    console.log('***** Error during audio upload *****', err);
  }
}

// function for sending audio transcribe request to AssemblyAI servers
async function transcribe(uploadUrl) {
  console.log("transcribe uploadUrl is", uploadUrl);
  try {
    const response = await assembly.post("/transcript", {
      audio_url: uploadUrl,
      // webhook below changes for each user
      webhook_url: process.env.WEBHOOK_URL,
      webhook_auth_header_name: "Authorization",
      webhook_auth_header_value: "Bearer foobar",
    });

    // destructure id from response data and log to console
    let { id: transcriptId } = response.data;
    console.log("transcriptId now has value", transcriptId);
  } catch (err) {
    console.log('***** Error during transcription request *****', err);
  }

  // // make fetch POST request to /v2/transcript
  // assembly
  //   .post("/transcript", {
  //     audio_url: uploadUrl,
  //     // webhook below changes for each user
  //     webhook_url: process.env.WEBHOOK_URL,
  //     webhook_auth_header_name: "Authorization",
  //     webhook_auth_header_value: "Bearer foobar",
  //   })
  //   .then((res) => {
  //     transcriptId = res.data.id;
  //     console.log("transcriptId now has value", transcriptId);
  //   });
}

// read audio file asynchronously
readFile(file, (err, data) => {
  // return out of function if there's an error
  if (err) return console.error("***** Error reading file *****", err);
  // otherwise pass data into uploadAudio function
  uploadAudio(data);
});
