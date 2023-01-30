let input = [
    [1, 2, [3, [4], [5, 6]], [7]]
];
let outPutArray = [];
let sum = null;
function sumOfNestedArrayElements(inputArray) {

    for (let i = 0; i < inputArray.length; i++) {
        if (!Array.isArray(inputArray[i])) {

            sum = sum + inputArray[i];
        }
        else if (Array.isArray(inputArray[i])) {
            sumOfNestedArrayElements(inputArray[i]);
        }

    }

    return "sumOfNestedArrayElements :" + sum;
}
console.log(sumOfNestedArrayElements(input));