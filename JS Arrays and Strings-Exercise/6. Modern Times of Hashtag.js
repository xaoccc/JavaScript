function hashtag(text) {
    let words = text.split(' ');
    let result = [];
    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let isOnlyLetters = true;
            for (let i = 1; i < word.length; i++) {                
                if (!(word[i].match(/[a-zA-Z]/i))) {
                    isOnlyLetters = false;
                    break;
                }
            }
            if (isOnlyLetters) {
                result.push(word.substring(1));
            }
        }
    }
    console.log(result.join('\n'));
}

