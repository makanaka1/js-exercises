// 1. Update the variable `sortedNums`.
// It should contain the values of `nums` and `nums2` in ascending order
// Tip: you might need to read the documentation for .sort (search "mdn array sort")

var nums = [10, 1, 5, 29, 100];
var nums2 = [11, 6, 3, 29, 12];
var sortedNums = nums.concat(nums2).sort(function(num1, num2) {
  return num1 - num2;
});

console.log(sortedNums);
console.log(nums);
console.log(nums2);

// 2. Using code, show that the variables nums and nums2 were not changed

/* 
  EXPECTED RESULT
  ---------------
  [ 1, 3, 5, 6, 10, 11, 12, 29, 29, 100 ]
*/
