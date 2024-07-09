function pointsValidation(input) {
    let [x1, y1, x2, y2] = input.map(Number);

    let distancesBetweenPoints = {
        0: Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2)),
        1: Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2)),
        2: Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
    }

    let cases = {0: [x1, y1, 0, 0], 1: [x2, y2, 0, 0], 2: [x1, y1, x2, y2]};
    for (let i = 0; i < 3; i++) { 
        console.log(`{${cases[i][0]}, ${cases[i][1]}} to {${cases[i][2]}, ${cases[i][3]}} is ${(Number.isInteger(distancesBetweenPoints[i])) ? 'valid' : 'invalid'}`);
    }    
}

pointsValidation([3, 0, 0, 4]);
