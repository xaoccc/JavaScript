// function printEl(input, num) {
//     result = [];
//     for (let i=0; i < input.length; i += num) {
//         result.push(input[i]);
//     }
//     return result;
// }

function printEl(input, num) {
    return input.filter((element, index) => index % num === 0);
}
