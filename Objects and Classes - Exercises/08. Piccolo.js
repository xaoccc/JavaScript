function piccolo(input) {
    carsDB = {};
    for (car of input) {
        let [action, plateNum] = car.split(', ');
        carsDB[plateNum] = action;
    }
    // 1. Convert the data from carsDB into nested arrays
    // 2. Filter the data
    // 3. Sort the data while we are still working with nested lists
    // 4. Convert the nested lists back into an object
    let carsIN = Object.fromEntries(Object.entries(carsDB).filter(([key, value]) => value === 'IN').sort((a, b) => a[0].localeCompare(b[0])));
    (Object.keys(carsIN).length !== 0) ? console.log(Object.keys(carsIN).join('\n')) : console.log('Parking Lot is Empty');
}
