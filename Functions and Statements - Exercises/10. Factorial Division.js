function factorialDivision(a, b) {
    function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    let result = factorial(a) / factorial(b);
    return result.toFixed(2);
}