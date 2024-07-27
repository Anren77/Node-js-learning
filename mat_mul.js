let assert = require("assert");


// const mat1 = [[0, 2, 2], 
//               [-1, 2, 3], 
//               [3, 3, 3]];

// const mat2 = [[1, 5, 22],
//               [2, 0, 22],
//               [0, -3, 22]];


function mat_mul(mat1, mat2){
    const mat1_dims = [mat1.length, mat1[0].length];
    const mat2_dims = [mat2.length, mat2[0].length];
    console.log("First input matrix shape: ", mat1_dims);
    console.log("Second input matrix shape: ", mat2_dims);
    assert(mat1[0].length === mat2.length, "DIMENSION ERROR: The number of columns of the first input matrix should equal to the number of rows of the second input matrix");
    
    let final_result = [];
    for(let i = 0; i < mat1.length; i++){
        let temp_row = [];
        for(let k=0; k < mat2[0].length;k++){
            let col_sum = 0
            for(let j =0; j < mat2.length; j++){
                    col_sum+= mat1[i][j] * mat2[j][k];
                }
            temp_row.push(col_sum);
        }
        final_result.push(temp_row);
    }

    const res_mat = [final_result.length, final_result[0].length];
    console.log("Output matrix shape: ", res_mat);
    return final_result;
}

// let ans = mat_mul(mat1, mat2);
// //console.log(mat1[0][2]*mat2[0][0]);
// console.log(ans);

module.exports = mat_mul;