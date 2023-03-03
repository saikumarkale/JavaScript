let obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
}

function path(obj, keys) {
    return keys.split('.').reduce((acc, key) => acc ? acc[key] : undefined, obj);
}


console.log(obj, 'a.b.c');

console.log(obj, 'a.b.f');

//output :12