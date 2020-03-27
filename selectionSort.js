// LEGACY VERSION (non ES2015 syntax)
//Places small values into sorted position
// comparing
// 0 1 <- idnex 0 is i 1 is j // j compares to i index to find if theres a lower num
// 0 2
// 0 3
// 0 4
// 0 5

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      //j = 1 + 1 always one ahead of lowest
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
// i, j, lowest[]
// [0], [1], [1] (22)
// [0], [2], [2] (10)
// [0], [3], [2] (10)
// [0], [4], [2] (10)
// [0],. [5], [2] (10)

console.log(selectionSort([34, 22, 10, 19, 17]));

// ES2015 VERSION
/*function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]); */
