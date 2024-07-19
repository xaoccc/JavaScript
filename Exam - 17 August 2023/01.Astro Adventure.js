function astro(input) {
    let data =  [];
    input.slice(1, Number(input[0]) + 1).reduce((acc, curr) => {
        let [name, oxygenLevel, energyReserves] = curr.split(' ').map((item) => (!Number.isNaN(Number(item))) ? item = Number(item): item);
        data.push({name, oxygenLevel, energyReserves});
        return acc;
    }, {})

    function findAstronaut(astronautName){        
        for (let astronaut of data) {
            if (astronautName === astronaut.name) {
                return astronaut;
            }
        }
    }
    
    function refill(resource, astronaut, resorceToUpdate, maxValue) {
        let initialResourceLevel = astronaut[resorceToUpdate];
        astronaut[resorceToUpdate] += resource;
        (astronaut[resorceToUpdate] > maxValue) ? astronaut[resorceToUpdate] = maxValue : null;
        return (astronaut[resorceToUpdate] !== maxValue) ? resource : maxValue - initialResourceLevel; 
    }
    
    input.slice(Number(input[0]) + 1).forEach((line) => {
        let [command, astronautName, ...other] = line.split(' - ');
        if (command === 'End') {
            data.forEach((astronaut) => console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygenLevel}, Energy: ${astronaut.energyReserves}`))
            process.exit();
        }
        switch (command) {
            case 'Explore':
                let energyNeeded = Number(other[0]);
                let astronaut = findAstronaut(astronautName);
                if (!astronaut) {break;}
                if (astronaut.energyReserves >= energyNeeded){
                    astronaut.energyReserves -= energyNeeded;
                    console.log(`${astronautName} has successfully explored a new area and now has ${astronaut.energyReserves} energy!`);
                } else if (astronaut.energyReserves < energyNeeded){
                    console.log(`${astronautName} does not have enough energy to explore!`);
                }
                break;
            case 'Refuel':  
            // Example of functional programming: Functions are First-Class and can be Higher-Order
            // findAstronaut() is First-Class function and is passed as a parameter to refill()   
            // refill() is First-Class function as it is treated as a variable passed to console.log()
            // refill() is Higher-Order because it takes findAstronaut() as a parameter                        
                console.log(`${astronautName} refueled their energy by ${refill(Number(other[0]), findAstronaut(astronautName), 'energyReserves', 200)}!`);
                break;
            case 'Breathe':
                console.log(`${astronautName} took a breath and recovered ${refill(Number(other[0]), findAstronaut(astronautName), 'oxygenLevel', 100)} oxygen!`);
                break;
        }
    })    
}

astro([  '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
  
  )

