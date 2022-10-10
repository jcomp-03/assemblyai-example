// Require express, body-parser, and getTranscript
const express = require("express");
const bodyParser = require("body-parser");
const getTranscript = require("./scripts/getTranscript");

// Initialize express and define a port
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());

// webhook endpoint for receiving notice when transcription request is complete
app.post("/hook", (req, res) => {
  // destructure transcript id and status from the body
  const { transcript_id, status } = req.body;
  // call getTranscript function
  getTranscript(transcript_id, status);
  // responding is important
  res.status(200).end();
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
