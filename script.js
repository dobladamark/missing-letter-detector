function fearNotLetter(str) {
 for (let i = 0; i < str.length - 1; i++) {
   let current = str.charCodeAt(i);
   let next = str.charCodeAt(i + 1);
  
   if (next - current > 1) {
     let missingCode = current + 1;
     let missingLetter = String.fromCharCode(missingCode);
     return missingLetter;
   }

 }
 return undefined;
}

console.log(fearNotLetter("abce"))
