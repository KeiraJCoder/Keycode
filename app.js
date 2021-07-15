  
const keycodeTitle = document.getElementById('keycodeTitle');
const keycodeGenerator = document.getElementById('keycodeGenerator');
const mobileTouch = document.querySelector('#keycodeButton');
const head = document.getElementById('keycode');

function myKeycode(event) {
    let key = event.key;
    let which = event.which;
    let code = event.code;

    head.textContent = which;
    
    document.getElementById('eventKey').innerHTML = key;
    document.getElementById('eventCode').innerHTML = code;
    document.getElementById('eventWhich').innerHTML = which;
    document.getElementById('keycodeButton').ontouchstart = myKeycode;

    keycodeGenerator.classList.remove('showKeycode');
    keycodeTitle.remove();
}

document.addEventListener('touchstart', e => {
    if (document.querySelector('.keycodeButton') !== null) return;
    if (e.target.tagName === 'BUTTON') return;

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    mobileTouch.appendChild('input');

    setTimeout(() => {
        input.focus();
    }, 100);
});

