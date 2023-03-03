function star(num) {
    let res = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            res += "*";
        }
        res += "\n";
    }
    return res
}


console.log(star(10))