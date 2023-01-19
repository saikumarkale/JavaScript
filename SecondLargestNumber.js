/**
 * take the array input
 * create two variables firstlargest and secondlargest and initilize with  zero
 * itrate the the array.
 * if the value is greater that the first largest then assign the value of firstlargest to second largest and assign the array value to first largest
 * if the value is greater than secondlargest and less than first largest assign the value to secondlargest
 * log the secondlargest.
 * 
 */

let arr = [-2, -2, -4, 2];

function secondLargestNumber() {
    var firstLargest = null;
    var secondLargest = null;
    if (arr.length < 2) {
        return "invalid array"
    }
    for (let i = 0; i < arr.length; i++) {

        if (firstLargest === null) {
            firstLargest = arr[i];
        }

        else if (arr[i] > firstLargest) {

            //assign the previous values of first largest to the secongd largest
            secondLargest = firstLargest
            firstLargest = arr[i];
        }
        else if (arr[i] < firstLargest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest
}

console.log(secondLargestNumber(arr));


/*function sortString(str){
    var arr = str.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        /* if ASCII code greater then swap the elements position*//*
if(arr[i] > arr[j]){
  tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
}
}
return arr.join('');
}
*/

