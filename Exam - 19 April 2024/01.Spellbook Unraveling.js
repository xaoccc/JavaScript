function spellbook(input) {
    let spell = input[0].split('');
    input.slice(1).forEach((line) => {
        let [command, ...other] = line.split('!');

        if (command === 'End') {
            console.log(`The concealed spell is: ${spell.join('')}`);
            process.exit();
        } 
        switch (command) {
            case 'RemoveEven':
                spell = spell.filter((char, index) => (index % 2 === 0) ? char : null);
                console.log(spell.join(''));
                break;
            case 'TakePart':
                spell = spell.slice(Number(other[0]), Number(other[1]));
                console.log(spell.join(''));
                break;
            case 'Reverse':
                let replacement = other[0].split('').reverse().join('');
                if (spell.join('').indexOf(other[0]) !== -1 ) {
                    spell = (spell.join('').replace(other[0], '') + replacement)
                    console.log(spell);
                    spell = spell.split('');
                    break;

                } else {
                    console.log('Error');
                }               
            
        }
    })

}

spellbook(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
    ;
    