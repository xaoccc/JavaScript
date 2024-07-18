function functionName(input) {
    let data =  [];
    input.slice(1, Number(input[0]) + 1).reduce((acc, curr) => {
        console.log(curr.split(' '));
        let [...items] = curr.split(' ').map((item) => (!Number.isNaN(Number(item))) ? item = Number(item): item);
        data.push({...items});
        return acc;
    }, {})
    
    input.slice(Number(input[0]) + 1).forEach((line) => {
        let [command, ...other] = line.split(' - ');
        if (command === 'Finish') {
            // Print result
            process.exit();
        }
        switch (command) {
            case 'caseOne':
                // Do something...
                break;
            case 'caseTwo':
                // Do something...
                break;
            case 'caseThree':
                // Do something...
                break;
            case 'caseFour':
                // Do something...
                break;
        }
    })
}