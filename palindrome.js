function isPalindrome(s) {
  var noSpace = s.replace(/\s/g, "")
  var stringReverse = s.split("").reverse().join("").replace(/\s/g, "");
  return noSpace == stringReverse;

}

module.exports = isPalindrome;


