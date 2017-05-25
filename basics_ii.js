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
