/**
 * take the input character from user
 * validate if its alphabet or not (a to z) based on ascii . else it is not a valid input.
 * if yes, then compare the input with a e i o u
 * if present in these letters , log it. else it is a consonent.
 */



function vowel_or_consonent(char) {

    char.toLowerCase();

    if (char >= 'a' && char <= 'z') {

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            console.log(char + " is a vowel");
        }
        else {
            (console.log(char + " is consonent"));
        }

    }
    else {
        console.log("it's not a valid input");
    }
}
vowel_or_consonent('8');

