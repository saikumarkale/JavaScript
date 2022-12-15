/**
 * take 2 array inpuits from the user
 * combine two arrays into one (concat)
 * create new array.
 * iterate the values and comapre each index value of one array(array1) with each value of new array(newarray)
 * if both the values are same ,it will return true , else false and proceed to next value check
 * 
 */
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [4, 5, 6, 7];
array1.concat(array2);
var newarray = [];

var count = 0;

var start = false;
for (var i = 0; i < array1.length; i++) {
    for (j = 0; j < newarray.length; j++) {
        if (array1[i] == newarray[j]) {
            start = true;
        }
    }
    count++;
    if (count == 1 && start == false) {
        newarray.push(array1[i]);
    }
    start = false;
    count = 0;

}
console.log(newarray);




