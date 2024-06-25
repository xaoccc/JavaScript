function spiceMustFlow(startingYield) {
    let totalSpice = 0;
    let days = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield - 26;
        days++;
        startingYield -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(days);
    console.log(totalSpice);
}