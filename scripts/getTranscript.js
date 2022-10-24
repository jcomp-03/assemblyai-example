// import module
const { assembly } = require("./axios");

async function getTranscript(transcriptId) {
  try {
    const response = await assembly.get(`/transcript/${transcriptId}`);
    console.log(response.data);
  } catch (err) {
    console.log('***** Error during transcription fetch *****', err);
  }
}

module.exports = getTranscript;
