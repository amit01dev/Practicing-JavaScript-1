// chapter 24---
// break & continue ----

// for (let i = 0; i<=10; i++){
//     if (i===5){
//         break;
//     }
//     console.log(i);
// }

// break will exit the loop and go to next line 
// continue will only skip that one execution and then it go to the loop first line.

// continue ---

// for (let i = 0; i<=10; i++){
//     if (i===5){
//         continue;
//     }
//     console.log(i);
// }

// here when 5 occur it doesn't excecute console.log (i) and go to the loop and next 6 is printed.in other worlds it skip 5.


// do while loop ------------

//  this is the normal while loop---

// let i = 0;
// while (i<=12){
//     console.log(i);
//     i++;
// }

// this is do while loop -- 
// in this do while loop first do is executed and then while condition is checked.


// let i= 13;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=12)

// it print 13 one time b/c while condition is checked after the do operation happend.


// chapter 26 -------------

// two major data types are -- 1. primitive data type & 2. reference data type
// in primitive data type --- string ,number , booleans , null , undefine etc.
// in reference data type -- arrays 


// arrays ----

// it is a reference data type
// it is ordered collection of items -means everthing in array is in order we can access with the indexing. 

// let fruit = ['apple', "mango", "banana"];

// we can add anything in array -- numbers, string,  null, undefined, boolean etc.   

// let mixing = [ 3,4,5.5,"apple", null, undefined, Boolean ];
// console.log(mixing);



// console.log(fruit);

// we can access any index in an array 

// console.log(fruit[0]);

// array is mutable - means we can replace anything in the array.

  // fruit[1]= "kivi"
  // console.log(fruit);

// how to find type of array --

// console.log(typeof fruit);

// it give object as data type which is true but it is not specific b/c object is also data type of object literal ( will study in further chapter)
// so how we can assure that this is array we use this--

// console.log(Array.isArray(fruit));
// this will tell true or false if it is true then it is array


// chapter 27 -----
// methods of array ---

// push & pop
// shif & unshift

// push is used for adding an item at last in an array.
// pop is used for removing an item from last in an array.here pop can store the last item it has removed within itself. 

// push 

// let fruit = ["apple", "mango", "banana"];
// console.log(fruit);
// fruit.push("orange");
// fruit.push ("kivi");
// console.log(fruit);

// pop 

// let fruit1 =["apple" , "mango", "banana"];
// console.log(fruit1);
// fruit1.pop();
// console.log(fruit1);

// the pop is removing  the last value of array & it store it within itself & we can print this value ---

// console.log(fruit1.pop());

// unshift & shift

// unshift ---- 
// it add value in the array at the first place.

// let fruit2 = ["apple", "banana", "mango"];
// console.log(fruit2);

// fruit2.unshift("kivi");
// console.log(fruit2);



// shift -------
// it remove the first value of the array ---------

// fruit2.shift();
// let removeFruit = fruit2.shift();
// console.log(removeFruit);

// in all the above which is the fast --- push is the fast b/c it go directly to the end of the array and past it.
// in pop it has to read first all the element in the array then it dicide which  is last  & then it remove it

// difference b/t primitive data type & reference data type ---
// the difference is elobrate in details in the notebook.

// primitive data type ---

// let num1 = 5;
// let num2 = num1;
// console.log(num1);
// console.log(num2);

// num1++
// console.log(num1);
// console.log(num2);

// in primitive we incrementing the num1 value and it reflect in  console.

// reference data type ---

// let array1 = ["item1","item2"]
// let array2 = array1;

// if we want to check that in array1 & array2 having the same value then we can simply do this--- 
// console.log( array1 === array2);

// console.log(array1);
// console.log(array2);

// array1.push("item3");

// console.log(array1);
// console.log(array2);

// from our understanding code is runing top to bottom & it compiled it in that way & in this way array 1 having the incremented value but array2 don't have the incremented value -- then why it showing.

// b/c array is stored in heep instead of stack and in heep they have a address.
// a indivisual  pointer is saved in stack for both arrays & having the address of the array in heep.

// when we change in array it changes in heep but the address is not changed for this action so when we  print it then the pointer in the stack having the same address ( the address before the changes in array) & it print the array (changed array)
// in simple words two pointers pointing the same arrays.


// -----------------how to close a array----------------

let array1 = ["item1", "item2"];

// method--1---
// let array2 = array1.slice(0);


// console.log("array1", array1);
// console.log("array2", array2);

// method ---2---
// let array2 =[].concat(array1);

// console.log("array1", array1);
// console.log("array2", array2);

// method ---3----
// with the help of spread operator (... -- is spread operator) --

// let array2 = [...array1];

// console.log("array1", array1);
// console.log("array2", array2);

// console.log(array1 === array2);   // tells that array 1&2 are same or not.
                                  // here not same means both the array save differently in heep.


// how to concate two arrays ------------------********
// method--1--
// let array2 = array1.slice(0).concat(["item3","item4"]);

// method ---2---
// let array2 = [].concat(array1, "item1", "item2");

// method ---3----(with the help of spread operator)
// let array2 = [...array1, "item3", "item4"];

// how to add two different array & create a new array -------******

let array3 = ["numer1","number2"];
let array4 = ["number3", "number4"];

let brandNewArray = [...array3, ...array4];
console.log(brandNewArray);








