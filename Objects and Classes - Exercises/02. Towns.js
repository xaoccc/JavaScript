function townsData(input) {
    let towns = {};
    for (let townData of input) {
        let [town, latitude, longitude] = townData.split(' | ');
        towns.town = town;
        towns.latitude = Number(latitude).toFixed(2);
        towns.longitude = Number(longitude).toFixed(2);
        console.log(towns);
    }
    
}

townsData(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );