// const isEven = num => {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve(`${num} is even`);
//         } else {
//             reject(`${num} is not even`);
//         }
//     });
// };

// isEven(4)
//     .then(result => {
//         console.log(result); // Output: 4 is even
//     })
//     .catch(error => {
//         console.log(error);
//     });

// isEven(3)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error); // Output: 3 is not even
//     });




// const calc = num => {
//     let promise = new Promise((resolve, reject) => {
//         if (num % 3 == 0 && num % 5 == 0) {
//             resolve(`${num} super success`)
//         }
//         else if (num % 3 == 0) {
//             resolve(`${num} success`)
//         }

//         else {
//             reject(`${num} not success`)
//         }
//     })
//     return promise
// }


// calc(12)
//     .then(res => { console.log(res) })
//     .catch(err => { console.log(err) });


let calculator = num => {
    let prom = new Promise((resolve, reject) => {
        if (num % 3) {
            resolve(`${num} success`)
        }
        else {
            reject(`{num} not success`)
        }
    })
    return prom
}


calculator(15).then(res => console.log(res)).catch(err => console.log(err))
calculator(23).then(res => console.log(res)).catch(err => console.log(err))