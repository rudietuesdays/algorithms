// print 1-255
function printNums() {
  for (var i = 1; i <256; i++){
    console.log(i);
  }
}
printNums()

// print odd integers 1-1000
function oddNums(){
	for (var i = 1; i <= 1000; i++){
		if (i%2 != 0){
			console.log(i);
		}
	}
}
oddNums()

// print the sum of all the odd numbers from 1 to 5000
function printSum(){
  var sum = 0;
  for (var i = 0; i <= 5000; i++) {
    if (i%2 != 0){
      sum += i;
    }
  }
  console.log(sum);
}
printSum()

// print each value in array
function printArray (array){
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printArray([1,3,5,7,9,13])

// print maximum number in array
function findMax (array){
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max){
      max = array[i];
    }
  }
  console.log(max);
}
findMax([-3, 3, 9, 5, 7])

// print the average of the values in an array
function findAvg (array){
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum / array.length);
}
findAvg([1,3,5,7,20])

// create array of all odd numbers 1-255
function createArray() {
  var Y = [];
  for (var i = 0; i <256; i++) {
    if (i%2 != 0){
      Y.push (i);
    }
  }
  console.log(Y);
}
createArray()

// take an array and return the number of values in that array whose value is greater than y
function greaterThanY(array, y){
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > y){
      count ++;
    }
  }
  console.log(count);
}
greaterThanY([1,3, 5, 7, 9, 11], 3)

// square each value in a given array
function squareVals (array){
  var squares = [];
  for (var i = 0; i < array.length; i++) {
    squares.push(array[i]*array[i]);
  }
  return squares;
}
console.log(squareVals([1,5, 10, -2]));

// replace negative numbers in array with 0
function replaceNegatives(array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0){
      array[i] = 0;
    }
  }
  return array;
}
console.log(replaceNegatives([1,5,-6, 10, -2]));

// print max, min and average of a given array
function findMaxMinAvg (array){
  var sum = array[0];
  var max = array[0];
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] <  min){
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
    sum += array[i];
  }
  console.log("max: "+max+"\nmin: "+min+"\naverage: "+(sum / array.length));
}
findMaxMinAvg([1,5, 10, -2])

// shift the values in a given array one forward
function shiftVals(array){
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i+1];
  }
  array[array.length-1] = 0;
  return array;
}
console.log(shiftVals([1,5,10,7,-2]));

// replace negative numbers in a given array with the string 'Dojo'
function replaceNums(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0){
      array[i] = 'Dojo';
    }
  }
  return array;
}
console.log(replaceNums( [-1, -3, 2]));

// create an array of 10 random integers between 0 and 100
function randomNums(){
  var x = [];
  for (var i = 1; i < 11; i++) {
    x.push(Math.floor(Math.random()*100))
  }
  return x;
}
console.log(randomNums());

// swap first and last number in a given array
function swapNums(array){
  var temp = array[0];
  array[0] = array[array.length-1];
  array[array.length-1] = temp;
  return array;
}
console.log(swapNums([2, 3, 5, 7, 6]));

// reverse the values in a given array
function reverseArray(array){
  
}
