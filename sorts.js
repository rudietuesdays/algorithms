// bubble sort
function bubbleSort(arr) {
  for (var x = arr.length - 1; x >= 0; x--) {
    for (var i = 0; i < x; i++) {
      var temp = arr[i];
      var j = i;
      while (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        j++;
      }
    }
  }
  return arr
}
var arr = [5, 3, 4, 7, 1, 9, 13]
// console.log(bubbleSort(arr))

// multikey sort
function multikeySort(arr){
  for (var i = 0; i < arr.length; i++){
    for (var j = (arr.length-1); j >= 0; j--){
      for (var a = 0; a < arr[j].last.length; j++){
        if (arr[j].last[a] < arr[i].last[a]){
          var temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
          return arr;
        }
        if (arr[j].last[a] === arr[i].last[a]){
          continue;
        }
        if (arr[j].last[a] > arr[i].last[a]){
          return arr;
        }
      }
    }
  }
}

arr = [
  {
    first: 'rae',
    last: 'gaines'
  },
  {}
]

function popFront(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  arr.length = arr.length - 1;
  return arr
}
var arr1 = [2,3,9,10,11];
// console.log(popFront(arr1));

// sort two pre-sorted arrays into one
function combineSort(arr1, arr2){
  var longer = arr1;
  var shorter = arr2;
  if (arr2.length > arr1.length) {
    longer = arr2;
    shorter = arr1;
  }
  var newArr = [];
  var count = shorter.length-1;
  while (count > 0) {
    if (shorter[0] < longer[0]) {
      newArr.push(shorter[0]);
      popFront(shorter);
      count --;
    } else {
      newArr.push(longer[0]);
      popFront(longer);
    }
  }
  while (longer.length > 0) {
    newArr.push(longer[0])
    popFront(longer);
  }
  return newArr;
}

arr1 = [1,4,7];
arr2 = [2,3,9,10,11];
// console.log(combineSort(arr1, arr2))

// merge sort
function mergeSort(arr1, arr2){
  var newArr = [];
  mergeSortHelp(arr1, arr2, newArr)
  if (arr1.length > 0){
    for (var i = 0; i < arr1.length; i++){
      var min1 = findMin(arr1);
      newArr.push(min1[0]);
      arr1.splice(min1[1], 1);
    }
  } else if (arr2.length > 0) {
    for (var i = 0; arr2.length > 0; i++){
      var min2 = findMin(arr2);
      newArr.push(min2[0]);
      arr2.splice(min2[1], 1);
    }
  }
  console.log('woohoo');
  return newArr;
}

function mergeSortHelp(arr1, arr2, newArr){
  var min1 = findMin(arr1);
  var min2 = findMin(arr2);

  if (arr1.length == 0 || arr2.length == 0) {
    return arr1, arr2, newArr;
  }

  if (min1 > min2){
    newArr.push(min2[0]);
    newArr.push(min1[0]);
  } else {
    newArr.push(min1[0]);
    newArr.push(min2[0]);
  }
  arr1.splice(min1[1], 1);
  arr2.splice(min2[1], 1);

  mergeSortHelp(arr1, arr2, newArr);
}

function findMin(arr){
  var min = arr[0]
  var ind = 0;
  for (var i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
      ind = i;
    }
  }
  return [min, ind];
}

var arrayyyy = [4,2,6,3,8,0,0,-1];
var another = [3,4,2,9,7,9,1,23,0]
// console.log(findMin(arrayyyy));
console.log(mergeSort(arrayyyy, another));
