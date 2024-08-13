function astro(input) {
    // 1. Get the number of objects
    const num = Number(input.shift());
    // 1.1. Create an object to store the data
    let data = {}
    
    // 2. Save each object in the database
    // Object name is the key, numeric values should be converted to numbers
    input.slice(0, num).forEach(obj => {
        [astroName, oxygen, energy] = input.shift().split(' ');
        data[astroName] = {oxygen: Number(oxygen), energy: Number(energy)};
    });

    // 3. Actions object. The name of the action is the key.    
    let actions = {
        Explore(astroName, energyNeeded) {
            if (data[astroName].energy > Number(energyNeeded)) {
                data[astroName].energy -= Number(energyNeeded);
                console.log(`${astroName} has successfully explored a new area and now has ${data[astroName].energy} energy!`);                
            } else {
                console.log(`${astroName} does not have enough energy to explore!`)
            }
        },
        Refuel(astroName, amount) {
            let fuel  = Math.min(data[astroName].energy + Number(amount), 200)
            console.log(`${astroName} refueled their energy by ${fuel - data[astroName].energy}!`);
            data[astroName].energy = fuel;
        },
        Breathe(astroName, amount) {
            let oxygen  = Math.min(data[astroName].oxygen + Number(amount), 100)
            console.log(`${astroName} took a breath and recovered ${oxygen - data[astroName].oxygen} oxygen!`);
            data[astroName].oxygen = oxygen;
        }
    }

    // 4. Loop through the commands
    commandLine = input.shift();
    while (commandLine !== 'End') {
        let [command, astroName, ...args] = commandLine.split(' - ');    
        actions[command](astroName, ...args);
        commandLine = input.shift();
    }

    // 5. Print data
    Object.keys(data).forEach(name => console.log(`Astronaut: ${name}, Oxygen: ${data[name].oxygen}, Energy: ${data[name].energy}`))
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