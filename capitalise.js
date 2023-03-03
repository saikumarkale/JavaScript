let str = "saikumar";

let spStr = str.split();

function cap(inp) {
    let res = '';
    //let count = 1;
    for (let i = 0; i < inp.length; i++) {
        res += inp[i].toUpperCase();
        res += inp[i + 1].toLowerCase(); i++

        // if (count = 1) {
        //     res += inp[i].toUpperCase();
        //     count = 0;
        // }
        // if (count = 0) {
        //     res += inp[i];
        //     count = 1
        // }
    }

    return res
}


console.log(cap(str))


// console.log(spStr.toUppercase())
// //str.