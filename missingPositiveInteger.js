function missingInteger(arr, n) {
    let empArr = [];
    let val = 1; let i = 0;
    while (i < arr.length) {
        //console.log(arr[i],val,i,arr.length,empArr)
        if (val !== arr[i]) {
            empArr.push(val);
        }
        else {
            i++;
        }
        val++;


    }
    //if (empArr.length == n) {
    return empArr[empArr.length - 1];
    /// }
}


console.log(missingInteger([2, 4, 5, 6, 7, 8], 5));