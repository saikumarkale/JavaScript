
let arr = [1, 2, 3, 4, 5];
let op = []
function patt(arr) {
    for (let i = 0; i <= arr.length; i++) {
        let str = '';
        for (let j = 1; j <= arr.length - i; j++) {
            str += j;
        }
        console.log(str);
    }
}

patt(arr)





// while (arr.length > 0) {
//     console.log(arr.toString().split(',').join(''));
//     arr.shift();
// }




function same(inp) {
    let res = ''
    for (let i = 0; i < inp.length; i++) {
        for (let j = i + 1; j <= inp.length; j++) {
            //console.log(inp[i])
            res += inp[i]
        }
        res += "\n"

    }
    return res
}
console.log(same(arr))
