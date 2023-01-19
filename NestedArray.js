/**
 * create empty array(output [])
 * take the input [..]from the user and iterate 
 * if the index value is not array push the value into the empty array(output [])
 * else if index value is array then convert to tostring and push into empty array(output [])
 * recurse the function(call the own function) ,so that the condition will satisfy that its not an array
 * log the array(output [])
 */


let input = [1, 2, 3, 4, [5, 6, [34, 56], 7], 8, 9, [12, 34]];
let outPutArray = [];
function nestedArray(inputArray) {

    for (let i = 0; i < inputArray.length; i++) {
        if (!Array.isArray(inputArray[i])) {
            outPutArray.push(inputArray[i]);

        }
        else if (Array.isArray(inputArray[i])) {
            nestedArray(inputArray[i]);
        }
        /*else if (Array.isArray(inputArray[i])) {
            let element = inputArray[i].toString()
            outPutArray.push(element);
        }*/

        /*else if (function rec(inp) {
            if (Array.isArray(inp)) {
                inp.toString();
                rec();
            }
            else {
                outPutArray.push(inp);
            }
        }) {

        }*/



    }

    return outPutArray
}
console.log(nestedArray(input));
