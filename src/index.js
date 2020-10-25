
module.exports = function towelSort (matrix) {
  let arr=[];
  if(Array.isArray(matrix) && matrix.length){
    for(let i=0; i<matrix.length; i++){
      if(i === 0 || i%2==0){
        let hj=matrix[i].length;
        for(let j=0; j<matrix[i].length; j++){
          arr.push(matrix[i][j]);
        }
      }else{
        let hj=matrix[i].length;
        for(let j=matrix[i].length-1; j>=0; j--){
          arr.push(matrix[i][j]);
        }
      }
      
    }
    return arr;
  }else return [];
}
