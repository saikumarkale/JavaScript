let arr = [1, 2, 3, 4, 5, 6, 7, 8];


// Array.prototype.polyMap = function (ownFunction) {
//     let store = [];
//     for (let i = 0; i < this.length; i++) {
//         store.push(ownFunction(this[i]));
//     }
//     return store
// }


// function own(inp) {
//     return inp * 2
// }



// console.log(arr.polyMap(own))


Array.prototype.polyMap = function (ownFunction) {

    let storeData = [];
    for (let i = 0; i < this.length; i++) {
        storeData.push(ownFunction(this[i]))
    }
    return storeData
}



function ownCB(inp) {
    return inp * 3;
}

console.log(arr.polyMap(ownCB))


