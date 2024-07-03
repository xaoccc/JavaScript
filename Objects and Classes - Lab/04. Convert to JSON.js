function toJSON(name, lastName, hairColor) {
    const person = {'name': name, 'lastName': lastName, 'hairColor': hairColor};
    console.log(JSON.stringify(person));
}

toJSON('Pesho', 'Toshev', 'black');