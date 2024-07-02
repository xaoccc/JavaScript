function mining(shifts) {
    const bitcoinPriceLV = 11949.16;
    const goldPrice = 67.51;
    const bitcoinPrice = bitcoinPriceLV / goldPrice;

    let [bitcoins, day, moneyLeft, totalGold] = [0,0,0,0];
    
    for (let i=0; i<shifts.length; i++) {
        let currentGold = shifts[i];
        
        if ((i+1) % 3 === 0) {
            currentGold *= 0.7;
        }
        totalGold += currentGold;        

        if (totalGold >= bitcoinPrice) {
            if (!day) { day = i+1; }
            let currentBitcoins = Math.floor(totalGold / bitcoinPrice)            
            bitcoins += currentBitcoins;
            totalGold -= currentBitcoins * bitcoinPrice;
        }        

    }
    moneyLeft += totalGold * goldPrice;
    let moneyLog = `\nLeft money: ${moneyLeft.toFixed(2)} lv.`;
    let bitcoinsLog = `Bought bitcoins: ${bitcoins}`;
    (bitcoins) ? console.log(`${bitcoinsLog}\nDay of the first purchased bitcoin: ${day}${moneyLog}`) : console.log(`${bitcoinsLog}${moneyLog}`);

}
