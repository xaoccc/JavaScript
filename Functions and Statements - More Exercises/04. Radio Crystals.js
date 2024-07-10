function radioCrystals(input) {
    const desiredThickness = input[0];
    const crystals = input.slice(1);
    operations = {Cut: 0, Lap: 0, Grind: 0, Etch: 0, 'X-ray': 0};

    for (let crystal of crystals) {
        console.log(`Processing chunk ${crystal} microns`)
        while (crystal !== desiredThickness) {
            if (crystal / 4 >= desiredThickness) {
                crystal /= 4;
                operations.Cut += 1;
            } else if (crystal * 0.8 >= desiredThickness) {
                crystal *= 0.8;
                operations.Lap += 1;
            } else if (crystal - 20 >= desiredThickness) {
                crystal -= 20;
                operations.Grind += 1;
            } else if (crystal - 2 >= desiredThickness) {
                crystal -= 2;
                operations.Etch += 1;
            } else if (crystal - 2 <= desiredThickness) {
                crystal += 1;
                operations['X-ray'] += 1;
            }
            crystal = Math.floor(crystal);
        }        
        for (operation of Object.entries(operations)) {
            if (operation[1] > 0) {
                console.log(`${operation[0]} x${operation[1]}${(operation[0] !== 'X-ray') ? '\nTransporting and washing' : '' }`)
            }
        }
        console.log(`Finished crystal ${crystal} microns`)
        operations = {Cut: 0, Lap: 0, Grind: 0, Etch: 0, 'X-ray': 0};
    }
}