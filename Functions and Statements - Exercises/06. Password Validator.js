function passwordValidator(password) {
    let passLength = password.length < 6 || password.length > 10;
    let passLetters = password.match(/^[A-Za-z0-9]+$/) === null;
    let passDigits = password.match(/\d{2,}/g) === null;

    if (passLength) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (passLetters) {
        console.log('Password must consist only of letters and digits');
    }
    if (passDigits) {
        console.log('Password must have at least 2 digits');
    }
    if (!passLength && !passLetters && !passDigits) {
        console.log('Password is valid');
    }
    
}

