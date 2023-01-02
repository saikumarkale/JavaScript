/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

//algorithm
/**
 * take object and string_path input from the user
 * split the string with '.' and store in array
 * iterate the array if [i] is present in the object ,check for another key inside the nested object.
 * continue the iteration until the last nested key and print the value
 * if[i] is not present inside the object ,print undefined.
 */
var inputobj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (obj, path) => {
    let newpath = path.split('.');
    console.log(newpath);
    if (!obj || !path) {
        return undefined;
    }

    for (let i = 0; i < newpath.length; i++) {
        if (obj.hasOwnProperty(newpath[i])) {
            i++;
        }
        if (obj.hasOwnProperty)
            console.log(newpath[i]);
    }


};



findPath(inputobj, 'a.b.c');


/*console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null*/
