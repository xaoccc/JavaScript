function cafeteria(input) {
    let data = [];

    function findBarista(baristaList, baristaName, shift, coffeeType) {
        for (let barista of baristaList) {
            if (barista.name === baristaName && barista.shift === shift && barista.coffeeTypes.some((coffee) => coffee === coffeeType)) {
                return barista;
            }
        }
    }

    function changeShift(baristaList, baristaName, newShift) {
        for (let barista of baristaList) {
            if (barista.name === baristaName) {
                barista.shift = newShift;
                return barista;
            }
        }
    }

    function learnToMakeCoffee(baristaList, baristaName, newCoffeeType) {
        for (let barista of baristaList) {
            if (barista.name === baristaName) {
                if (barista.coffeeTypes.some((coffee) => coffee === newCoffeeType)){
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`)
                } else {
                    barista.coffeeTypes.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`)
                }
                return barista;
            }
        }
    }

    input.slice(1, Number(input[0]) + 1).forEach((line) => {
        let [name, shift, coffeeTypes] = line.split(' ');
        data.push({name, shift, coffeeTypes: coffeeTypes.split(',')});
    })
    
    input.slice(Number(input[0]) + 1).forEach((line) => {
        let [command, baristaName, ...other] = line.split(' / ');
        if (command === 'Closed') {
                data.forEach((barista) => console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeeTypes.join(', ')}`))
                process.exit();
        }
        switch (command) {
            case 'Prepare':
                if (findBarista(data, baristaName, other[0], other[1])) {
                    console.log(`${baristaName} has prepared a ${other[1]} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${other[1]}.`);
                }
                break;
            case 'Change Shift':
                if (changeShift(data, baristaName, other[0])) {
                    console.log(`${baristaName} has updated his shift to: ${other[0]}`);
                }
                break;
            case 'Learn':
                learnToMakeCoffee(data, baristaName, other[0]);
                break;
        }
    })

}

cafeteria([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']);