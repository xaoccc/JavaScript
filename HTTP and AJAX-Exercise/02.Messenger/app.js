function attachEvents() {
    const [name, message] = document.querySelectorAll('input[type="text"]');
    const submitBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    const rootUrl = 'http://localhost:3030/jsonstore/messenger';
    const myHeaders = new Headers();
    
    myHeaders.append("Content-Type", "application/json");

    async function sendMessage() {

        if (!name.value || !message.value) {
            alert('Please enter both author and content!');
            return;
        }

        try {
            let response = await fetch(rootUrl, {
                method: 'POST',
                body: JSON.stringify({
                    author: name.value,
                    content: message.value,
                }),
                headers: myHeaders
            })

            if (!response.ok) {
                throw new Error(`Failed to post message: ${response.status} ${response.statusText}`);
            } 
            name.value = '';
            message.value = '';
            refresh();
        }
        catch (error) {
            console.error('Error posting message:', error);
        }
    }

    async function refresh() {
        await fetch(rootUrl)
        .then(res => res.json())
        .then(data => {
            let chat = document.querySelector('#messages');            
            let messages = []
            Object.entries(data).forEach((entry) => {
                messages.push(`${entry[1].author}: ${entry[1].content}`)
            chat.value = messages.join('\n');
        });
        })
        .catch(error => console.log(error))
    }
    refresh();
    submitBtn.addEventListener('click', sendMessage);
    refreshBtn.addEventListener('click', refresh);
}

attachEvents();