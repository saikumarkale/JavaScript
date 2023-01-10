/**
 * take the array input
 * create two variables firstlargest and secondlargest and initilize with  zero
 * itrate the the array.
 * if the value is greater that the first largest then assign the value to first array
 * if the value is greater than second and less than first largest assign the value to secondlargest
 * log the secondlargest.
 * 
 */

let arr = [2, 4, 1, 5, 78, 32, 44];

function secondLargestNumber() {
    var firstLargest = 0;
    var secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr.length < 2) {
            return "invalid array"
        }
        else if (arr[i] > firstLargest) {
            firstLargest = arr[i];
        }
        else if (arr[i] < firstLargest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest
}

console.log(secondLargestNumber(arr));