function JSONtoObj(input) {
    const obj = JSON.parse(input);
    for (let data of Object.entries(obj)) {
        console.log(`${data[0]}: ${data[1]}`)
    }
}
