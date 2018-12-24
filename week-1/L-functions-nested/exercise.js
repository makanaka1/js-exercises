var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
//The percentage function
function displayPercentage(numberOfStudents, numberOfMentors) {
  var totalNumber = numberOfStudents + numberOfMentors;
  var percentageOfStudents = (numberOfStudents / totalNumber) * 100;
  var percentageOfMentors = (numberOfMentors / totalNumber) * 100;
  printdisplayPercentage(percentageOfStudents, percentageOfMentors);
}

//print the percentage message
function printdisplayPercentage(percentageOfStudents, percentageOfMentors) {
  console.log("Percentage students: " + Math.round(percentageOfStudents) + "%");
  console.log("Percentage mentors: " + Math.round(percentageOfMentors) + "%");
}

//prints the metors greeting
function printGreeting(name) {
  console.log("Hello " + name.toUpperCase());
}

displayPercentage(15, 8);
printGreeting("Daniel");
printGreeting("Irina");
printGreeting("Mimi");
printGreeting("Rob");
printGreeting("Yohannes");
