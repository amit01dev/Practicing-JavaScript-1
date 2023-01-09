// very important topic ---
// function ---**
// function is like a servent we assign a task to the function & whenever we need that task we simplly call the function 

// case 1 --**
// syntex 
// function happyBirthday(){
//     console.log("happy birthday to you ....");
// }

// call the function & it print the task which is given to it.
// happyBirthday()


// case -2 ---***
// function sum (number1 ,number2){
//    return number1 + number2;
// }
// console.log(sum (5,5));
// // or
// const newValue = sum (5,5);
// console.log(newValue);

// case --3-***
// if we give three parameters & pass only two argument then it give NaN b/c number + undefine is --undefine.

// function sumOfThree(number1 ,number2, number3){
//     return number1 + number2 + number3
// }
// const ThreeSum = sumOfThree(5,5,);
// console.log(ThreeSum);


// case -4 ---***
// lets make some  function --**
// example1---**
// create a function who give odd or even when passing the argument to the parameters

// function isEven(number){
//     if (number % 2 === 0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// console.log(isEven(4));

// we can do true & false with the same example we dicuss above---

// function isEven1(number){
//     if (number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven1(4));

// we can use less code with the same fuctionality of the above ---
// function isEven1(number){
//     if (number % 2 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven1(4));

// we can even reduce more code of the same above  operation---

// function isEven1(number){
//      return(number % 2 === 0)
// }
// console.log(isEven1(4));

// b/c if we print 75 line then it is giving true or false statement by default
// console.log(  (58 % 2 === 0));

// example2----****

// create a function which take input as a string and giving output this string firstCharacter.

// function firstCharacter(string){
//     return string[0]
// }
// console.log(firstCharacter("Amit"));

// example 3 -----*****
// create a function who take input as an array & a target (number) and find that this target is present in the array or not if present then give the index of the this target number in the array .

// create a function 
// input - array & target(number)
// output - index of target in array 

// function target1 (array , target){
//     for (i=0; i<=target; i++){
//         if (array[i]===target){
//             return i;
//         }
//     }return -1
    
// }

//  const target2 = target1 ([4,5,6,7,8,9], 1);
//  console.log(target2);



// function expression -----*****
// what we have done above is  --- we  declare function also know as function declaration ---

// now we are understanding function expression ---
// if we pack a function inside a variable then it is called function expression & the function which is inside this variable is known as anonymous function.

// we take above  function example to convert into function expression ---
 
// // this below is function declaration ---
// function happyBirthday(){
//     console.log("happy birthday to you ....");
// }

// & this below is function expression ---
// we can use const / var / let , we can use any name as a variable.

// example 1--
// const  happyBirthday = function (){
//     console.log("happy birthday to you ....1");
// }

// happyBirthday();

// if we don't hava any paramers then we simply write the function name with() & it will will return what is inside the {}.example is above

// example 2---

// const number = function (number1 ,number2 ,number3){
//     return number1 + number2 + number3;
// }
// const newNumber = number ( 5 ,5,5);
// console.log ( newNumber);

// or

// console.log(number(5,5,5));

// if we hava any paramers then we have to write inside the console.log().example is above.


// -----------------------------------------------*****--------------------------

// difference b/t function declaration & function expression ----***
// this below is normal function declaration ---
// example-1
// function happyBirthday(){
//         console.log("happy birthday to you ....");
//     }
// happyBirthday();

// example-2
// function sum (number1 ,number2){
//        return number1 + number2;
//     }
//     console.log(sum (5,5));
//     // or
//     const newValue = sum (5,5);
//     console.log(newValue);

// example --3


// function target1 (array , target){
//     for (i=0; i<=target; i++){
//         if (array[i]===target){
//             return i;
//         }
//     }return -1
    
// }

//  const target2 = target1 ([4,5,6,7,8,9], 1);
//  console.log(target2);
    


// this below is normal function expression -----
// example-1
// const variable = function(){
//     console.log("happy birthday to you ....");
// }
// variable();

// example-2
// const newVariable =  function (number1 ,number2){
//        return number1 + number2;
//     }
//     console.log(newVariable(5,5))

// example ---3

// const newVariable = function (array , target){
//     for (i=0; i<=target; i++){
//         if (array[i]===target){
//             return i;
//         }
//     }return -1
    
// }

//  const target2 = newVariable ([4,5,6,7,8,9], 5);
//  console.log(target2);

// arrow functions ---****
// we create a variable ,   remove function word & use => after ()

// normal function ---
// example-1

// function happyBirthday(){
//         console.log("happy birthday to you ....");
//     }
// happyBirthday();

// example-2

// const newVariable =  function (number1 ,number2){
//            return number1 + number2;
//         }
//         console.log(newVariable(5,5))

// example-3

// const newVariable = function (array , target){
//         for (i=0; i<=target; i++){
//             if (array[i]===target){
//                 return i;
//             }
//         }return -1
        
//     }
    
//      const target2 = newVariable ([4,5,6,7,8,9], 5);
//      console.log(target2);
    
// arrow function----**
// example -1

// const newVariable =() => {
//         console.log("happy birthday to you ....");
//     }
// newVariable();

// example-2

// const newVariable1 =    (number1 ,number2)=>{
//            return number1 + number2;
//         }
//         console.log(newVariable1(5,5));

// example-3

// const newVariable2 =  (array , target)=>{
//         for (i=0; i<=target; i++){
//             if (array[i]===target){
//                 return i;
//             }
//         }return -1
        
//     }
    
//      const target2 = newVariable2 ([4,5,6,7,8,9], 8);
//      console.log(target2);

// ------------------******************--------------------------
// very important --- we can even reduce the code in arrow function 

// normal  arrow function ---
// example -1

// const newVariable =() => {
//         console.log("happy birthday to you ....");
//     }
// newVariable();

// example -2

// const newVariable1 =    (number1 ,number2)=>{
//            return number1 + number2;
//         }
//         console.log(newVariable1(5,5));


// shortcut of this ---**
// we can remove () if only one parameter is passed , remove {}& remove return
// if no parameter is passed like the below then we have to keep () & can  remove all other.
// this shortcut is also working the same

// // example -1


// const newVariable =() => console.log("happy birthday to you ....");
    
// newVariable();

// example -2 
// here b/c more than one parameters passed we can't remove the () but we remove {} & return

// const newVariable1 = (number1 ,number2) => number1 + number2;
//         console.log(newVariable1(4,5));


// hoisting ----***
//case -1
// in this case we print hello world before declaring & it will print(give undefine) in only when var is used.
// in others two it is not print it b/c of hoisting

// console.log(hello);
// var hello = "Hello world";
// console.log(hello);

// console.log(hello);
// let hello = "Hello world";
// console.log(hello);

// console.log(hello);
// const hello = "Hello world";
// console.log(hello);

// case -2
// in this case when we try to access the function b/f function declaration -- we can access it , generally in other progammning languague it is not accessible.

// it only happen with function declearation , in others it not accessable before it.
// it is b/c of hoisting -- we will be descussing in future.

// function declaration ---
// world()
// function world(){
//     console.log("hello world");
// }
// world()

// function expression ---
// world()
const world = function(){
    console.log("hello world");
}
world()

// arrow function --- 
// world()
// const world = () =>{
//     console.log("hello world");
// }
// world()