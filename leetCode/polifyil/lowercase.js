if (!String.prototype.Lowercase) {
    String.prototype.Lowercase = function () {
        let splstr = this.split(" ");
        let op = '';
        for (let i = 0; i < splstr.length; i++) {
            let charCode = splstr.charCodeAt(i);


            if (charCode >= 65 && charCode <= 90) {

                splstr[i] = String.fromCharCode(charCode + 32)
            }


        }
        return splstr.join('');
    }


};




let message = "My name is rahul pancholi";
console.log("Before: ", message);
message = message.Lowercase();

console.log("After: ", message);




//   if (!String.prototype.toLowerCase) {
//     String.prototype.toLowerCase = function() {
//       let result = '';
//       for (let i = 0; i < this.length; i++) {
//         let charCode = this.charCodeAt(i);
//         result += (charCode >= 65 && charCode <= 90) ?
//           String.fromCharCode(charCode + 32) : this[i];
//       }
//       return result;
//     };
//   }