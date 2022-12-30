// chapter 36 --------
// objects ----****
// arrays are good but not good for real world data
// objects are not store data in index instead it is use key & pair concept

// how to create a object---
let person = {
    name : 'Amit',
    "age" : 28,
    hobbies : ["reading books", "watching sci-fi movies"]
}
console.log(person);
// key value is bydefault string we can write with "" or without it.
//what we declare inside the curly bracket --it is called object literate
// name is key and amit is value.
// sometimes we call name ,age , hobbies as a  properties of the object.  

// we can individually print any key value 
console.log(person.name);

// in this below we can use array property  b/c it is a array.
console.log(person.hobbies);

// how to add key -value in an object ---------
//  person.gender = "male";
person["gender"] = "male";

// we can use[] bracket notation or . notation to address the object---

console.log(person["age"]);
// we use "" string b/c key is store in string in js bydefault.
console.log(person);

// difference b/t dot notation (.) & bracket notation ([]) ------
const  key = "email"; 
const person1 = {
    name : "mahadev",
    age : 0,
    "mahadev capabilities" : "infinite"

}
// first difference ---

// this will through error 
// console.log(person.mahadev capabilities);

// if we want to use a key which has a space in it then we use []
// so we can use [] for accessing the key value ,  ---
// console.log(person1["mahadev capabilities"]);


// second difference ----

// if we want that what value is in the key variable which become a key and we assign value to this key .
// with the help of this we create a key and assign the value inside this key we can't add the value of key variable as a key so do this task we use [] 
person1.key = "amit@gmail.com";

// generally we use "" inside the [] but here we don't b/c js engine is taking key as a variable & search the value & paste it like this ---[email]
person1[key] = "amit@gmail.com";


console.log(person1);


