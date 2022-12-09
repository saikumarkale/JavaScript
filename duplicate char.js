/**
 * 1.take the input string.
 * 2.iterate the string 
 * 3.each caharacter is compared with the other character in the the string.(i=0 and j=1).
 * 4.if the compared characters are same then skip to the next char.
 * 5.if the char is not same add it to the result.
 * 
 */




function duplicate(str) {

}

function duplicate(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                break;
            }
            res += str[j];
        }
        return res;
    }
}
duplicate("hello");