let arr = [2, 3, 4, 5, 6, 4, 5, 6, 4, 5, 6,];
let map = {}
let opArray = []
let n = arr.length;
console.log(n)

function majorityElements(arr) {
    for (let i = 0; i < n; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        }
        else map[arr[i]] = 1
        if (map[arr[i]] > count) {
            char = arr[i]; count = map[str[i]]
        }


    }
    return opArray
}
console.log(majorityElements(arr))