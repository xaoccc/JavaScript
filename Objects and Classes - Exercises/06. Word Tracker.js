function wordTracker(input) {
    let [words, text] = [input[0].split(' '), input.slice(1)];
    let wordsCount = {}

    words.forEach(word => { wordsCount[word] = 0; });
    text.forEach(word => (wordsCount.hasOwnProperty(word) ? wordsCount[word] += 1 : null));

    let sortedWordsCount = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedWordsCount) {
        console.log(`${key} - ${value}`);
    }
    
    
}

wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    );