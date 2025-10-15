const keyInput = document.getElementById('keyInput');
const keyLog = document.getElementById('keyLog');
 
keyInput.addEventListener('keydown', (e) => {
    const msg = document.createElement('p');
    msg.textContent = `You pressed: ${e.key}`;
    msg.style.color = e.key === 'Enter' ? 'blue' : 'black'

    keyLog.appendChild(msg);
});