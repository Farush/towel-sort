
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix) { 
  towel = [];
  for (let i = 0; i < matrix.length; i += 2) {
    towel = towel.concat(matrix[i])
    if (matrix[i + 1]) {
      towel = towel.concat(matrix[i + 1].reverse())
    }
  }
  return towel;}
  else return [];
}
