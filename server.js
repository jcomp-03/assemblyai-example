// Import 3rd-party modules and/or custom modules
const express = require("express");
const bodyParser = require("body-parser");
const getTranscript = require("./scripts/getTranscript");

// Initialize express and define a port
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());

// webhook endpoint for receiving notice when transcription request is complete
app.post("/hook", (request, response) => {
  // destructure transcript id and status from the body
  const { transcript_id, status } = request.body;
  // if POST status is good, run getTranscript function
  status === "error"
  ? console.log('Transcription failed:', request.body.error)
  : getTranscript(transcript_id);
  // responding is important
  response.status(200).end();
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
