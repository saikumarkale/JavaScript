/**
 * take the input from the user
 * create empty character,count,map
 * itrate the string chars
 * if char is prasent and increase the mapvalue of index if not present then assing the value 1
 * if the mapvalue is greate than the count the assign the index char to character variable and assign the mapvalue to count
 * return the char and count
 */


let str = 'aaabbbcccccccccddddddddddddddddddddd';

function maxOcc(str) {
    let count = 0;
    let map = {};
    let char = '';
    for (let i = 0; i < str.length; i++) {
        /*for(let j=1;j<inp.length;j++){
            if(inp[i]===inp[j]){
                count1++;
                arr.push(inp[i])
                if(count1<count2){
                    count2=count1;
                }
            }

        }*/
        if (map[str[i]]) {
            map[str[i]]++;
        }
        else map[str[i]] = 1
        if (map[str[i]] > count) {
            char = str[i]; count = map[str[i]]
        }


    }
    return { char, count }
}
console.log(maxOcc(str));