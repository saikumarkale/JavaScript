let str = "Hello , how are you mam madam . Hope you're doing good mam";




function largestPalindrome(str) {
    let result = '';
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 2) {
            i++
        }
        let rev = words[i].split('').reverse().join('');
        if (words[i] == rev) {
            //let acc = words[i];
            result = words[i];
            // if (rev.length > result.length) {
            //     console.log(rev);
            // }
            // result = words[i];
        }


        // let a = words[i];


        // let b =
        //     //let c = b;
        //     console.log(a, b);




    }
}


largestPalindrome(str)
