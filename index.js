function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord =  word.split('').reverse().join('');
  if (reversedWord === word) {
    return true;
  }
  else {
    return false;
  }
};
/* 
  Add your pseudocode here

  Split the word and reverseWord 
    if reverseWord === word
    return a true 
  else it will return false
*/

/*
  Add written explanation of your solution here
  1. firts we create a variable where we will store our reversed word.
  2. we will split the word and apply reversed method with join
  3. we will use  consitionals and comparison to return true 
    if word and reversed word are equal. And false if it is not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
