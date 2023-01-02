const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let v1 = []

for (let i = 0; i < num.length; i++) {
    if (num[i] > 5) {
        v1.push(num[i])
    }

}
console.log(v1)


//
function letfilter(num) {

    if (num > 5) {
        return true;
    }
    else return false;
}
let v2 = num.filter(letfilter); console.log(v2)


//
let v3 = num.filter(function (num) {
    if (num % 5 === 0) {
        return true;
    }

}); console.log(v3);

//
let v4 = num.filter((num) => num < 7);
console.log(v4)



//
const namee = ["Mahehs", "Satyam", "Shivam", "Raja", "Anirudha", "Shankar"];


const nameFilter = namee.filter((data) => ["Satyam", "Mahesh"].includes(data));
console.log(nameFilter)