function horseRacing(input) {
    let horses = Object.fromEntries(input[0].split('|').map((value, index) => [value, Number(index)]));
    console.log(horses);

    input.slice(1).forEach((line) => {
        let [command, horseOne, horseTwo] = line.split(' ');
        switch (command) {
            case 'Retake':
                if (horses[horseOne] < horses[horseTwo]) {
                    horses[horseOne] += 1;
                    horses[horseTwo] -= 1;
                    console.log(`${horseOne} retakes ${horseTwo}.`)
                }
                break;
            case 'Trouble':
                if (horses[horseOne] > 0) {
                    Object.keys(horses).forEach((horse) => (horses[horse] === horses[horseOne] - 1) ? horses[horse] += 1 : null);
                    horses[horseOne] -= 1;
                }
                break;
            case 'Rage':
                break;
            case 'Miracle':
                break;
        }
    })
    horses = Object.fromEntries(Object.entries(horses).sort((a, b) => a[1] - b[1]));
    console.log(horses);
}

horseRacing(['Bella|Alexia|Sugar',
    // 'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Alexia',
    'Finish']
    );