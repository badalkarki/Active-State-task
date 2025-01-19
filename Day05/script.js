// for loop
// for (let i = 1; i <= 5; i++) {
//   console.log("values of i=", i);
// }
// while loop
// let a = 1;
// while (a <= 5) {
//   console.log("values of a =\n", a);
//   a++;
// }

// do while loop
// let b = 1;
// do {
//   console.log("the values of b=", b);
//   b++;
// } while (b <= 5);

// for of loop works for string and array

// let str = "Badal Karki";
// for (let val of str) {
//   console.log("char are:", val);
// }

// for in loop are used in object and array function is to return key

// let student = {
//   name: "Badal",
//   Gpa: 3.75,
//   isPass: true,
// };
// for (let val in student) {
//   console.log("keys are:", val, "\n", "values are:", student[val]);
// }

// practice qns 1
// to print all even number from 1-100.

// for (num = 1; num <= 100; num++) {
//   if (num % 2 == 0) {
//     console.log("even num are:", num);
//   }
// }

// practice qns 2
// let guessNum = 2;
// let ans = prompt("guess the correct number");
// while (guessNum != ans) {
//   ans = prompt("guess the correct number");
//   if (ans == guessNum) {
//     console.log("correct guess");
//   } else {
//     console.log("wrong guess;\t guess again");
//   }
// }
// const node = document.createElement("h1");
// node.textContent("hello badal");
// document.body("test1").appendChild(node);
// document.getElementById("btn").addEventListener("click", () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const display = document.createElement("div");
//   display.innerText = `your email:${email} , your Password: ${password}`;
//   document.body.appendChild(display);
// });
document.getElementById("age").value;
if (age > 18) {
  return;
} else {
  console.log(alert("not greater than 18"));
}
document.getElementById("btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const display = document.createElement("div");
  display.innerText = `your email:${email} , your Password: ${password}`;
  document.body.appendChild(display);
});
