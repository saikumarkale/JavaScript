/**
 * create empty array"outPutArray" and null integer"sum".
 * take the input from the user and itrate the array
 * if the index[elem]is array then consider that as a seperate array and recurse function until the last nested array.
 * if its not array then we can add the index values to the empty indeger.
 */

const inp = [1, 2, [3, [4], [5, 6]], [7], 1, 1, { name: 'name' }];
let outPutArray = [];
let sum = 0;
function sumOfNestedArrayElements(input) {

    for (let i = 0; i < input.length; i++) {
        if (!Array.isArray(input[i])) {
            if (typeof input[i] === "number")
                sum += input[i];
        }
        else if (Array.isArray(input[i])) {
            sumOfNestedArrayElements(input[i]);
        }

    }

    return "sumOfNestedArrayElements :" + sum;
}
console.log(sumOfNestedArrayElements(inp));