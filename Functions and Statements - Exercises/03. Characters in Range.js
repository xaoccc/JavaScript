function charsInRange(charOne, charTwo) {
    let start = charOne.charCodeAt(0);
    let end = charTwo.charCodeAt(0);
    let result = [];

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    } 

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(' ');
}