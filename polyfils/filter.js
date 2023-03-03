// let arr = [1, 2, 3, 4, 5, 6, 6]


// Array.prototype.polyFilter = function (ownFunction) {
//     let store = [];
//     for (let i = 0; i < this.length; i++) {
//         if (ownFunction(this[i])) {
//             store.push(this[i])
//         }
//     }
//     return store;
// }


// function own(inp) {
//     return inp % 2 == 0
// }

// let op = arr.polyFilter(own)
// console.log(op)


let arr = [1, 2, 3, 4, 5, 6, 7, 8];



Array.prototype.polyFilter = function (ownCB) {
    let storeData = []
    for (let i = 0; i < this.length; i++) {
        if (ownCB(this[i])) {
            storeData.push(this[i])
        }
    }
    return storeData;
}


function ownCB(inp) {
    return inp % 2 == 0;
}



let output = arr.polyFilter(ownCB)

console.log(op)