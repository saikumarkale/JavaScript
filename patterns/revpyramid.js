//let input = 5;
let str = "";
function pyr(inp) {
    for (let i = 1; i <= inp; i++) {
        for (let j = 1; j <= inp - i + 1; j++) {
            str += inp;
        }
        inp = inp - 1;
        str += "\n";
    }
    return str
}
console.log(pyr(10));