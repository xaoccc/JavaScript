function login(arr) {
    const password = arr[0].split('').reverse().join('');
    let tryCount = 1;
    for (let i=1; i<arr.length; i++) {
        if (arr[i] !== password) {
            if (tryCount === 4) {
                console.log(`User ${arr[0]} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
            
        } else {
            console.log(`User ${arr[0]} logged in.`);
            break;
        }
        tryCount += 1;
    }
}
