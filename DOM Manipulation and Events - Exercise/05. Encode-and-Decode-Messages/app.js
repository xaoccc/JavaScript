function encodeAndDecodeMessages() {    
    const sendBullton = document.querySelector('button');
    const receiveButton = document.querySelectorAll('button')[1];
    let receivedTextArea = document.querySelectorAll('textarea')[1];  
    
    function encode(text, num) {
        return text.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + num)).join('');
    }

    sendBullton.addEventListener('click', function(e) {
        const originalMessage = document.querySelector('textarea').value;
        receivedTextArea.value = encode(originalMessage, 1);
        document.querySelector('textarea').value = '';
    })

    receiveButton.addEventListener('click', function(e) {
        receivedTextArea.value = encode(receivedTextArea.value, -1);
    })
}