function attachEvents() {
    const button = document.querySelector('#submit');
    const input = document.querySelector('#location');
    const forecast = document.querySelector('#forecast');
    const current = document.querySelector('#current');
    const upcoming = document.querySelector('#upcoming');
    const rootUrl = 'http://localhost:3030/jsonstore/forecaster';
    let city = {}
    const conditionSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
    }

    function createChild(tag, parent, classes, text, innerHTML) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (innerHTML) ? element.innerHTML = innerHTML : null;
    }

    function createSpanEls (root, classNames, day, textOne, textTwo ) {
        createChild('span', root.lastElementChild, [classNames[0]]);
        createChild('span', root.lastElementChild.lastElementChild, [classNames[1]], '', textOne );
        createChild('span', root.lastElementChild.lastElementChild, ['forecast-data'], '', `${day.low}&#176/${day.high}&#176`);
        createChild('span', root.lastElementChild.lastElementChild, ['forecast-data'], textTwo);
    }

    button.addEventListener('click', (e) =>  {
        fetch(`${rootUrl}/locations`)
        .then((res) => res.json())
        .then((data) => { 
            city = data.filter((entry) => entry.name.toLowerCase() === input.value.toLowerCase());
            forecast.style.display = 'block';
            if (!city) {
                forecast.textContent = 'Error'
            } else  return fetch(`${rootUrl}/today/${city[0].code}`)
        }) 
        .then((res) => res.json())
        .then((data) => {             
            createChild('div', current, ['forecasts']);
            createChild('span', current.lastElementChild, ['condition', 'symbol'], '', conditionSymbols[data.forecast.condition]);
            // createChild('span', current.lastElementChild, ['condition']);
            // createChild('span', current.lastElementChild.lastElementChild, ['forecast-data'], data.name);
            // createChild('span', current.lastElementChild.lastElementChild, ['forecast-data'], '', `${data.forecast.low}&#176/${data.forecast.high}&#176`);
            // createChild('span', current.lastElementChild.lastElementChild, ['forecast-data'], data.forecast.condition);
            createSpanEls(current, ['condition', 'forecast-data'], data.forecast, data.name, data.forecast.condition);
            return fetch(`${rootUrl}/upcoming/${city[0].code}`)})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            createChild('div', upcoming, ['forecast-info']);
            data.forecast.forEach((day) => {

                createSpanEls(upcoming, ['upcoming', 'symbol'], day, conditionSymbols[day.condition], day.condition);
                // createChild('span', upcoming.lastElementChild, ['upcoming']);
                // createChild('span', upcoming.lastElementChild.lastElementChild, ['symbol'], '', conditionSymbols[day.condition] );
                // createChild('span', upcoming.lastElementChild.lastElementChild, ['forecast-data'], '', `${day.low}&#176/${day.high}&#176`);
                // createChild('span', upcoming.lastElementChild.lastElementChild, ['forecast-data'], day.condition);
            })            
        })
        .catch((error) => forecast.textContent = 'Error');
    })
}

attachEvents();