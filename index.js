function iterativeLog(array) {
  array.forEach(
    console.log(`${array[index]}: ${array[element]}`)
  );
}

function iterate(callback) {
  var arr = [1, 2, 3, 4, 5];
  return arr.forEach(callback);
}

function doToArray(array, callback) {
  array.forEach(callback);
}
