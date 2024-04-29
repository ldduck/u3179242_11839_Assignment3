//alert("hello") // Ignore this, it was used to test the connection between the HTML and JS files.

// This allows the user to speak into their microphone and have the text translation returned on screen.
const StartButton = document.getElementById('StartButton');
const outputDiv = document.getElementById('output');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-AU';

// These call the speakButton Id, making the TTS accessible.
const speakButton = document.getElementById('speakButton');
speakButton.addEventListener('click', speakText);

// This will allow the user to speak into their microphone and have the text translation returned on screen.
recognition.onstart = () => {
    StartButton.textContent = 'Listening...';
};
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript;
};

// This will stop the voice recognition when the user stops speaking and returns the button to its default content.
recognition.onend = () => {
    StartButton.textContent = 'Start Voice Input'
};

// This event listener will start the voice recognition when clicked.
StartButton.addEventListener ('click', () => {
    recognition.start();
});

// This function will allow the text to be spoken back to the user. Additionally, it controls what the voice sounds like.
function speakText() {
    const text = outputDiv.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
};

//explore the parameters of what this can do. (e.g. how long can a user pause before the script stops listening)
//feign intelligence by showing variations of the same answer. (e.g. change background colour to red/green/blue)
//Investigate Speech.Sythesis function for TTS return