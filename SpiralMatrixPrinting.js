

var aaa = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
];
function spi(a) {
    let val = 0;
    let b = [];
    let par1, par2, rev = [];

    for (let i = 0; i < a.length; i++) {
        //console.log(a[i])
        b.push(a[i]);
        //a.shift();

        for (let ii = i + 1; ii < a.length - 1; ii++) {
            //let v = 0
            if (a[ii]) {
                par1 = a[ii];
                b.push(par1[par1.length - 1]);
                par1.pop()

            }
            //v++;
        }
    }
    //let vlast = a.length - 1;
    if (a[a.length - 1]) {
        rev = a[a.length - 1];
        rev.reverse();
        b.push(rev);
        a.pop()

    }
    //vlast--

    for (let j = a.length - 1; j >= 2; j--) {
        let v1 = 0;
        if (a[j]) {
            par2 = a[j];
            b.push(par2[0 + v1]);
            // par2.shift();
            v1++
        }


    }
    return b.flat();
}


// let outPutArray = [];
// function nestedArray(inputArray) {

//     for (let i = 0; i < inputArray.length; i++) {
//         if (!Array.isArray(inputArray[i])) {
//             outPutArray.push(inputArray[i]);

//         }
//         else if (Array.isArray(inputArray[i])) {
//             nestedArray(inputArray[i]);
//         }

//     }
//     return outPutArray
// }


console.log(spi(aaa));




