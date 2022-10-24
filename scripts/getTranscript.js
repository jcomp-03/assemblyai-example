// import module
const { assembly } = require("./axios");
const path = require("path");
const fs = require("fs");

async function getTranscript(transcriptId) {
  try {
    const response = await assembly.get(`/transcript/${transcriptId}`);
    // write response data to file
    fs.writeFile(path.join(__dirname, "../test.txt"), response.data.text, (err) => {
      if (err) throw err;
      console.log("Finished writing transcription text to file.");
    });
  } catch (err) {
    console.log("***** Error during transcription fetch *****", err);
  }
}

module.exports = getTranscript;
