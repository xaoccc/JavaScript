function listOfNames(input) {
    input.sort((a, b) => a.localeCompare(b)); // sort the array in alphabetical order (not using the ascii table)
    for (let i=0; i<input.length; i++) {
        console.log(`${i + 1}.${input[i]}`)
    }
}