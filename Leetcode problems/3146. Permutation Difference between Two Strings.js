var findPermutationDifference = function(s, t) {
    let result = 0;
    for (i=0; i<s.length; i++) {
        for (j=0; j<s.length; j++) {
            if (s[i] == t[j]) {
                result += Math.abs(i-j);
            }
        }
    }
    return result;
};