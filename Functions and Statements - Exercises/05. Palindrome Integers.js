function palindrome(input) {
    
    for (let i = 0; i < input.length; i++) {
        let num = input[i].toString();
        let isPalindrome = true;
        for (let j = 0; j < num.length / 2; j++) {
            if (num[j] !== num[num.length - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
    }
}