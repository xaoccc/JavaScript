function sequences(input) {
    let allArrays = {}
    for (let arr of input) {        
        let currentArray = JSON.parse(arr).sort((a, b) => b - a);
        allArrays[currentArray] = currentArray.length;        
    }

    allArrays = Object.entries(allArrays).sort((a,b) => a[1] - b[1]);
    for (let arr of allArrays) {
        let currentArr = arr[0].split(',').map((element) =>  Number(element));
        console.log(`[${currentArr.join(', ')}]`);        
    }
}

