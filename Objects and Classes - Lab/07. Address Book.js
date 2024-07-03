function addressBook(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
}


