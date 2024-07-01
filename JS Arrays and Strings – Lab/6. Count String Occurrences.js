function countStringOccurences(text, substring) {
    let stringOccurences = text.match(new RegExp(`\\b${substring}\\b`, 'g'));
    console.log(stringOccurences ? stringOccurences.length : 0);
}



