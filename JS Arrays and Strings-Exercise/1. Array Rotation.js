function arrayRotation(input, rotations) {
    let result = " ";
    for (let i = 0; i < input.length; i++) {
        result += (i + rotations >= input.length) ? input[(i + rotations) % input.length] + " " : input[i + rotations] + " ";
    }
    console.log(result.trim());
}
