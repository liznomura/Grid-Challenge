/*jshint esversion: 6*/
function gridChallenge(cols, rows, fill) {
  let array = [];
  for (i = 0; i < cols; i++) {
  row = [];
    for (j = 0; j < rows; j++) {
      row[j] = fill;
    }
    array[i] = row;
  }
  return array;
}

function stretchGoal(existingArray, cols, rows, fill) {
  let newArray = [];
  for (i = 0; i < cols; i++) {
    row = [];
    for (j = 0; j < rows; j++) {
      row[j] = fill;
    }
    newArray[i] = row;
  }
  newArray.push(existingArray);
  return newArray;
}