function validityChecker(x1, y1, x2, y2) {
    let distance1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distance2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(distance1) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(distance2) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distance3) ? 'valid' : 'invalid'}`);
}
