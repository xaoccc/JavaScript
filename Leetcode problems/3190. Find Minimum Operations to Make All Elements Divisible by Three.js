var minimumOperations = function(nums) {
    let ops = 0;
    for (i=0; i<nums.length; i++) {
        (nums[i]%3===0) ? ops+=0 : ops+=1;
    }
    return ops;    
};