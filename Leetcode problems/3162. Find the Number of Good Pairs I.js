var numberOfPairs = function(nums1, nums2, k) {
    let good = 0;
    for (i=0; i<nums1.length; i++) {
        for (j=0; j<nums2.length; j++) {
            (nums1[i] % (nums2[j] * k) === 0) ? good += 1 : null; 
        }
    }
    return good;
    
};