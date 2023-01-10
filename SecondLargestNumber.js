/**
 * take the array input
 * create two variables firstlargest and secondlargest and initilize with  zero
 * itrate the the array.
 * if the value is greater that the first largest then assign the value of firstlargest to second largest and assign the array value to first largest
 * if the value is greater than secondlargest and less than first largest assign the value to secondlargest
 * log the secondlargest.
 * 
 */

let arr = [2, 2, 1, 2, 4, 34, 43];

function secondLargestNumber() {
    var firstLargest = 0;
    var secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr.length < 2) {
            return "invalid array"
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


