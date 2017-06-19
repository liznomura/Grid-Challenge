/*jshint esversion: 6*/
function gridChallenge(cols, rows, fill) {
  let array = [];
  for (i = 0; i < cols; i++) {
  row = [];
    for (j = 0; i < rows; j++) {
      row[j] = fill;
    }
  }
  return array;
}

