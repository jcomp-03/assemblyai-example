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
  4. In a terminal window, start up your secure tunnel from the outside to localhost. I used ngrok, so in the terminal window, I ran `ngrok http 3000`. The port
  must be the same one used as in the Express web server.
  5. In a different terminal window, run the command `node server.js` to get the web server up and running.
  6. In another terminal window, run the command `npm run send`; this will run scripts/uploadAudio.js which effectively reads the audio file located in assets folder,
  and makes a POST request to AssemblyAI's /upload endpoint. Aferwards, a webhook indicating completion of the transcription process signals a GET
  request to /transcript/${transcript_id} for the full text transcription which is simply printed to the console.
  
Enjoy!
