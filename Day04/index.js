// let age = 17;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// let num = prompt("enter the number");

// let ans = num % 5 == 0 ? "multiple of 5" : "not a multiple of 5";
// console.log(ans);
// method 1

// const test = (greet, cb) => {
//   console.log(greet);
//   cb();
// };

// const userFun = () => {
//   console.log("user!");
// };
// test("hello", userFun);

// console.log("setp 1");
// console.log("setp 2");
// console.log("setp 3");

// set time out asychonomous function

// console.log("step1");
// setTimeout(() => console.log("step 2"), 3000);
// console.log("step 3");

// setInterval function
// setInterval(() => console.log("Hello world!"), 2000);

// promise function

// function myfunctions() {
//   return Promise.resolve("hello");
// }
// myfunctions();

// function myfunction() {
//   return Promise.reject("hi");
// }

// let checkEvenOdd = new Promise((resolve, reject) => {
//   let num = 4;
//   if (num % 2 == 0) {
//     console.log(resolve("this is a even number"));
//   } else {
//     console.log(reject("the number is odd"));
//   }
// });
// checkEvenOdd
//   .then((message) => console.log(message))
//   .catch((error) => console.error("error"));
// console.log(document.getElementsByClassName("container"));

console.log(document.getElementById("box"));
box.style.color = "red";
