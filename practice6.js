// for loop in array ----------*******

// basic for loop ---------
// for (let i=0 ; i<=10; i++){
//     console.log(i);
// }

// let fruit = ["apple","banana","graps","mango"];

// most important property of array is length-----

// console.log("the length of fruit array is ", fruit.length);
// console.log(fruit[0]);

// to print last element of array with the help of length ---

// console.log(fruit[fruit.length-1]);
// console.log(fruit[fruit.length-2]);

// for (i=0; i<fruit.length; i++){
//     console.log(fruit[i]);
// }

// if i want that all the fruit should print in uppercase then ------*****

// for (i=0; i<fruit.length; i++){
//     console.log(fruit[i].toUpperCase());   
// }

// if we want that first  print all in   uppercase & then print all in lowercase then   then ---

// for (i=0; i<fruit.length; i++){
//     console.log(fruit[i].toUpperCase().toLowerCase());
// }

// if we want that one uppercase & one lowercase then ---

// for (i=0; i<fruit.length; i++){
//     console.log(fruit[i].toUpperCase());
//     console.log(fruit[i].toLowerCase());
// }

// if we want to store all the uppercase fruits element in a new array & then print it then ----------*****


// 
// let fruits1 =[];
// for (i=0; i<fruit.length; i++){
//     fruits1.push(fruit[i].toUpperCase());
// }
// console.log(fruits1);


// const --- we can't reassign to const ----****

// const pi = 49;
// pi = 45;
// console.log(pi);


// const in array --------------**************

// const fruit = ["apple", "banana", "mango"];
// console.log(fruit);

// A variable which is assign in const , we can't change in this variable but here we can easily push the element inside the variable ---why ?

// b/c this array it store in heep and it is a single array which has a address when we do console.log then the address is called from pointer which is located in the stack .
// so when we add the the array it is not creating a new array if we try to change the fruit with new  --- fruit = [] then it create a new array then it is not allow to change .
// if we use [] box braket then it create a new array which is considered as a new change & it is not allow in const .
// if we don't use [] box braket & add  or remove it or change it through any array method like push pop shift unshfit then it is ok b/c it is not consider as a new array .

// this below line is used then it create a new array in heep which is not allowed in const.
// fruit = ["kivi"];

// fruit.push("grapes");
// console.log(fruit);

// if we use let & use [] box bracket then it is create a new array in a new line.

// so what to use then --- generally const is used b/c developer want that once i created then no one can change it, intentially or by mistake.

// chapter ---32-----
// while loop in array -----------************

// fruit = ["apple","mango", "banana"];
// i=0;
// while(i<fruit.length){
//     console.log(fruit[i]);
//     i++;
// }

// store the items of fruit in a new array ---
// const fruit = ["apple","mango", "banana"];
// const fruit1 =[];
// i=0;
// while(i<fruit.length){
//     fruit1.push(fruit[i]);
//     i++;
// }
// console.log(fruit1);
 

// for of loop in array ----------------*************
// const fruits = ["banana","mango","grapes"];
// for (let fruit of fruits){
//     console.log(fruit);
// }

// or 

// const k = ["banana","mango","grapes"];
// for (let i of k){
//     console.log(i);
// }

// but fruit & fruits are used more for better understanding -------

// for print with a new array and with a uppercase -----
// const fruits = ["banana","mango","grapes"];
// const fruits1 = [];
// for (let fruit of fruits){
//     fruits1.push(fruit.toUpperCase());
// }

// console.log(fruits1);


// for in loop in array -----------**********
// it is giving index (index number)

// const fruits = ["banana","mango","grapes"];
// for (let index in fruits){
//     console.log(index);
// }/
// we can use any thing instead of using index or fruit 

// if we want to print the element of the array with the help of this loop then --
// const fruits = ["banana","mango","grapes"];
// for (let index in fruits){
//     console.log(fruits[index]);
// }

// if we want to pack it in a new array & uppercase then ---
// const fruits = ["banana","mango","grapes"];
// const fruits1 = [];
// for (let index in fruits){
//     fruits1.push(fruits[index].toUpperCase());
// }
// console.log(fruits1);


// chapter 35 ------******

// array destructuring ------
// it is come with ES6 & it is not used often but we have to know this---
let array = ["item1","item2","item3","item4"];
// let firstValue = array[0];
// let secondValue = array[1];
// console.log("value of firstValue", firstValue);
// console.log("value of secondValue", secondValue);

// we can also write this (array destructuring)
// let [value1, value2] = array;
// value1 & value 2 is act as a seperate variable.
// here item1 is stored in value 1 & item2 is stored in value2
// let [value1, value2] =array;

// if we have item3 & here in line 162 we don't define any variable then item3 is not coming in the array (162).
// console.log(value1);
// if i print array then all the three element is printed 
// console.log(array);

// if we want to store the item3 in value 2 then we add empty variable in which the item2 is stored.
// console.log(value2);

// if we want to store all rest element then we use tradition way -- which is 
// let myNewArray = array.slice(2);
// console.log(myNewArray);

// but we can use array destructuring method which is short ---
 let [value1, value2, ...myNewArray] =array;

// so all the rest element in the array is coming in this array
console.log(myNewArray);






