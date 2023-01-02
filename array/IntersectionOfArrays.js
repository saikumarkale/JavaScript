/**
 * take 2 input arrays from the user
 * create a outputarray
 * iterate the 2 nested for loops
 * if index value of one array is matches with index value of 2nd array
 * push the value of 1st array index into the  outputarray(add the condition if the index value is not present in the outputarray)
 */


/*function intersectionArrayM1(arr1, arr2) {
    let opArray = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                if (!opArray.includes(arr1[i])) {
                    opArray.push(arr1[i]);
                }
            }
        }
    }
    console.log(opArray);
}
intersectionArrayM1([1, 2, 3, 4, 6, 9], [3, 4, 6, 4, 5, 5, 8, 9]);*/





/**
 * take 2 input arrays from the user
 * create a output object objOutPut:{}
 * iterate the 2 nested for loops
 * if index value of one array is matches with index value of 2nd array
 * then consider the index value as a key and assign some value to the key of an objOutPut
 * finally log the keys of the object
 * 
 */
function intersectionArrayM2(arr1, arr2) {
    let objOutPut = {};

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                objOutPut[arr1[i]] = 1;
            }
        }
    }
    console.log(Object.keys(objOutPut));
}
intersectionArrayM2([1, 2, 3, 4, 6, 9], [3, 4, 6, 4, 5, 5, 8, 9]);
