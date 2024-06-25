function printEl(input, num) {
    result = [];
    for (let i=0; i < input.length; i += num) {
        result.push(input[i]);
    }
    return result;
}
