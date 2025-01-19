// nnbbssu way to remember primitive data types. There are 7 primitive data types
let a, b, c, e, d, f, g, sum, word, character;
a = 10; //this is a number data type
b = null; // this is a null data type
c = true; //this is a boolen data type
d = BigInt(576); // this is a bigInt data type
e = "Badal"; // this is a string data type
f = Symbol("helloWorld"); // this is a symbol data type
g = undefined; // this is a undefined data types
console.log(a, b, c, d, e, f, g);
console.log(typeof b);
sum = a + b;
word = "hello";
character = "w";
console.log(word + "\n" + character);

// non primitive data types object
const student = {
  firstName: "Badal",
  lastName: "Karki",
  gender: "male",
};
console.log(student);
console.log(student["firstName"]);

// typeof word; it defines the type of data stored in variable

// = is used to assign the value to anything
// == is to check or compare if the value is same or not
// === is to check or compare if the value and data type is same or not

// object is non-primitive data type
// const student = {
//   fullName: "Badal karki",
//   age: 20,
//   gpa: 3.75,
//   height: 5.11,
// };
// console.log(student);

//  to access the key value here is the method
// student.age;

// to know the type of data stored in key

// console.log(typeof student.fullName);
