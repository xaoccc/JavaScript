function solve() {
    const departBtn = document.querySelector('#depart');
    const arrivetBtn = document.querySelector('#arrive');
    const info = document.querySelector('.info');
    // The root of the node list
    let stopId = 'depot';
    let next = '';
    
    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`)
        .then((request) => { 
            return request.json() 
        })
        .then((data) => { 
            console.log(data);
            stopId = data.next; 
            next = data.name;    
            departBtn.disabled = true;
            arrivetBtn.disabled = false;
            info.textContent = `Next stop ${data.name}`;
        })
        .catch((error) => console.log('error'));
    }

    async function arrive() { 
        departBtn.disabled = false;
        arrivetBtn.disabled = true;
        info.textContent = `Arriving at ${next}`;        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();