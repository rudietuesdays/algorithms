///// minh's try /////
// function subsets(str) {
//   var arr = str.split('')
//   arr.reverse()
//   var arrFinal = []
//   var arrNew = []
//   // for (var i = 0; i<str.length; i++) {
//     subHelp(arr, arrNew, arrFinal)
//   // }
//   console.log("here", arrFinal)
//   return arrFinal
// }
//
// function subHelp(arr, arrNew, arrFinal) {
//   if (arr.length == 0) {
//     arrFinal.push(arrNew.join())
//     return arrFinal
//   }else{
//     x = arr[arr.length-1]
//     arrNew.push(x)
//     subHelp(arr, arrNew, arrFinal);
//     arrNew.pop()
//     subHelp(arr, arrNew, arrFinal);
//   }
// }

///// solution ///////

function rSubsets(str) {
    var arr = str.split('')
    arr.reverse()
    var arrFinal = []
    var arrNew = []
    return rSubHelp(arr, arrNew, arrFinal)
}

function rSubHelp(arr, arrNew, arrFinal) {
    if (arr.length == 0) {
        arrFinal.push(arrNew.join())
        return arrFinal
    }
    var x = arr.pop()
    // var arr2 = []
    // for (let i = 0; i < arr.length; i++) {
    //     arr2.push(arr[i])
    // }
    arrNew.push(x)
    rSubHelp(arr, arrNew, arrFinal)
    arrNew.pop()
    rSubHelp(arr, arrNew, arrFinal)
    arr.push(x)
    return arrFinal
}

console.log(rSubsets('abcd'))
