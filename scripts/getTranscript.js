// import module
import { assembly } from "./axios";

async function getTranscript(transcriptId, status) {
  try {
    const response = await assembly.get(`/transcript/${transcriptId}`);
    const { status } = response.data;
    status === "error"
    ? console.log('Transcription fetch failed:', response.data.error)
    : console.log(response.data);
  } catch (err) {
    console.log('***** Error during transcription fetch *****', err);
  }
}

export default getTranscript;
