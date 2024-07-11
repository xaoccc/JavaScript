let myObj = {0:'Zdravko', 1:'Pencho', 2:'Gancho'};

let findPencho = Object.entries(myObj).map((entry, i) => `name: ${(myObj[i] === 'Pencho') ? myObj[i] : 'not Pencho'} `);
console.log(findPencho);

let nums = [12, 34, 45, 61, 5, 2, 14, 67, 453, 235, 76];

let sumNums = nums.reduce((a, b) => a + b, 0);
console.log(sumNums);
let sumOdds = nums.reduce((a, b) => a + ((b % 2 !== 0) ? b : 0), 0);
console.log(sumOdds);
let sumEven = nums.reduce((a, b) => a + ((b % 2 === 0) ? b : 0), 0);
console.log(sumEven);
let sumEvenIndex = nums.map((_, i) => (i % 2 === 0) ? nums[i] : 0).reduce((a, b) => a + b, 0);
console.log(sumEvenIndex);
let sumOddIndex = nums.map((_, i) => (i % 2 !== 0) ? nums[i] : 0).reduce((a, b) => a + b, 0);
console.log(sumOddIndex);