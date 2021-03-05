
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let val of matrix[i]) {
        arr.push(val);
      }
    } else {
      let reversed = matrix[i].reverse();
      console.log(reversed);
      for (let val of reversed) {
          arr.push(val);
      }
    }
  }

  return arr;
}