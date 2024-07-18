function horseRacing(input) {
    horses = input[0].split('|');        
    for (line of input.slice(1)){
        let [command, horseOne, horseTwo] = line.split(' ');
        if (command === 'Finish') {
            console.log(horses.join('->'));
            console.log(`The winner is: ${horses[horses.length - 1]}`);
            break;
        }
        switch (command) {            
            case 'Retake':
                let [idxOne, idxTwo] = [horses.indexOf(horseOne), horses.indexOf(horseTwo)];
                if (idxOne < idxTwo) {                    
                    horses.splice(idxOne, 1, horseTwo);
                    horses.splice(idxTwo, 1, horseOne);
                    console.log(`${horseOne} retakes ${horseTwo}.`);
                }
                break;
            case 'Trouble':
                let idx = horses.indexOf(horseOne);
                if (idx > 0) {
                    horses.splice(idx, 1, horses[idx - 1]);
                    horses.splice(idx - 1, 1, horseOne);
                    console.log(`Trouble for ${horseOne} - drops one position.`);
                }
                break;
            case 'Rage':
                let rageIdx = horses.indexOf(horseOne);
                horses.splice(rageIdx, 1);
                horses.splice(rageIdx + 2, 0, horseOne);   
                console.log(`${horseOne} rages 2 positions ahead.`);
                break;
            case 'Miracle':
                console.log(`What a miracle - ${horses[0]} becomes first.`);
                horses.push(horses.shift());                
                break;
        }
    }
    
}

horseRacing(['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Sugar',
    // 'Trouble Bella',
    'Finish'])
    
    
    
    ;
    