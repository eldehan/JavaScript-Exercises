function letterCaseCount(string) {
  let caseObject = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let index = 0; index < string.length; index += 1) {
    if (findUpperCase(string[index])) {
      caseObject.uppercase += 1;
    } else if (findLowerCase(string[index])) {
      caseObject.lowercase += 1;
    } else {
      caseObject.neither += 1;
    }
  }

  return caseObject;
}

function findUpperCase(char) {
  return (char >= 'A' && char <= 'Z');
}

function findLowerCase(char) {
  return (char >= 'a' && char <= 'z');
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCountRegex(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  }
}