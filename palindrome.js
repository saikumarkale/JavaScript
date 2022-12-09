
/**
 * take the input 
 * store the str1
 *  reverese the str1 and strore in str2 variable
 * 
 * compare the if both variables are equal
 * 
 */


/**
 *
 */



function rev(str1){



    let str2=str1.split('').reverse().join('');
    if(str2===str1){
     console.log("palindrome");
    }
    else{
     console.log("it is not apalindrome")
    }
 }
 rev("iii");