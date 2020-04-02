/***********     Task 1    **************/
// var cities = [];
// console.log(cities);



/***********     Task 2    **************/
// var cities = ["Karachi", "Lahore", "Hyderabad", "Sukkur", "Islamabad", "Quetta"];
// console.log(cities);



/***********     Task 3    **************/
// var favMovies = [];
// favMovies[0] = prompt("Whats your favourite movie ?");
// favMovies[1] = prompt("Whats your favourite movie ?");
// favMovies[2] = prompt("Whats your favourite movie ?");



/***********     Task 4    **************/
// var city1, city2, city3;
// city1 = {
//     name: "Karachi",
//     population: 14910000,
//     provinceName: "Sindh",
//     isCapital: true
// };
// city2 = {
//     name: "Islamabad",
//     population: 1015000,
//     provinceName: "Punjab",
//     isCapital: true
// };
// city3 = {
//     name: "Hyderabad",
//     population: 1733000,
//     provinceName: "Sindh",
//     isCapital: false
// };
// var cities = [city1, city2, city3];
// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(cities);



/***********     Task 5    **************/
// var students = [];
// students[0] = {
//     name: "Ali",
//     rollNum: 1001,
//     fatherName: "Hussain",
//     subjects: ["English", "Maths", "Urdu"],
//     DOB: "5th March, 1997"
// };
// students[1] = {
//     name: "Zafar",
//     rollNum: 1002,
//     fatherName: "Altaf",
//     subjects: ["Chemistry", "Maths", "Islamiat"],
//     DOB: "15th November, 1994"
// };
// students[2] = {
//     name: "Ahmed",
//     rollNum: 1003,
//     fatherName: "Zubair",
//     subjects: ["Urdu", "Physics", "Maths"],
//     DOB: "2nd October, 1999"
// };
// students[3] = {
//     name: "Saad",
//     rollNum: 1004,
//     fatherName: "Yaseen",
//     subjects: ["Geography", "Calculus", "Urdu"],
//     DOB: "14th January, 1998"
// };
// students[4] = {
//     name: "Ghazanfar",
//     rollNum: 1005,
//     fatherName: "Kamal",
//     subjects: ["Programming", "Urdu", "Maths"],
//     DOB: "9th August, 1998"
// };
// console.log(students);



/***********     Task 6    **************/
// function greetUser() {
//     alert("Hello sir!");
// }
// greetUser();
// greetUser();



/***********     Task 7    **************/
// function greetUser(firstName, lastName) {
//     alert("Hello " + firstName + " " + lastName);
// }
// var fName, lName;
// fName = prompt("Whats your first name ?");
// lName = prompt("Whats your last name ?");
// greetUser(fName, lName);



/***********     Task 8    **************/
// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// function subtract(num1, num2) {
//     console.log(num1 - num2);
// }
// function multiply(num1, num2) {
//     console.log(num1 * num2);
// }
// function divide(num1, num2) {
//     console.log(num1 / num2);
// }
// function modulus(num1, num2) {
//     console.log(num1 % num2);
// }
// add(2,3);           // 5
// subtract(10,5);     // 5
// multiply(2,6);      // 12
// divide(15,3);       // 5
// modulus(20,3);      // 2



/***********     Task 9    **************/
// function square(num) {
//     return num * num;
// }
// console.log(square(5));



/***********     Task 10    **************/
// function square(num) {
//     return num * num;
// }
// function hypotenuse(base, perp) {
//     base = square(base);
//     perp = square(perp);
//     return base + perp;
// }
// console.log(hypotenuse(10,12));



/***********     Task 11    **************/
// function bioData(userName, rollNum, favSubject) {
//     var bioData = {
//         userName: userName,
//         rollNum: rollNum,
//         favSubject: favSubject
//     };
//     return bioData;
// }
// console.log(bioData("Suraqa", 1003, "Maths"));



/***********     Task 12    **************/
// function birthdayGreeting(userName) {
//     alert("Happy Birthday " + userName);
// }
// birthdayGreeting("Suraqa");



/***********     Task 13    **************/
// function square(num) {
//     return num * num;
// }
// function calculatedValue(a, b) {
//     var calculatedValue = square(a) - 2 * a * b + square(b);
//                     //      16      -   40      +   25 ========> 1
//     return calculatedValue;
// }
// console.log(calculatedValue(4, 5));



/***********     Task 14    **************/
// function square(num) {
//     return num * num;
// }
// function calculatedValue(a, b, c) {
//     var calculatedValue = square(a) + square(b) + square(c) + 2*(a*b + b*c + c*a);
//     return calculatedValue;
// }
// console.log(calculatedValue(2, 3, 4));
// // (a + b + c)2 = a2 + b2 + c2 + 2(ab + bc + ca)
// //                4  +  9 + 16 + 2(6  + 12 +  8)
// //                          29 + 2(26)
// //                          29 + 52



/***********     Task 15    **************/
// function square(num) {
//     return num * num;
// }
// function areaOfCircle(r) {
//     var area = Math.PI * square(r);
//     return area;
// }
// console.log(areaOfCircle(6));



/***********     Task 16    **************/
// function circumference(r) {
//     var circumference = 2 * Math.PI * r;
//     return circumference;
// }
// console.log(circumference(4));