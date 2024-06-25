function gladiatorExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    expenses += helmetPrice * Math.floor(lostFights / 2);
    expenses += swordPrice * Math.floor(lostFights / 3);
    expenses += shieldPrice * Math.floor(lostFights / 6);
    expenses += armorPrice * Math.floor(lostFights / 12);
    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`;
}