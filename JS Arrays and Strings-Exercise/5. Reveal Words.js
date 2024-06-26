function revealWords(words, text) {
    words = words.split(', ');
    for (let word of words) {
        let stars = '*'.repeat(word.length);
        text = text.replace(stars, word);
    }
    console.log(text);
}
