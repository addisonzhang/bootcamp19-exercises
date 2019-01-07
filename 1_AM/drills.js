const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  return str.split("").reverse().join("");
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  for(i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if(arr[j] == arr[i]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if (num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if(arr1.length != arr2.length) {
    return -1;
  } else {
    let arrRet = [];
    for(i = 0; i < arr1.length; i++) {
      arrRet.push([arr1[i], arr2[i]]);
    }
    return arrRet;
  }
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = [];
  let arr2 = [];
  for(i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0]);
    arr2.push(arr[i][1]);
  }
  return [arr1, arr2];
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  num %= str.length;
  return str.substring(str.length - num) + str.substring(0, str.length-num);
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  // moments.js
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let today = new Date();
  let day = today.getDate();
  let mon = today.getMonth();
  let year = today.getFullYear();
  let hour = today.getHours();
  let min = today.getMinutes();
  let time = ""
  if (hour >= 12) {
    time = "PM";
  } else {
    time = "AM";
  }
  hour %= 12;
  if (hour == 0){
    hour = 12;
  }
  return (`Today's date is ${months[mon]} ${day}th, ${year}. It is ${hour}:${min} ${time}`);
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// console.log(tokenize("Have a great day"));
// console.log(reverse("3df"))
assert(reverse("3df") === "fd3")
assert(factorial(3) == 6);
// console.log(uniqueOnes([1, 3, 5, 6, 1, 3]));
// console.log(zip([1, 2, 3], [5, 3, 1]));
// console.log(unzip([[1, 5], [2, 3], [3, 1]]));
// console.log(unzip(zip([1, 2, 3], [5, 3, 1])));
assert(shiftRight("hello", 3) == "llohe");
// console.log(announceDate());