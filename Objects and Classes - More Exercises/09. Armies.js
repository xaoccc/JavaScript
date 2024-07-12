function armies(input) {
    let allArmies = {};
    for (let line of input) {
        if (line.indexOf('arrives') !== -1) {
            // When a leared with no army arrives, create this leader with an empty object for his armies
            allArmies[line.substring(0, line.length-8)] = {};
            
        } else if (line.indexOf('defeated') !== -1) {
            let defeatedLeader = line.substring(0, line.length-9);
            delete allArmies[defeatedLeader];

        }      
        else if ( line.indexOf('+') !== -1) {            
            for (let [leader, army] of Object.entries(allArmies)) {    
                let currentArmyName = line.split(' + ')[0];
                let currentArmySize = Number(line.split(' + ')[1]);
                if (allArmies[leader][currentArmyName]) {
                    army[currentArmyName] = Number(army[currentArmyName]) + currentArmySize;
                }
            }
            
        } else {
            let [leader, army] = line.split(': ');
            // Only if a leader has arrived, we can add an army
            if (Object.keys(allArmies).find((element) => element === leader)) {  
                let [armyName, armySize] = army.split(', ');
                allArmies[leader][armyName]= Number(armySize);   
            }        

        }
    }
    // Sort the armies data descending by army count
    allArmies = Object.fromEntries(Object.entries(allArmies).sort((a, b) => Object.values(b[1]).reduce((c, d) => c + d, 0) - Object.values(a[1]).reduce((c, d) => c + d, 0)));

    for (let [leader, army] of Object.entries(allArmies)) {
        let totalArmyCount = Object.values(army).reduce((a, b) => a + b, 0);
        console.log(`${leader}: ${totalArmyCount}`)
        
        for (let [armyName, armyCount] of Object.entries(army).sort((a, b) => b[1] - a[1])) {
            console.log(`>>> ${armyName} - ${armyCount}`)
        }
    }
}

