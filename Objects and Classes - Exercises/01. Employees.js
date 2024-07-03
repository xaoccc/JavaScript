function employes(input) {
    let eNames = {};
    for (let eName of input) {
        eNames[eName] = eName.length;
    }
    for (let [key, value] of Object.entries(eNames)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

employes([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])