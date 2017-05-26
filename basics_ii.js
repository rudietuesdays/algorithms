// linear search
function linearSearch(number, array){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == number){
      return i;
    }
  }
  return false;
}

var arr = [24, 8, 23, 3];
console.log(linearSearch(8, arr));   // => 1
console.log(linearSearch(-99, arr)); // => false

/************ RECURSION ************/
// find sum recursively
function rSum(n) {
  n = Math.abs(n);
  if (n === 1) {
    return 1;
  } else {
    return rSum(n-1) + n;
  }
}
console.log(rSum(-5));

// find sum iteratively
function iSum(n){
  n = Math.abs(n);
  if (n === 1) {
    return 1;
  } else {
    var sum = n;
    while (n > 1) {
      sum += (n-1);
      n --
    }
    return sum;
  }
}
console.log(iSum(5));

// iterative factorial
function iFactorial(n){
  n = Math.abs(n);
  var factorial = n;
  while (n > 1){
    factorial *= (n-1);
    n--;
  }
  return factorial;
}
console.log(iFactorial(1));

// recursive factorial
function rFactorial(n){
  if (n === 1){
    return 1;
  } else {
    console.log(n);
    return n * rFactorial(n-1);
  }
}
console.log(rFactorial(1));

// iterative fibonacci
function iFibonacci(n){
  var fib = 0;
  var i = 1;
  var temp;
  while (n > 0) {
    temp = fib;
    fib += i ;
    i = temp;
    n --;
  }
  return fib;
}
console.log(iFibonacci(6));

// recursive fibonacci
// rFib(2) = rFib(0) + rFib(1) = 0 + 1 = 1
// rFib(3) = rFib(2) + rFib(1) = 1 + 1 = 2
// rFib(4) = rFib(3) + rFib(2) = 2 + 1 = 3
// rFib(5) =  rFib(4) + rFib(3) = 3 + 2 = 5
// rFib(6) = rFib(5) + rFib(4) = 5 + 3 = 8

function rFibonacci(n){
  if (n === 0 || n === 1){
    return n;
  } else {
    return rFibonacci(n-1) + rFibonacci(n-2)
  }

}
console.log(rFibonacci(6));

// recursive binary search tree
