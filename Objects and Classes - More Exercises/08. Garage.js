function garage(input) {
    let allGarages = {};
    for (let item of input) {
        let inputLine = item.split(/[,-]/);
        let garageNum = inputLine[0].trim();
        if (!allGarages[garageNum]) {
            allGarages[garageNum] = []
        }
        allGarages[garageNum].push([]);
        for (let details of inputLine.slice(1)) {
            let cardataObj = {};
            cardataObj[details.trim().split(': ')[0]] = details.trim().split(': ')[1];

            if (allGarages[garageNum][0].length > 0) {
                allGarages[garageNum][allGarages[garageNum].length - 1].push(cardataObj);
            } else {
                allGarages[garageNum][0].push(cardataObj);
            }
        }
    }
        
    for (let garage of Object.entries(allGarages)) {
        console.log(`Garage № ${garage[0]}`);
        for (let cars of garage[1]) {
            let print = [];
            for (let car of cars) {
                print.push(`${Object.entries(car)[0][0]} - ${Object.entries(car)[0][1]}`);
            }
            console.log(`--- ${print.join(', ')}`);
        }
    } 
}

