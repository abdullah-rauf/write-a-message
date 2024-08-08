function showMessageContent(message) {
    
    const messageCount = document.querySelector('.message-content')
    messageCount.textContent = `"${message}"- Your message is delivered `
}

function showInvalidMessage() {
    const invalidMessage = document.querySelector('.invalid-message');
    invalidMessage.computedStyleMap.display = 'block';
    
    setTimeout(() => {
        invalidMessage.computedStyleMap.display = 'none'
    }, 2000);
}

function onSubmitForm(e) {
    
    e.preventDefault();

    const messageInput = document.querySelector('.message')
    const message = messageInput.value.trim();


    if (message == '') {
        showInvalidMessage();
    } else {
        showMessageContent(message);
        messageInput.value = '';
    }
}

(function () {
    const forms = document.querySelector('#form');
    forms.addEventListener('submit', onSubmitForm)
})();