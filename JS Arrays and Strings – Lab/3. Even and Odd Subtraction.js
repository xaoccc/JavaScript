function evenAndOddSubtraction(arr) {
    // let evenSum = 0;
    // let oddSum = 0;
    // for(let num of arr){
    //     if(num % 2 === 0){
    //         evenSum += num;
    //     } else {
    //         oddSum += num;
    //     }
    // }
    // console.log(evenSum - oddSum);

    let evenSum = arr.filter((num) => num % 2 === 0)
        .reduce((a, b) => a + b, 0);

    console.log((2 * evenSum) - arr.reduce((a, b) => a + b, 0));
}
