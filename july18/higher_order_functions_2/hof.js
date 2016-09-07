// forEach
// filter
// map
// reduce

var vietnameseFoods = ['Pho', 'Dong Khan', 'Bahn Mi', 'Bun', 'Boba Tea']

/* forEach
It takes an array, and for each element in the array, pass that element into a callback function .
*/

/*vietnameseFoods.forEach(function(element, i, arr) {
  console.log("element is: ", element);
  console.log("index is: ", i);
  console.log("array is: ", arr);
})*/

/*function cl (element, i, arr){   // name of the element, i for index, arr for array
  console.log("element is ", element)
  console.log("i is:", i)
  console.log("arr is " , arr)
}
*/
// function forEach(arr,fn) {
//   for (var i = 0; i < arr.length; i++) {
//     fn(arr[i], i, arr);
//
//     }
//   }
//
// forEach(vietnameseFoods, console.log)


var newArray = vietnameseFoods.filter(function(el,i,arr) {
  return true;
})
console.log(newArray);


var newArray = vietnameseFoods.filter(function(el,i,arr) {
  if (el[0] === 'B') {
    return true;
  }
})
console.log(newArray);

function filter(arr,fn) {
  for (var i = 0; i < arr.length; i++) {
    fn (el,i,arr)

  }

}
