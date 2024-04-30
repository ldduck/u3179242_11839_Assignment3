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


// This changes the background color of the page based on the user's voice input.
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript;
    
    // Else if statement changes the colour if the transcript includes a colour name.
    if (transcript.includes('red')) {
        document.body.style.backgroundColor = 'red';
    } else if (transcript.includes('green')) {
        document.body.style.backgroundColor = 'green';
    } else if (transcript.includes('blue')) {
        document.body.style.backgroundColor = 'blue';
    } else if (transcript.includes('yellow')) {
        document.body.style.backgroundColor = 'yellow';
    } else if (transcript.includes('orange')) {
        document.body.style.backgroundColor = 'orange';
    } else if (transcript.includes('purple')) {
        document.body.style.backgroundColor = 'purple';
    } else if (transcript.includes('pink')) {
        document.body.style.backgroundColor = 'pink';
    } else if (transcript.includes('black')) {
        document.body.style.backgroundColor = 'black';
    } else if (transcript.includes('white')) {
        document.body.style.backgroundColor = 'white';
    } else if (transcript.includes('gray')) {
        document.body.style.backgroundColor = 'gray';
    }
};

