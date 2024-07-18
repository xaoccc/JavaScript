function moto(input){
    let riders = input
    .slice(1, Number(input[0]) + 1)
    .map((line) => {
        let [rider, fuel, position] = line.split('|');
        return {rider, fuel, position};
});

    input
    .slice(Number(input[0]) + 1).forEach((line) => {
        let [command, ...other] = line.split(' - ');
        if (command === 'Finish') {
            riders.forEach((r) => console.log(`${r.rider}\n  Final position: ${r.position}`));
            process.exit();
        }
        switch (command) {
            case 'StopForFuel':
                let [rider, minFuel, changePosition] = other;
                for (r of riders) {
                    if (r.rider === rider && Number(r.fuel) < Number(minFuel)) {
                        console.log(`${rider} stopped to refuel but lost his position, now he is ${changePosition}.`);
                        r.position = changePosition;
                    } else if (r.rider === rider && Number(r.fuel) >= Number(minFuel)) {
                        console.log(`${rider} does not need to stop for fuel!`);
                    }
                }                     
                break;
            case 'Overtaking':
                let [riderOne, riderTwo] = other;
                for (r of riders) {
                    if (r.rider === riderOne) {
                        riderOne = r;
                    } else if (r.rider === riderTwo) {
                        riderTwo = r;
                    }
                }
                if (Number(riderOne.position) < Number(riderTwo.position)) {
                    [riderOne.position, riderTwo.position] = [riderTwo.position, riderOne.position];
                    console.log(`${riderOne.rider} overtook ${riderTwo.rider}!`)
                }
                break;
            case 'EngineFail':
                let [riderFailed, lapsLeft] = other;
                for (r of riders) {
                    if (r.rider === riderFailed) {
                        const riderFailedIndex = riders.indexOf(r);
                        riders.splice(riderFailedIndex, 1);
                        console.log(`${riderFailed} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
                        break;
                    } 
                }                
                break;
        }
    })

}

