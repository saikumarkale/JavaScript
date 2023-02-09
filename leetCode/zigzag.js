const input = "PAYPALISHIRING";
let n = 4;
//Output: "PAHNAPLSIIGYIR"   3//Output: "PINALSIGYAHRPI"4
let arr = []


for(i=0;i<=n;i++){

    for(j=0;j<input.length-1;j++){
        
        let num1=input[((n + Math.floor(n / 2))*j)+i];
        arr.push(num1);
        
       let  num2=input[((n + Math.floor(n / 2))*j)-i];
       if(num2>0 ){
        arr.push(num2)
      }
        
    }
    if(i==n){
        for (let x = 0; x < input.length; x++) {
                     let bottom = input[n - 1 + ((n + Math.floor(n / 2)) * x)]
                   arr.push(bottom)
                }

    }
}
















var filtered = arr.filter(function(x) {
    return x !== undefined;
});

console.log(filtered.toString());
//top line

// for (x = 0; x < n; x++) {
//     for (j = 0; j < input.length; j++) {
//         let top = input[(n + Math.floor(n / 2)) * j];
//         //arr.push(top)
//     }

//     for (k = 1; k < input.length; k++) {
//         let middle = input[((n + Math.floor(n / 2) - 1) * 1) + 1]
//         arr.push(middle)
//         arr.push(middle + 1 + 1);

//         //arr.push(middle)
//     }

//     //bottom line
//     for (i = 0; i < input.length; i++) {
//         let bottom = input[n - 1 + ((n + Math.floor(n / 2)) * i)]
//         //arr.push(bottom)
//     }
//     //console.log(arr)
//     //middle line

    
// }

//console.log(arr)



//console.log(input[0])


//console.log(n + n / 2)


