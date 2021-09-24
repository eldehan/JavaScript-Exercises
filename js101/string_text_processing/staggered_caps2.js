function staggeredCase(string) {
  let indicator = 0;
  return string.split("")
               .map(char => {
                 if (isALetter(char)) {
                   if (indicator === 0) {
                     indicator = 1;
                     return char.toUpperCase(0);
                   } else if (indicator === 1) {
                     indicator = 0;
                     return char.toLowerCase();
                   }
                 } else {
                   return char;
                 }
               })
               .join("");
}

function isALetter(char) {
  return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);