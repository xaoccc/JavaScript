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
    
    input.slice(Number(input[0]) + 1).forEach((line) => {
        let [command, astronautName, ...other] = line.split(' - ');
        if (command === 'End') {

            // Print result
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
                // Do something...
                break;
            case 'Breathe':
                // Do something...
                break;

        }
    })
}

astro([  '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - Kate - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
  )

