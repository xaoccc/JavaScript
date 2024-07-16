function townsData(input) {
    // OOP way
    // let towns = {};
    // for (let townData of input) {
    //     let [town, latitude, longitude] = townData.split(' | ');
    //     towns.town = town;
    //     towns.latitude = Number(latitude).toFixed(2);
    //     towns.longitude = Number(longitude).toFixed(2);
    //     console.log(towns);
    // }
    // JS way, using map() and forEach():
    input.map((entry => {
        let [town, latitude, longitude] = entry.split(' | '); 
        town = (parseFloat(town)) ? parseFloat(town) : town;
        latitude = parseFloat(latitude).toFixed(2);
        longitude = parseFloat(longitude).toFixed(2);     
        return { town, latitude, longitude };
    })).forEach((obj) => console.log(obj));    
}

townsData(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );