

// This allows the user to speak into their microphone and have the text translation returned on screen.
const StartButton = document.getElementById('StartButton');
const outputDiv = document.getElementById('output');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-AU';

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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This allows the text to be spoken back to the user. Additionally, it controls what the voice sounds like.
function speakText() {
    const text = outputDiv.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 0.1;
    window.speechSynthesis.speak(utterance);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This changes the background color of the page based on the user's voice input.
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript;
    
    // Array of color names
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'black', 'white', 'grey'];
    
    // This checks if the translated text includes any color name from the array
    for (const color of colors) {
        if (transcript.includes(color)) {
            document.body.style.backgroundColor = color;
            break;
        }
    }
};

// This section allows the user to change the styling to a smaller version and back. Specifically, checking for certain words to then change.
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        outputDiv.textContent = transcript;
        // List of words that will trigger the page to be minimised.
        if (transcript.includes("minimise") || transcript.includes("decrease") || transcript.includes("compact") || transcript.includes("reduce") || transcript.includes("shrink") || transcript.includes("Compact") || transcript.includes("Minimise") || transcript.includes("Reduce") || transcript.includes("Decrease") || transcript.includes("Shrink")) {
            
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
    
// Performs the opposite of the above code, reading for certain words and restoring the page to its default state when successful.
        // List of words that will trigger the page to be restored to it's default size.
        if (transcript.includes("maximise") || transcript.includes("default") || transcript.includes("reset") || transcript.includes("restore") || transcript.includes("normal") || transcript.includes("increase") || transcript.includes("original") || transcript.includes("Maximise") || transcript.includes("Default") || transcript.includes("Reset") || transcript.includes("Increase") || transcript.includes("Restore") || transcript.includes("Normal") || transcript.includes("Original")) {
            
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
    };



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// try changing the position of the ui elements using voice commands
// try changing the color of the ui elements using voice commands
// try changing the size of the ui elements using voice commands