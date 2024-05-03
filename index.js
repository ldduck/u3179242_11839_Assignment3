
// Global variables that set up functions later in the code.
// This allows the user to speak into their microphone and have the text translation returned on screen.
const StartButton = document.getElementById('StartButton');
const outputDiv = document.getElementById('output');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
voices = window.speechSynthesis.getVoices();
recognition.lang = 'en-AU';
theVoice = 'Microsoft Catherine - English (Australia)';

// These call the speakButton Id, making the TTS accessible.
const speakButton = document.getElementById('speakButton');
speakButton.addEventListener('click', speakText);

// This will allow the user to speak into their microphone and have the text translation displayed on screen.
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



// This allows the text to be spoken back to the user. Additionally, it controls what the voice sounds like.
function speakText() {
    const text = outputDiv.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-AU' && voice.name === theVoice );
    window.speechSynthesis.speak(utterance);
}



// Core event listener that listens for the user's voice input and triggers the relevant functions.
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript; 
    
    // List of words that will trigger the page to be minimised.
    if (
        transcript.includes("minimise") || transcript.includes("decrease") || transcript.includes("compact") ||
        transcript.includes("reduce") || transcript.includes("shrink") || transcript.includes("Compact") ||
        transcript.includes("Minimise") || transcript.includes("Reduce") || transcript.includes("Decrease") ||
        transcript.includes("Shrink")
    ) {
        // Reduces the size of relevant elements on the page.
        const containerElements = document.querySelectorAll('.container');
        containerElements.forEach(element => {
            element.style.padding = '5vh';
            element.style.borderRadius = '20px';
        });
        const titleElements = document.querySelectorAll('.title');
        titleElements.forEach(element => {
            element.style.fontSize = '18px';
            element.style.marginBottom = '10';
        });
        const buttonElements = document.querySelectorAll('.buttons');
        buttonElements.forEach(element => {
            element.style.fontSize = '12px';
            element.style.padding = '15px 30px';
        });
        const outputElements = document.querySelectorAll('.outputText');
        outputElements.forEach(element => {
            element.style.fontSize = '12px';
            element.style.minHeight = '50px';
            element.style.borderRadius = '2.5px';
            element.style.fontSize = '10px';
        });
        // Hides unwanted elements when the page is minimised.
        const hidePlayback = document.querySelectorAll('#speakButton');
        hidePlayback.forEach(element => {
            element.style.display = 'none';
        });
        const hideOutput = document.querySelectorAll('#output');
        hideOutput.forEach(element => {
            element.style.display = 'none';
        });
    }
    
    // List of words that will trigger the page to be restored to its default size.
    if (
        transcript.includes("maximise") || transcript.includes("default") || transcript.includes("reset") ||
        transcript.includes("restore") || transcript.includes("normal") || transcript.includes("increase") ||
        transcript.includes("original") || transcript.includes("Maximise") || transcript.includes("Default") ||
        transcript.includes("Reset") || transcript.includes("Increase") || transcript.includes("Restore") ||
        transcript.includes("Normal") || transcript.includes("Original")
    ) {
        // Restores the styling of all changed elements back to default
        const containerElements = document.querySelectorAll('.container');
        containerElements.forEach(element => {
            element.style.padding = '20vh';
            element.style.borderRadius = '30px';
        });
        const titleElements = document.querySelectorAll('.title');
        titleElements.forEach(element => {
            element.style.fontSize = '36px';
            element.style.marginBottom = '20';
        });
        const buttonElements = document.querySelectorAll('.buttons');
        buttonElements.forEach(element => {
            element.style.fontSize = '24px';
            element.style.padding = '30px 60px';
        });
        const outputElements = document.querySelectorAll('.outputText');
        outputElements.forEach(element => {
            element.style.fontSize = '12px';
            element.style.minHeight = '100px';
            element.style.borderRadius = '5px';
            element.style.fontSize = '18px';
        });

        // Makes previously hidden elements reappear.
        const showPlayback = document.querySelectorAll('#speakButton');
        showPlayback.forEach(element => {
            element.style.display = '';
        });
        const showOutput = document.querySelectorAll('#output');
        showOutput.forEach(element => {
            element.style.display = '';
        });
    }

    // This will change the background colour of the page based on the colour spoken by the user.
    // List of colours that will trigger the background colour to change.
    const colours = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'black', 'white', 'grey', 'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Grey'];
    for (let i = 0; i < colours.length; i++) {
        if (transcript.includes(colours[i])) {
            document.body.style.backgroundColor = colours[i];
        }
    }

    // This allows the text to be spoken back to the user. Additionally, it controls what the voice sounds like.
    if (transcript.includes("man") || transcript.includes("male") || transcript.includes("masculine") || transcript.includes("Man") || transcript.includes("Male") || transcript.includes("Masculine")) {
        theVoice = 'Microsoft James - English (Australia)';

    } else if (transcript.includes("woman") || transcript.includes("female") || transcript.includes("feminine") || transcript.includes("Woman") || transcript.includes("Female") || transcript.includes("Feminine")) {
        theVoice =  'Microsoft Catherine - English (Australia)';
    }

};
