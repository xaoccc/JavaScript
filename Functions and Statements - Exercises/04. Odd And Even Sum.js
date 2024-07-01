function oddEvenSum (input) {
    let oddSum = 0
    let evenSum = 0
    input = input.toString()

    for (let i = 0; i < input.length; i++) {
        currentNum = Number(input[i])
        if (currentNum % 2 === 0) {
            evenSum += currentNum
        } else {
            oddSum += currentNum
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
