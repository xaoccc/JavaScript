function stringSubstring(substring, text) {
    for (word of text.split(' ')) {
        if (word.toLowerCase() == substring.toLowerCase()) {
            console.log(substring);
            return;
        }
    }
    console.log(`${substring} not found!`);
}

stringSubstring('Python',
'JavaScript is the best programming language'
);