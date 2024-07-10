function printDNA(input) {
    const sequence = 'ATCGTTAGGG';
    for (i=0; i<input*2; i+=2) {
        let [char1, char2] = [sequence[i % sequence.length], sequence[i % sequence.length + 1]]
        if (Math.trunc(i/2) % 4 === 0 || i === 0){
            console.log(`**${char1}${char2}**`);
        } else if (Math.trunc(i/2) % 2 === 0 && Math.trunc(i/2) % 4 !== 0){
            console.log(`${char1}----${char2}`);
        } else {
            console.log(`*${char1}--${char2}*`)
        }        
    }
}

printDNA(12);