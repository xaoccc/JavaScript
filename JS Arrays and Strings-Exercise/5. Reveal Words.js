function revealWords(words, text) {
    words = words.split(', ');
    words.forEach(word => {
        text = text.replace('*'.repeat(word.length), word);
    });
    console.log(text);
}

