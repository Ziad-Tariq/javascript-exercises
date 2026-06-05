const removeFromArray = function(arr, ...count) {


 let newArray=arr.filter(item => !count.includes(item));
 return newArray;

}

 removeFromArray([1, 2, 3, 4], 7, 2)
// Do not edit below this line
module.exports = removeFromArray;
