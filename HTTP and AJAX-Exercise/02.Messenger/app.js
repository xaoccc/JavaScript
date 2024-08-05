function attachEvents() {
    const [name, message] = document.querySelectorAll('input[type="text"]');
    const submitBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    const rootUrl = 'http://localhost:3030/jsonstore/messenger';
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    async function sendMessage() {

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
        }
        catch (error) {
            console.error('Error posting message:', error);
        }
    }

    
    async function refresh() {
        fetch(rootUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }


    submitBtn.addEventListener('click', sendMessage);
    submitBtn.addEventListener('click', refresh);

}

attachEvents();