function carWash(input, value = 0) {
    const actions = {
        soap: (value) => value + 10,
        water: (value) => value * 1.2,
        'vacuum cleaner': (value) => value * 1.25,
        mud: (value) => value * 0.9
    };

    for (let action of input) {
        actions[action] ? value = actions[action](value) : value = value;                
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

