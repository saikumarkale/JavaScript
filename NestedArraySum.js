/**
 * take the input from the user and itrate the array and null integer
 * if the index[elem]is array then consider that as a seperate array and recurse untill the last nestede array.
 * if its not arry then we can add the index values to the empty indeger
 *
 */

let inp = [
    [1, 2, [3, [4], [5, 6]], [7]]
];
let outPutArray = [];
let sum = null;
function sumOfNestedArrayElements(input) {

    for (let i = 0; i < input.length; i++) {
        if (!Array.isArray(input[i])) {

            sum += input[i];
        }
        else if (Array.isArray(input[i])) {
            sumOfNestedArrayElements(input[i]);
        }

    }

    return "sumOfNestedArrayElements :" + sum;
}
console.log(sumOfNestedArrayElements(inp));