var differenceOfSums = function(n, m) {
    let dNums = 0;
    let ndNums = 0;
    for (i=1; i < n+1; i++) {
        (i%m==0) ? dNums+=i : ndNums+=i;
    }
    return ndNums - dNums;
};
