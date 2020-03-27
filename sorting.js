// Least to Greatest sort
function numberCompare(num1, num2) {
  return num1 - num2;
}

var arr = [2, 5, 1, 2, 3, 7, 6, 9, 4].sort(numberCompare);

//console.log(arr);

// Greatest to least sort
function numberCompare2(num1, num2) {
  return num2 - num1;
}

var arr2 = [2, 5, 1, 2, 3, 7, 6, 9, 4].sort(numberCompare2);

//console.log(arr2);

//String sort Smallest to Largest
function stringCompare(string1, string2) {
  return string1.length - string2.length;
}

var arrString = [
  'here',
  'are',
  'some',
  'different',
  'length',
  'strings',
  'a'
].sort(stringCompare);
//console.log(arrString);

//String sort Largest to smallest
function stringCompare(string1, string2) {
  return string2.length - string1.length;
}

var arrString2 = [
  'here',
  'are',
  'some',
  'different',
  'length',
  'strings',
  'a'
].sort(stringCompare);
//console.log(arrString2);
