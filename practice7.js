// chapter 36 --------
// objects ----****
// arrays are good but not good for real world data
// objects are not store data in index instead it is use key & pair concept

// how to create a object---
// let person = {
//     name : 'Amit',
//     "age" : 28,
//     hobbies : ["reading books", "watching sci-fi movies"]
// }
// console.log(person);
// key value is bydefault string we can write with "" or without it.
//what we declare inside the curly bracket --it is called object literate
// name is key and amit is value.
// sometimes we call name ,age , hobbies as a  properties of the object.  

// we can individually print any key value **
// console.log(person.name);

// in this below we can use array property  b/c it is a array.
// console.log(person.hobbies);

// how to add key -value in an object ---------**
//  person.gender = "male";
// person["gender"] = "male";

// we can use[] bracket notation or . notation to address the object---

// console.log(person["age"]);
// we use "" string b/c key is store in string in js bydefault.
// console.log(person);

// difference b/t dot notation (.) & bracket notation ([]) ------
// const  key = "email"; 
// const person1 = {
//     name : "mahadev",
//     age : 0,
//     "mahadev capabilities" : "infinite"

// }
// first difference ---

// this will through error 
// console.log(person.mahadev capabilities);

// if we want to use a key which has a space in it then we use []
// so we can use [] for accessing the key value ,  ---
// console.log(person1["mahadev capabilities"]);


// second difference ----

// if we want that what value is in the key variable which become a key and we assign value to this key .
// with the help of this we create a key and assign the value inside this key we can't add the value of key variable as a key so do this task we use [] 
// person1.key = "amit@gmail.com";

// generally we use "" inside the [] but here we don't b/c js engine is taking key as a variable & search the value & paste it like this ---[email]
// person1[key] = "amit@gmail.com";


// console.log(person1);

// chapter 38 ----****
// how to iterate key , value and key - value pair from object-----
// or we can say how to print seperately key , value and key -value pair ----

let person2 = {
    name : "amit1",
    age : 33,
    gender : "male",
    hobbies : ["movies","running"]

}

// there are two ways we can do that -----
// for in loop 
// Object.keys

// for in loop ---
// for (let key in person2){
//     console.log(key);
// }

// this loop will print all the key in person2.

// if want to print values only then ---**

// for (let key in person2){
//     console.log(person2.key);
// }

// this above action give 3 undefined means it search key(person.key) as a key ( like name & age) but in person2 no key is persent which is named as key.so it is undefined and since it is in loop in go check to first palce -- find no key , then go to the second (age) & go for third place. that's why it is giving 3

// so we can write this way --
// for (let key in person2){
    // console.log(person2["key"]);
    // console.log(person2[key]);
// }
// usually we write anything inside [] with a "" but if we write this then it give the same result .key is giving b/c it is doing the same work. it is finding name key -- key in the object

// for (let n in person2){
//     console.log(person2[n]);
// }
// so we write without "" so it is giving  value of n  which is giving actual key value (name ,age etc.) in a loop .


// if we want to print both key and value pair then ---**


// for (let key in person2){
//     console.log(`${key} ${person2[key]}`);
// }
// the above is not giving array value in array

// for (let key in person2){
//     console.log(key, person2[key]);
// }
// the above is not giving a :(collon) b/t key and values so we write it again below

// for (let key in person2){
//     console.log(key,": ", person2[key]);
// }

// now Object.keys way ---- here noted that in Object O is capital ---

console.log( Object.keys(person2));
// the above will give all the keys in a array.which is array.
// console.log(typeof Object.keys(person2));

// if we want to check that it is giving array or not then a method is used to check that array is array or not which is----
// let check = Array.isArray(Object.keys(person2));
// console.log(check);


// we use for of loop in this ----

// this below is not understand by me.
// for (let key of person2){
//     con

// }

// destructuring of array & object are revised in practice8.js also.

