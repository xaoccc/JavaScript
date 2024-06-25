function countStringOccurences(text, substring) {
    words_arr = text.split(" ");
    let stringOccurences = 0;
    
    for (word of words_arr) {
        if (word == substring) {
            stringOccurences += 1;
        }
    }
    console.log(stringOccurences)
}

