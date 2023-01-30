const arr = [
    ["a", "b"],
    ["c", "d"],
    ["e", "f", ["ee", "ff"]],
];


let output = arr.flat(2)
console.log(output)

let conc = [].concat(...arr);
console.log(conc)



function red() {
    let ro = arr.reduce((a, cv) => {
        return a.concat(cv);
    }, []);
    if (Array.isArray(ro)) {
        console.log(ro)
    }
    else {
        red(ro)
    }
    return ro
}

console.log(red())
/*let reduceout = arr.reduce((a, cv) => {
    return a.concat(cv);
}, []);
console.log(reduceout)*/