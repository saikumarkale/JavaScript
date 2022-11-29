function revstring(str) {
    let op = "";
    for (let i = str.length - 1; i >= 0; i--) {
        op +=str[i];
    }
    return op;
}
console.log(revstring("sai"));