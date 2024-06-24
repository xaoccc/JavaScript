function wordsUppercase(input) {
    let words = input.match(/\w+/g);
    let result = words.map(w => w.toUpperCase());
    console.log(result.join(', '));
}
