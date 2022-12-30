//create array
let arr = [];

//add into array
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); console.log(arr)//[1, 2, 3, 4,  5,6, 7, 8, 9, 10]




//add element at particular index
arr[3] = 25;

//remove from last
let pop = arr.pop(); console.log(arr, " ====> " + pop)//[1, 2, 3, 25, 5,6, 7, 8,  9]  ====> 10



//remove from  front
let shift = arr.shift(); console.log(arr, " ====> " + shift)//[2, 3, 25, 5,6, 7,  8, 9]  ====> 1

let unshift = arr.unshift(); console.log(arr, " ====> " + unshift)//[2, 3, 25, 5,6, 7,  8, 9]  ====> 8

//length of array
let len = arr.length; console.log("array length :" + len)//array length :8




//select elements from particular range
let slice = arr.slice(3, 6); console.log(arr, " ====> " + slice)//[2, 3, 25, 5,6, 7,  8, 9]  ====> 5,6,7

//remove elements from particular range
let splice = arr.splice(3); console.log(arr, " ====> " + splice)//[ 2, 3, 25 ]  ====> 5,6,7,8,9


//empty the arry
let leng = arr.length = 0; console.log("length of the array :" + leng)//length of the array :0

//updating value at particular index
let text = "my name is sai kumar kale";


let splitText = text.split(" "); console.log(splitText);
let index = splitText.indexOf("sai"); console.log(index);

if (index !== -1) {
    splitText[index] = "***";
}


let finalOut = splitText.join(" "); console.log(finalOut);