let array = [2, 3, 4, 5, 6, 7, 8]
function triplet(arr, KK) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === KK) {
                    return [arr[i], arr[j], arr[k]];
                }
            }
        }
    }


}


/*function triplet(array, K) {
    const set = new Set();
    for (let i = 0; i < array.length; i++) {
        if (set.has(K - array[i])) {
            return [array[i], K - array[i], K - 2 * array[i]];
        }
        set.add(array[i]);
    }
}*/

console.log(triplet(array, 12));