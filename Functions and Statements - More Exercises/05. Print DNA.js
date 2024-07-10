function printDNA(input) {
    const sequence = 'ATCGTTAGGG';
    for (i=0; i<input*2; i+=2) {
        if (Math.trunc(i/2) % 4 === 0 || i === 0){
            console.log(`**${sequence[i % sequence.length ]}${sequence[i % sequence.length+1]}**`);
        }
        else if (Math.trunc(i/2) % 2 === 0 && Math.trunc(i/2) % 4 !== 0){
            console.log(`${sequence[i % sequence.length ]}----${sequence[i % sequence.length+1]}`);
        } else {
            console.log(`*${sequence[i % sequence.length ]}--${sequence[i % sequence.length+1]}*`)
        }
        
    }
}

printDNA(12);