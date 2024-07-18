function horseRacing(input) {
    let horses = Object.fromEntries(input[0].split('|').map((value, index) => [value, Number(index)]));

    input.slice(1).forEach((line) => {
        let [command, horseOne, horseTwo] = line.split(' ');
        switch (command) {
            
            case 'Retake':
                if (horses[horseOne] < horses[horseTwo]) {
                    let diff = horses[horseTwo] - horses[horseOne];
                    horses[horseOne] += diff;
                    horses[horseTwo] -= diff;
                    console.log(`${horseOne} retakes ${horseTwo}.`)
                    
                }
                horses = Object.fromEntries(Object.entries(horses).sort((a, b) => a[1] - b[1]));
                break;
            case 'Trouble':
                if (horses[horseOne] > 0) {
                    Object.keys(horses).forEach((horse) => (horses[horse] === horses[horseOne] - 1) ? horses[horse] += 1 : null);
                    horses[horseOne] -= 1;
                    console.log(`Trouble for ${horseOne} - drops one position.`);
                    horses = Object.fromEntries(Object.entries(horses).sort((a, b) => a[1] - b[1]));
                }                
                break;
            case 'Rage':
                if (horses[horseOne] < Object.keys(horses).length - 2) {
                    Object.keys(horses).forEach((horse) => {
                        if (horses[horse] === horses[horseOne] + 2) { 
                            horses[horse] -= 1;
                        } else if (horses[horse] === horses[horseOne] + 1) {
                            horses[horse] -= 1;
                        }
                    })
                    horses[horseOne] += 2;
                    console.log(`${horseOne} rages 2 positions ahead.`);
                } else if (horses[horseOne] < Object.keys(horses).length - 1){
                    Object.keys(horses).forEach((horse) => {
                        if (horses[horse] === horses[horseOne] + 1) {
                            horses[horse] -= 1;
                        }
                    })
                    horses[horseOne] += 1;
                }
                horses = Object.fromEntries(Object.entries(horses).sort((a, b) => a[1] - b[1]));
                break;
            case 'Miracle':
                console.log(`What a miracle - ${Object.keys(horses)[0]} becomes first.`);
                for (let horse in horses) {
                    horses[horse] -= 1;
                }
                let last = Object.keys(horses)[0];
                horses = Object.assign(horses, {[last]: Object.keys(horses).length - 1})
                horses = Object.fromEntries(Object.entries(horses).sort((a, b) => a[1] - b[1]));
                break;
            case 'Finish':
                console.log(Object.keys(horses).join('->'));
                console.log(`The winner is: ${Object.keys(horses)[Object.keys(horses).length - 1]}`);
                process.exit();
            
        }
    })    
    
}

horseRacing(['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'])
    
    
    ;