var largestLocal = function(grid) {
    const size = grid.length;
    let result = [];

        
    for (row=1; row<size-1; row++) {

        result.push([]);
        for (col=1; col<size-1; col++){
            let nums = []
            nums.push(grid[row-1][col-1])
            nums.push(grid[row-1][col])
            nums.push(grid[row-1][col+1])
            nums.push(grid[row][col-1])
            nums.push(grid[row][col])
            nums.push(grid[row][col+1])
            nums.push(grid[row+1][col-1])
            nums.push(grid[row+1][col])
            nums.push(grid[row+1][col+1])
            result[row-1].push(Math.max(...nums));
    
        }
            
       
    }
    return result;

    
};

largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]);