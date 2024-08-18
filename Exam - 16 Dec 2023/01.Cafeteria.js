function cafeteria(input) {
    // Put all workers into an object
    let workers = input.slice(1, Number(input[0]) + 1).reduce((acc, curr) => {
        const [name, shift, types] = curr.split(' ')
        acc[name] = [shift, types.split(',')]
        return acc;            
        }, {});

    // Loop through the commands    
    input.slice(Number(input[0]) + 1).forEach((line) => {
        let [command, name, ...other] = line.split(' / ');
        if (command === 'Closed') {
            Object.keys(workers).forEach((worker) => {
                console.log(`Barista: ${worker}, Shift: ${workers[worker][0]}, Drinks: ${workers[worker][1].join(', ')}`);
            })
            process.exit();
        }

        else {
            switch (command) {
                case 'Prepare':
                    let [shift, coffee] = other;
                    if (workers[name] && workers[name][0] === shift && workers[name][1].some((skill) => skill === coffee)) {
                        console.log(`${name} has prepared a ${coffee} for you!`);
                    } else {
                        console.log(`${name} is not available to prepare a ${coffee}.`);
                    }
                    break;
                case 'Change Shift':
                    let [newShift] = other;
                    workers[name][0] = newShift;
                    console.log(`${name} has updated his shift to: ${newShift}`);
                    break;
                case 'Learn':
                    let [newSkill] = other;
                    if (workers[name] && workers[name][1].some((skill) => skill === newSkill)) {
                        console.log(`${name} knows how to make ${newSkill}.`);
                    } else if (workers[name]) {
                        workers[name][1].push(newSkill);
                        console.log(`${name} has learned a new coffee type: ${newSkill}.`);
                    }                    
                    break;
            }
        }
    })

};



cafeteria(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
     'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']
    );