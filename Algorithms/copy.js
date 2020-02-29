function findHighPoints(elevations) {
        console.log(elevations)
        //Write your code here
    
        var answer_matrix = [];
    
        var n = elevations.length
        var m = elevations[0].length
    
        for (let r = 0; r < n; r++){
            for (let c = 0; c < m; c++){
    
                let current_cell = elevations[r][c]
                let up, down, left, right, top_right, top_left, bottom_right, bottom_left;
    
                // TOP END
                if (r === 0){
                    up = 0
                    top_right = 0
                    top_left = 0
                } else if (r > 0 && c < m-1 ){
                    up = elevations[r-1][c]
                    top_right = elevations[r-1][c+1]
                    top_left = elevations[r-1][c-1]
                }
    
                // BOTTOM END
                if (r === n-1){
                    down = 0
                    bottom_right = 0
                    bottom_left = 0
                } else if (r > 0 && c < m-1 ){
                    down = elevations[r+1][c]
                    bottom_right = elevations[r+1][c+1]
                    bottom_left = elevations[r+1][c-1]
    
                }
    
    
                // LEFT END
                if (c === 0){
                    left = 0
                    bottom_left = 0
                    top_left = 0
                } else if (r > 0 && c < m-1 ){
                    left = elevations[r][c-1]
                    bottom_left = elevations[r+1][c-1]
                    top_left = elevations[r-1][c-1]
                }
    
    
                // RIGHT END
                if (c === m-1){
                    right = 0
                    bottom_right = 0
                    top_right = 0
                } else (r > 0 && c < m-1 )
                    right = elevations[r][c+1]
                    bottom_right = elevations[r+1][c+1]
                    top_right = elevations[r-1][c+1]
                }
    
    
                c = Math.max(...[current_cell, up, down, left, right, bottom_right, bottom_left, top_right, top_left])
    
                if (current_cell === c){
                    answer_matrix[r][c] = 1
                } else {
                    answer_matrix[r][c] = 0
                }
                console.log('c', c)
    
            }
     return answer_matrix
        }
    
       
    const test = [[1,2,3,4,5],[5,1,2,3,4],[1,3,4,5,6]]
    console.log( findHighPoints(test))
