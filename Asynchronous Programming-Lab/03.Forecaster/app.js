function attachEvents() {
    const button = document.querySelector('#submit');
    const input = document.querySelector('#location');
    const forecast = document.querySelector('#forecast');
    const current = document.querySelector('#current');
    const upcoming = document.querySelector('#upcoming');
    let city = {}
    const conditionSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
    }

    function createChild(tag, parent, classes, text, innerHTML, id) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (innerHTML) ? element.innerHTML = innerHTML : null;
        (id) ? element.id = id : null;
    }

    button.addEventListener('click', (e) =>  {
        fetch(`http://localhost:3030/jsonstore/forecaster/locations/`)
        .then((request) => {
            return request.json()
        })
        .then((data) => { 
            city = data.filter((entry) => entry.name.toLowerCase() === input.value.toLowerCase());
            forecast.style.display = 'block';
            if (!city) {
                forecast.textContent = 'Error'
            } else fetch(`http://localhost:3030/jsonstore/forecaster/today/${city[0].code}`)
            .then((request) => {
                return request.json()
            })
            .then((data) => {                
                createChild('div', current, ['forecasts']);
                createChild('span', current.lastElementChild, ['condition', 'symbol'], '', conditionSymbols[data.forecast.condition]);
                createChild('span', current.lastElementChild, ['condition']);
                createChild('span', current.lastElementChild.lastElementChild, ['forecast-data'], data.name);
                createChild('span', current.lastElementChild.lastElementChild, ['forecast-data'], '', `${data.forecast.low}&#176/${data.forecast.high}&#176`);
                createChild('span', current.lastElementChild.lastElementChild, ['forecast-data'], data.forecast.condition);                
            })
            .catch((error) => console.log('no forecast'));

            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${city[0].code}`)
            .then((request) => {
                return request.json()
            })
            .then((data) => {
                console.log(data);
                createChild('div', upcoming, ['forecast-info']);
                data.forecast.forEach((day) => {
                    createChild('span', upcoming.lastElementChild, ['upcoming']);
                    createChild('span', upcoming.lastElementChild.lastElementChild, ['symbol'], '', conditionSymbols[day.condition] );
                    createChild('span', upcoming.lastElementChild.lastElementChild, ['forecast-data'], '', `${day.low}&#176/${day.high}&#176`);
                    createChild('span', upcoming.lastElementChild.lastElementChild, ['forecast-data'], day.condition);
                })

            })
            .catch((error) => forecast.textContent = 'Error');
        })
        .catch((error) => forecast.textContent = 'Error');
    })


}

attachEvents();