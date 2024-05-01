//alert("hello") // Ignore this, it was used to test the connection between the HTML and JS files.

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

// This changes the size and compactness of the webpage when the user says "minimise".
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
    
    // Check if the translated text includes "minimise"
    if (transcript.includes("minimise") || transcript.includes("compact") || transcript.includes("reduce") || transcript.includes("shrink") || transcript.includes("Compact") || transcript.includes("Minimize") || transcript.includes("Reduce") || transcript.includes("Shrink")) {
        // Add code here to style the webpage to be smaller and more compact
        // For example, you can modify the CSS properties of elements to reduce their size and spacing
        // You can also hide or collapse certain elements to make the page more compact
        
        // Example: Reduce font size of all elements
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            element.style.fontSize = '12px';
        });
        
        // Example: Reduce padding and margin of specific elements
        const specificElements = document.querySelectorAll('.specific-class');
        specificElements.forEach(element => {
            element.style.padding = '4px';
            element.style.margin = '2px';
        });
        
        // Example: Hide specific elements
        const hideElements = document.querySelectorAll('.hide-class');
        hideElements.forEach(element => {
            element.style.display = 'none';
        });
    }
    // Check if the translated text includes "maximise", "default", or "reset"
    if (transcript.includes("maximise") || transcript.includes("default") || transcript.includes("reset") || transcript.includes("restore") || transcript.includes("normal") || transcript.includes("original") || transcript.includes("Maximise") || transcript.includes("Default") || transcript.includes("Reset") || transcript.includes("Restore") || transcript.includes("Normal") || transcript.includes("Original")) {
        // Add code here to restore the CSS properties to their default values
        // You can reset the font size, padding, margin, and display properties of elements
        
        // Example: Restore font size of all elements to default
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            element.style.fontSize = '';
        });

        // Example: Restore padding and margin of specific elements to default
        const specificElements = document.querySelectorAll('.specific-class');
        specificElements.forEach(element => {
            element.style.padding = '';
            element.style.margin = '';
        });

        // Example: Show hidden elements
        const hideElements = document.querySelectorAll('.hide-class');
        hideElements.forEach(element => {
            element.style.display = '';
        });
    }
};



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// figure out how to make the page more compact using voice commands
// figure out how to reset the page to default using voice commands
// figure out how to change the text size of the page using voice commands
// figure out how to change the font of the page using voice commands

// try changing the position of the ui elements using voice commands
// try changing the color of the ui elements using voice commands
// try changing the size of the ui elements using voice commands