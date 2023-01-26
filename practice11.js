// parameter destrucring ----****
// it is used with objects
// it is destrucring similar to the objects


// this below is what we do generally to print name & place , here age is not given in the object so if we want to print then it give undefine.

// const person = {
//     name : "amit",
//     place : "bikaner"
// }

// function printPerson (obj){
//     console.log(obj.name);
//     console.log(obj.place);
//     console.log(obj.age);
// }

// (printPerson(person));


// this below is the parameter destrucring of the object ---

// const person = {
//     name : "amit",
//     place : "bikaner"
// }

// function printPerson ({name , place, age}){
//     console.log(name);
//     console.log(place);
//     console.log(age);
// }

// (printPerson(person));

// call back function ---***
// callback function means -- we add function inside function.

// we can use anything inside a function---
// here below we can  give a -- array or object or string while calling the function.
// ## important -- below we assign various thing to a & they all print it b/c function can be called manny times in a programme & we can assign different value each time. 

// function myfunc(a){
//     console.log(a);
// }

// myfunc([1,2,3])
// here we can give any value to the a, like we give --- array  

// myfunc({name:"amit"})

// myfunc("abc")



// now discuss callback function -- in callback function we call function inside function, means -- understand with the above example --
// we give a function at the "a".

// another defination is --- we can use another function in a function & can  call it (like we call it in line 67 which is a(); , this concept is  called callback function.

// function first(){
//     console.log("this is first function");
// }

// function second(a){
    // console.log(a);   // this will print entire first function with curly braket & all.                                           

//     a();
// }
// second(first)


// here above we use first function as a input in the second function. 
// so it will print first function.
// this above is the simple type of function.

// the below is the more complex type of this call back concept---

// function first(name){
//     console.log("this is first function");
//     console.log(`value of name is ${name}`);
// }

// function second(a){
//     console.log("this is second function");
//     a("amit");
// }
// second(first)

// in the above when we call second function in like 87 then it go to line 84 which is second function & execute -- "this is second function" & then it go to next line which has the callback concept & then it go to the first function in line 78 & then it is executing  what is inside the first function , in first function we give parameter name & we give this name in line 85.

// function returning function ----****( it is also called nested function)
// can a function return a function ----Yes!!!

// function first(){
//     return "amit";
// }
// const result = first()
// console.log(result);

// the above is the basic function , if we want to call function inside a function then the below is the code----

// function first(){
//     function second(){
//         console.log("second function");
//     }
//     return second;
// }

// const result = first()
// console.log(result());


// this above line print entire second function start with -- function second() & till console.log("second function");

// here what happen is that we use result variable & store the first function inside that , but first function return --second , which is a function ,
// so result variable is converted into a function which return "second function"
// & if we wrap this result function inside console.log then it print entire second function including function name to  till console.log("second")

// if we write --- result () then it is act like a function & return "second function"


// result()
// or
// first()();




// another important point ----

// function first(){
//     function second(){
//         console.log("second function");
//     }
//     return second;
// }

// first()();

// above explaination is below ----
// if we call first function it will return second function but it will not call the second function means --- it will not print "second function" to do so we have to assign this first() in to a variable & then this new variable is converted into a function b/c the first() returning a function name second and we store this function inside this new variable so this new variable is now converted into function.

// so we can simply use this variable and write  () after the variable so it will act as a function calling.
// or we can directly invoke directly to the first function.--which is demostrate like this --- first()();


// ## when we call function inside fuction ( callback function ) & when we return function ( function returning function ) or doing these both in a function then it is called higher order function, 

// important array methods ----**
// forEach
// map
// filter
// reduce


// forEach ---**
// understand with this example----

// print elements & index of that element of  an array and also print the result of multiplecation b/t elements & 2 ---


// numbers = [2,4,5,7,3];
// function myfunc(number , index){
//     console.log(`the number is ${number}`);
//     console.log(`the index is ${index}`);
//     console.log(`number*2= ${number*2}`);
    

// }
// myfunc(numbers[0], 0);
// console.log(myfunc(numbers[1], 1));

// here above while calling the function if we  use console.log then it is giving a undefine b/c we don't return anything while defining the function. 
// so whether we should remove the console.log & call the function directly or we can return something to remove this undefine.


// if we want to print for all the element in the array then we use for loop ---

// for (let i =0; i<numbers.length ; i++){
//     myfunc(numbers[i], i);

// }


// another example -----***

// numbers = [2,4,5,7,3];
// function myfunc1(number , index){
//     console.log(`the number is ${number} & the index is ${index}`);

// }

// for (let i = 0; i< numbers.length; i++){
//     myfunc1(numbers[i], i);
// }

// forEach *** ----forEach will do the same work which the above for loop is doing
// it is also doing in a loop , it give first number (element) of the array and then give the index of the number.

// it is work on call back concept b/c forEach is a  function which is calling myfunc1.
// numbers.forEach(myfunc1);

// we can also add a function inside forEach() which can replace the myfunc1 function -- functionality.

// numbers.forEach(function(number , index){
//     console.log(`the number is ${number} & the index is ${index}`);
// })


// if we want to multiply each element of the array & then print it ---

// numbers.forEach(function(number){
//     console.log(number*2);
// })

// here the forEach is passing number & index , it is up to us, if we  want to print the index then we write inside the function & if we don't want to print the index then we can completley forget it , don't write inside the function it will not print.

// real life example of forEach----***

example = [{firstName: "Amit", age : 28},
    {firstName: "Hally", age : 26},
    {firstName: "Neha", age : 25},
    {firstName: "Deeksha", age : 25}

]

// i want to print all the firstName with the help of forEach so ---

// example.forEach(function(user){
//     console.log(user.firstName)
// }
// )

// the other method which we can used is -- for -of-  loop which we study in objects which is ---

// for ( let user of example ){
//     console.log(user.firstName)
// }

// we can also use arrow function instead of these functions ---**

// example.forEach((user)=>{
//     console.log(user.firstName)
// })

// ## forEach is talking a function which is the example of callback method.
// forEach is used in old  code in new code we can see for of loop .

// map method ----***

// const number = [4,5,6,4,3,5];

// const square = function(number){
//     return number*number;
// }

// const newsquare = number.map(square);

//  console.log(newsquare);


// here above the squre is becoming function it is called function declaration.
// explain --- here above what happens is that number.map(square) is going first to number & pick a number then go to the square & run this function & then it is saved in newsquare & we are printing the newsquare.

// map giving a new array which we store in a variable , now this variable is converted into an array. here is the proof ---

// console.log(typeof newsquare);
// console.log(Array.isArray(newsquare));


// we can write the above code with less lines --- we can pack the square function inside map()---**

// const number1 = [4,5,6,4,3,6];
// const new1 = number1.map(function (number){
//     return number*number;
// });

// console.log(new1);

// we can also print index -----***

// const number1 = [4,5,6,4,3,6];
// const new1 = number1.map(function (number , index){
//     return `  ${number}, ${index}`;
// });

// console.log(new1);


// we can further reduce the code with the help of arrow function ---***

// const number1 = [4,5,6,4,3,6];
// const new1 = number1.map( number =>{
//     return number*number;
// });

// console.log(new1);


// real life example of map method-----***
// print all the firstName ---

// const users = [{
//     firstName:"Amit", age:34},
// {firstName:"Neha", age:44},
// {firstName: "Deeksha", age:54},
// {firstName: "sarup", age:22}]

// const new2 = users.map((user) =>{
//     return user.firstName});
// console.log(new2);

// filter method ---***
// it is return boolean value.
// number1.filter() , it is taking callback function inside the ().

// const number1 = [1,3,4,5,6,4,22,45,66];
// const isEven = function(number){
//     return number%2 === 0;
// }

// const new1 = number1.filter(isEven);
// console.log(new1);

// here above what is happening is that if the condition is satisfied then it is only print the element of the array which satisfied the condition.

// written in shortest way ----

// const number1 = [1,3,4,5,6,4,22,45,66,32];

// const new1 = number1.filter(function(number){return number % 2 ===0;});
// console.log(new1);

// in the just above line 333 we use a function inside number.filter(), this function is called annonamus function.


// written in more shortest ---
// we write arrow function --
const number1 = [1,3,4,5,6,4,22,45,66,32];

const new1 = number1.filter((number)=> {return number % 2 ===0;});
console.log(new1);


/* this is a multiline comment
it is appiled here also */


