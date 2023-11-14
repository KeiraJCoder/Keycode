// Element references for different parts of the page
const keycodeTitle = document.getElementById('keycodeTitle');
const keycodeGenerator = document.getElementById('keycodeGenerator');
const mobileTouch = document.getElementById('keycodeButton'); // Reference to the mobile touch area
const head = document.getElementById('keycode'); // The element where the keycode will be displayed

// Function to display keycode information when a key is pressed
function displayKeycode(event) {
    let key = event.key; // The key value (e.g., 'a', 'Enter')
    let which = event.which; // Numeric keycode (deprecated but still used in some browsers)
    let code = event.code; // The physical key code (e.g., 'KeyA', 'Enter')

    // Displaying the keycode and other event properties in the respective elements
    head.textContent = which;
    document.getElementById('eventKey').textContent = key;
    document.getElementById('eventCode').textContent = code;
    document.getElementById('eventWhich').textContent = which;

    // Update the UI to show the keycode details and hide the title
    keycodeGenerator.classList.remove('showKeycode');
    keycodeTitle.style.display = 'none'; // Hide instead of removing for reset functionality
}

// Function to reset the displayed keycode information
function resetKeycodeDisplay() {
    // Clearing the text content of all display elements
    head.textContent = '';
    document.getElementById('eventKey').textContent = '';
    document.getElementById('eventCode').textContent = '';
    document.getElementById('eventWhich').textContent = '';

    // Resetting the UI to its original state
    keycodeTitle.style.display = 'block';
    keycodeGenerator.classList.add('showKeycode');
}

// Attach an event listener for keyboard events
document.addEventListener('keydown', displayKeycode);

// Event listener to handle touch events, particularly for mobile devices
document.addEventListener('touchstart', e => {
    if (e.target.tagName === 'BUTTON') return; // Ignore if the touched element is a button

    // Creating a hidden input to capture keyboard input on mobile devices
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.style.position = 'absolute'; // Hide the input off-screen
    input.style.left = '-9999px';
    mobileTouch.appendChild(input);

    // Focus on the hidden input to bring up the mobile keyboard
    input.focus();

    // Attach the displayKeycode function to the hidden input
    input.addEventListener('keydown', displayKeycode);

    // Clean up: remove the input element when it loses focus
    input.onblur = () => {
        mobileTouch.removeChild(input);
    };
});

// Optional: Add a button or another mechanism to call resetKeycodeDisplay
// For example, a reset button could be added to the HTML,
// and the following line would attach the reset function to its click event:
// document.getElementById('resetButton').addEventListener('click', resetKeycodeDisplay);
