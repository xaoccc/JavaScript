// function sortNumbers(arr) {

//     result = [];
//     arrLength = arr.length;
//     sortedArray = arr.sort((a, b) => a - b);
//     for (let i = 0; i < arrLength; i++) {

//         if (sortedArray.length > 1) {
//             result.push(Math.min(...sortedArray));
//             result.push(Math.max(...sortedArray));
//             sortedArray.splice(sortedArray.indexOf(Math.min(...sortedArray)), 1);
//             sortedArray.splice(sortedArray.indexOf(Math.max(...sortedArray)), 1);
//         } else if (sortedArray.length === 1) {
//             result.push(Math.max(...sortedArray));
//             return result;
//         } 

//     }
//     return result;

// }

function sortNumbers(arr) {
    result = [];
    let sortedArray = arr.sort((a, b) => a - b);
    while (sortedArray.length > 0) {
        result.push(sortedArray.splice(0, 1)[0], sortedArray.pop());
    }    
    return result;
}
