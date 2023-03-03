// Array.prototype.polyReduce = function (ownFunction, init) {
//     for (let i = 0; i < this.length; i++) {
//         if (init) {
//             init = ownFunction.call(undefined, init, this[i], i, this)
//         }
//         else {
//             init = this[i]
//         }
//     }
//     return init
// }


// function own(total, num) {
//     return total + num;
// }
// let arr = [1, 2, 3, 4, 5]

// console.log(arr.polyReduce(own))




let arr = [1, 2, 3, 4, 5, 1];



// Array.prototype.polyReduce = function (ownFunction, value) {
//     for (i = 0; i < this.length; i++) {
//         if (value) {
//             value = ownFunction.call(undefined, value, this[i], i, this)
//         }
//         else {
//             value = this[i]
//         }
//     }

//     return value
// }


// function own(value, init) {
//     return value + init
// }


// console.log(arr.polyReduce(own))


Array.prototype.polyReduce = function (ownFunction, initialValue) {
    for (let i = 0; i < this.length; i++) {
        if (initialValue) {
            initialValue = ownFunction.call(initialValue, undefined, this[i], i, this)
        }
        else {
            initialValue = this[i]
        }

    }
    return initialValue
}
function ownFunction(value, total) {
    return value + total
}


console.log(arr.polyReduce(ownFunction))