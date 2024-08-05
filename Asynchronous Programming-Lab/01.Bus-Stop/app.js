function getInfo() {
    const stopId = document.querySelector('#stopId').value.trim();
    const stopName = document.querySelector('#stopName');
    const buses = document.querySelector('#buses');
    Array.from(buses.children).forEach((child) => child.remove())

    function createChild(tag, parent, text) {
        let item = document.createElement(tag);
        (parent) ? parent.appendChild(item) : null;
        (text) ? item.textContent = text : null;
    }

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
    .then(response =>  {
        return response.json();
    })
    .then(data => { 
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach((entry) => {
            createChild('li', buses, `Bus ${entry[0]} arrives in ${entry[1]} minutes`);
        })
        
    })
    .catch((error) => { stopName.textContent = 'Error' });





}


