/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
area = (l1, l2) => {
  const result = l1 * l2;
  return result;
};
console.log(area(10, 20));
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
crazySum = (y, x) => {
  let result = y + x;
  if (x === y) {
    result = (x + y) * 3;
    return result;
  }
  return result;
};
console.log(crazySum(20, 20));
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
crazyDiff = (y) => {
  let result = Math.abs(y - 19);
  if (y > 19) {
    result = Math.abs(y - 19) * 3;
    return result;
  }
  return result;
};
console.log(crazyDiff(42));
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
/* WRITE YOUR CODE HERE */
boundary = (n) => {
  (n >= 20 && n <= 100) || n === 400 ? console.log(true) : console.log(false);
};
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */
strivify = (string) => {
  string.startsWith("Strive") === true
    ? console.log(string)
    : console.log(`Strive ${string}`);
};

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
check3and7 = (n) => {
  const success = true;
  const fail = false;
  if (n % 7 === 0 || n % 3 === 0) {
    return success;
  } else {
    return fail;
  }
};
console.log(check3and7(1));
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
reverseString = (string) => {
  return string === ""
    ? ""
    : reverseString(string.substring(1)) + string.charAt(0);
};
console.log(reverseString("Strive"));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
/* WRITE YOUR CODE HERE */
upperFirst = (string) => {
  let nString = string.replace(
    /(^\w|\s\w)(\S*)/g,
    (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
  );
  return nString;
};
console.log(upperFirst("hi im a nugget"));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
cutString = (string) => {
  let nString = string.replace(/^(.)|(.)$/g, "");
  return nString;
};
console.log(cutString("ciao"));
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
giveMeRandom = (n) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
};
console.log(giveMeRandom(200));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
