# assemblyai-example
Brief demo using AssemblyAI's speech-to-text transcription service using a pre-recorded audio file.

(For clarity, this demo involves using an audio file located locally on the client's PC or Mac.)

### How To Use
  1. Clone this repository.
  2. Open a terminal window in main directory of the repository and run the command `npm install` to install the package dependencies.
  3. This demo uses environment variables--specifically, two environment variables:
     - ASSEMBLYAI_API_KEY: Fill in this variable with your private AssemblyAI API key.
     - WEBHOOK_URL: Fill in this variable with the URL you create for allowing access to your local server from AssemblyAI's backend servers.
       Be sure to finish the string with _/hook_ since this is the endpoint that AssemblyAI's POST request will search for.
  
      Create a _.env_ file to store those environment variables and their values.
  4. In a terminal window, start up your secure tunnel from the outside to localhost. I used ngrok, so in the terminal window, I ran `ngrok http 3000`. The port must be the same one used as in the Express web server.
  5. In a different terminal window, run the command `npm run start` to get the web server up and running.
  6. In another terminal window, run the command `npm run send <<absolute path to audio/video file on your device>>` where you **must** include the absolute path to the file you are wishing to transcribe.
  
  The last step executes the file uploadAndTranscribeAudio.js file, which effectively makes a POST request to AssemblyAI's /upload endpoint. Once the transcription is complete or an error occurs on AssemblyAI's servers, a webhook is sent to the /hook endpoint on the client side. In this endpoint, validation is performed to determine if there was an error; if none, the completed transcription is fetched for at /transcript/${transcript_id} on AssemblyAI's side.
  
Enjoy!
