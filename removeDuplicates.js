/*const arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5];

function removeDuplicates(arr) {
  let unique = {};

  arr.forEach(num => {
    if (!unique[num]) {
      unique[num] = true;
    }
  });

  return Object.keys(unique);
}

console.log(removeDuplicates(arr)); */

/*let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5];

function removeDuplicates(arr) {
  let newArr = new Set(arr);
  return newArr;
}

console.log(removeDuplicates(arr));*/

let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5];

function removeDuplicates(arr) {
  return arr.filter((a, b) => arr.indexOf(a) === b);
}

console.log(removeDuplicates(arr));

function removeDuplicates(arr) {
  return arr.filter((a, b) => {
    arr.indexOf(a) === b;
  });
}
