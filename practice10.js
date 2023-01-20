// function inside function ---***
// we can add function inside function & we can use any method to define the function ( like function declaration , function expression , arrow function)

// this below is dumy version --

// function india(){
//     const rajasthan = function(){
//         const bikaner = () => {}
//     }
// }

// this below is the actual function inside function ---

// function india() {

//     const rajasthan = function () {
//         console.log("Rajasthan1");

//     }
//     const bikaner = () => {
//         console.log("bikaner1");
//     }

//     console.log("india");
//     rajasthan();
//     bikaner();
// }
// india();

// another example of function inside function ---

// function world() {

//     const sum = function (number1, number2) {
//         return number1 + number2;
//     }

//     const num = (number1 , number2) =>  number1*number2;

//     console.log("world1");
//     console.log(sum(5,5));
//     console.log(num(5,5));


// }
// world();

// here the above function output is --- world1, 10, 25

// if we write this above function in this way then  output is different --

// function world() {
    
//     const sum = function (number1, number2) {
//         return number1 + number2;
//     }

//     const num = (number1, number2) => number1 * number2;


//     console.log(sum(5, 5));
//     console.log(num(5, 5));
//     console.log("world1");


// }
// world();

// output --- 10, 25 , world1


// lexical scope ---
//  it is a concept which i explain with a example --
// if we add a variable value inside a thrid function ( thrid function is inside second & second is inside first) & call the function then if it is in the thrid function then it is executed othrewise it looking in their lexical environment( in their parent function.) 
// if it is not find the variable then it is searching in the gobal scop ( means the starting point where we start to write the programme, in other words in the looking in the outside of all function .)

// const value1 = "origin";
// function chapter1 (){

//     const value1 = "person1";
//     console.log( value1);
    
//     const chapter2 = function(){
//         // const value1 = "person2";
//         console.log(value1);
//     }
//     chapter2()
// }

// chapter1();

// in the above example we asign value1 value in parent function as well as child function & when we call the "value1" value in child function it is written the value which is asign in the child function if the value is not present in the child function then it check its lexical environment ( its parent environment) .
// if the value is present in  their lexical environment then it print it otherwise it is check it's parent (parent ---> parent) and it checks until it reach the origin of the code which is the global scope, if it is find the value in the golbal scope then  it print it .

// here the global scope value is origin -where the code is written.
   
// new topic block scope & function scope ---****

// let & const are  block scope -- if we define any variable with the help of these then we can't access the variable outside its block ( here block means written inside this curley bracket{} ) 

// var is a function scope -- means if we define any variable with the help of var then we can access this variable outside of the block or inside of the block.

// examples ---
// 1.
// {
//     let firstName = "amit";
//     console.log(firstName);

// }

// {
//     const firstName = "neha";
//     console.log(firstName);

// }


// console.log(firstName);


// here above we can't access the variable which is define with the help of let & const outside the block.

//  if we use var then we can access anywhere inside the block or outside the block.


// {
//     var firstName = "amit";
//     console.log(firstName);

// }

// {
//     var firstName = "neha";
//     console.log(firstName);

// }


// console.log(firstName);

//important note---*** ###
//  that's why people use let & const most of the time, b/c onece a variable  is declair the variable is not  not accessable outside the block.

// another example on this same concept---

// if (true){
//     let firstName = "bikaner";
//     console.log(firstName);

// }
// console.log(firstName);

// here above we can't access the firstName variable outside the block.
// if we use the var then we can access the variable outside the block,demostrate below---

// if (true){
//     var firstName = "jodhpur";
//     console.log(firstName);

// }
// console.log(firstName);

// now take another example ---- 
// this time we wrap inside a function ---

// function myapp(){
//     if (true){
//         const firstName = "jaipur";
//         console.log(firstName);
//     }
    // console.log(firstName);    // this will through error b/c it is outside the block({}) & lexical concept is also not applying here b/c there is no variable present outside the function.
// } 
// myapp()


// default parameter ----***
// we can set  a default value to a parameter --

// function addtwo (a,b){
//     return a+b;
// }
// console.log( addtwo(3,3));

// here if give one value  in the argument then it is give NaN b/c it is trying to add one number & one undefine, demostrate below---

// function addtwo (a,b){
//     return a+b;
// }
// console.log( addtwo(3));

// to tacke this we use if condition before the ECMA -6 (2015) , demostrated below ---

// function addtwo(a,b,c){
//     if (typeof a === "undefined"){
//          a =0
//     }
//      else if (typeof b === "undefined"){
//            b = 0
//     }
//     return a+b+c;
// }
// console.log( addtwo(5,5));


// this above is wrong --what is wrong in the code is that i don't have to write if condition on the a & b b/c if we type one value then it is taking this one value as value of a , similarly if we type two value then it is taking these two values as a & b , so it is adviced that only apply if condition on the c. if you write condition on a & b then nothing happen b/c the value is present inside the function while we call the function.


// this below is used after 2015, in this we directly assign default parameter in the function itself, if value of b & c is not present then choose this defacult value, which is 0 & 0.


// function addone (a,b=0,c=0){
//     return a+b+c;
// }

// console.log(addone(4,5));

// rest parameters ---***

// if we want to store all the remaining value in a array then we use this parameter 
// ## default & rest both  are applicable on function.

// function variable (a,b,c){
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     console.log(`value of c is ${c}`);
// }
// variable(1,2,3,4,5,6,7,8,9)

// here we can get only top three values if we want to store all the value in the c,  the values which start from 3 then we use rest parameter we simply add ... three dots before the c.
// ${} this is called string templete, and ` this is called backtick.###


// function variable (a,b, ...c){
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     console.log(`value of c is ${c}`);
// }
// variable(1,2,3,4,5,6,7,8,9)

//  this value in the c is received in normal format b/c we use string templete if don't use it then it's default type is array it pack all the values inside an array.below is the demostration.

// function variable (a,b, ...c){
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     console.log(`value of c is`, c );
// }
// variable(1,2,3,4,5,6,7,8,9)

// now except 1,2 all the value is going inside an array & print it.


