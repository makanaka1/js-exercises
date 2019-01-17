/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Alexandra", "Annam", "Mikey", "Karim", "Ahmed"];
var longNameThatStartsWithA = names.find(longNameThatStartsWithA);

function longNameThatStartsWithA(name) {
  return name.slice("")[0] == "A" && name.length > 7;
}

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
