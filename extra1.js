/*string
number
booleans
null
undefine
bigint
symbol



*/

// if we want to add one string & one number then js is converting number into string 

// let number =3;
// let string = "amit";
// let result  = number + string
// console.log(result);
// console.log(typeof result);

// let number =4;
// number = number + "";
// console.log(typeof number);

// number = String(number);
// console.log(typeof number);


// let age = 54;
// age = String(age);

// console.log(typeof age);

// let string = "amit";
// string = Number(string);
// console.log(typeof string);

// string = + string;
// console.log(typeof string);

// string concatenation ----

// let string1 ="amit";
// let string2 = "Earth";
// console.log(string1+ " " +  string2);


// let string1 = "10";
// let string2 = "20";


// console.log(+string1 + +string2);

// console.log(Number.MAX_SAFE_INTEGER);

// let number = BigInt(45);
// let number11 = 45n;
// let number22 = 55;

// console.log(number + number11);


// let num = 4;
// let num1 = "4";
// console.log(num > num1);

// falsy value---
// false
// undefine
// 0
// null
// ""


// let age = 18;
// let drink;
// if (age >=18){
//    console.log( drink = "cofee");
// }else(console.log(drink = "milk"));

// or better way -----

// let age = 14;
// let drink;
// if (age >=18){ drink = "cofee";
// }else(drink = "milk");
// console.log(drink);

// let age = 18;
// let drink = age>=18 ? "coffee" : "milk";
// console.log(drink);



// console.log(!(5 === 5));


// let age =25;
// let name = "Amit";

// if (name[0]="A" && age >=18 && age <=100){console.log("yes you are amit")}else(console.log("No you are not amit"))

// let age = 11;
// let name = "mit";

// if (name[0] === "A" || age >= 18) { console.log("yes you are 3 amit") } else (console.log("No you are not amit"))



// let name2 = "mit";
// let age3 = 8;
// if (name2[0]="A" || age3 >= 18 ){console.log("you are 4 eligible");}
// else{console.log("you are not eligible");}


// nested if -else---

// let nationality = "indian";
// let age = +prompt("Enter your age");
// if (nationality === "indian" && age > 18) {
//     console.log("you can vote");
// } else {
//     if (nationality === "indian" && age < 18) {
//         console.log("you can't vote");
//     }else{console.log("apply for voter  i'd card")}
// } 

/* if -else - 

if (){

}else{}

nested if --

if(){

}else{ if(){

}else{}
}

in short ---
if -else--
if (){}else{}

nested if -else ---
if(){}else{if(){}else{}}
*/


// if else - if ----

// let temperature = +prompt("Enter you city temperature");
// if(temperature <=10){console.log("to cold 10 ");}
// else if(temperature<=20){console.log("less cold 20 ");}
// else if (temperature<=30){console.log("more cold 30");}
// else if (temperature<=40){console.log("not cold anymore 40")}
// else{console.log("beginning of summer");}


// switch function ----***
// let temp = +prompt("Enter your city temp ( enter only in 10 multiplecation)"
// )
// switch (temp){
//     case temp =10 : console.log("10");
//     break;
//     case temp =20 : console.log("20");
//     break;
//     case temp =30 : console.log("30");
//     break;
//     default:
//          console.log("it is summer");
// }


// while loop ---***
// adding top 10 natural number without using while loop ---

// let total = 0;
// total = total +1;
// total = total + 2;
// total = total + 3;
// total = total + 4;
// total = total + 5;
// total = total + 6;
// total = total + 7;
// total = total + 8;
// total = total + 9;
// total = total + 10;
// console.log(total);


// let total =0;
// let i=0;
// while(i<=10){
//     total =total +i;
//     i++;
// }
// console.log(total);

// let i =0;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// let total =0;
//  for (let i = 0; i<=10; i++ ){
//     total = total +i
//  }
//  console.log(total);


// for (var i=1; i<=10; i++){
//     console.log(i);
// }
// console.log(i);

// let i =0;
// for (; i<=20;i++){
//     console.log(i);
// }
// console.log(i);

// let n = +prompt("Enter a number");

// document.write([n*(n+1)]/2);

// let total =0;
// let i =0;
// while (i<=10){
//     total = total +i;
//     i++;
// }
// console.log(total);

// let total =0;
// let i =0;
// for(; i <= 10; total = total +i , i++)
// console.log(total);

// let total = 0;
// let i1 = 0;
// for (; i1 <= 10; total = total + i1, i1++ );
// console.log(total);

// let i= 11;
// do{
//     console.log(i);
//     i++;
// }
// while (i<=12);


// let fruit = ["apple","kivi","banana","mango"];
// console.log(fruit);
// console.log(fruit[1]);
// fruit[0]= "grapes";
// console.log(fruit);

// console.log(typeof fruit);
// console.log(Array.isArray(fruit));

// let fruit = ["apple","kivi","banana","mango"];
// console.log(fruit);
// fruit.push("lichi");
// console.log(fruit);

// fruit.pop();
// console.log(fruit);
// console.log(fruit.pop());



// let fruit1 =["apple" , "mango", "banana", "lichi"];
// console.log(fruit1);
// let removeElement =  fruit1.pop();
// console.log(fruit1);
// console.log(removeElement);

// the pop is removing  the last value of array & it store it within itself & we can print this value ---

// console.log(fruit1.pop());


// let fruit1 =["apple" , "mango", "banana"];
// console.log(fruit1);
// fruit1.pop();
// console.log(fruit1);

// the pop is removing  the last value of array & it store it within itself & we can print this value ---

// console.log(fruit1.pop());

// let fruit1 =["apple" , "mango", "banana"];
// console.log(fruit1);
// fruit1.unshift("lichi");
// console.log(fruit1);


// let fruit1 =["apple" , "mango", "banana"];
// console.log(fruit1);
// let removeElement = fruit1.shift();
// console.log(fruit1);
// console.log(removeElement);


// example-1
// let num1 = 5;
// let num2 = num1;
// num1++
// console.log(num1);
// console.log(num2);

// here i can understant num1 =6 & num2 = 5 



// let array2 = array1;
// array1.push("item3");
// console.log(array1);
// console.log(array2);
// here i push "item3" only in array1 but it is showing in array2 also why ?

// let array1= ["item1", "item2","item3"];
// let array2 = array1.slice(1);
// console.log("array1", array1);
// console.log("array2",array2);


// let array1 = ["item1","item2","item3"];
// let array2 = [].concat(array1);

// console.log("array1", array1);
// console.log("array2",array2);


// array1 = ["item1","item2","item3"];
// let array2 = [...array1];

// console.log(array1 === array2);
// console.log("array1", array1);
// console.log("array2",array2);


// let array1 = ["item1","item2",];
// let array2 = ["item3", "item4"];

// console.log(array1 === array2);
// array3 = array1.slice(0)[].concat(array2);


// console.log("array1", array1);
// console.log("array2",array2);

// how to add two arrays --- 
// method 1 --
// let array2 = array1.slice(0).concat("item3","item4");

// method ---2
// let array2 = [...array1].concat("item3","item4");

// method -3 
// let array2 = [].concat(array1,"item3","item4");
// method --4
// let array2 = [...array1 ,"item3","item4"];

// console.log("array1", array1);
// console.log("array2",array2);

// how to add two different arrays ---

// let array1 = ["item1","item2"];
// let array2 = ["item3","item4"];

// let addingArray = [...array1, ...array2];
// console.log(addingArray);
 
// let fruit = ["apple","banana","Mango","Graps"];
// console.log(fruit.length);

// console.log(fruit[fruit.length-1]);

// for (i=0;i<fruit.length;i++){
//     console.log(fruit[i].toUpperCase());
//     console.log(fruit[i].toLowerCase());
// }

// if we want to store all the uppercase array element into new variable then we use this ----

// let fruit1 =[];
// for (i=0;i<fruit.length;i++){
//     fruit1.unshift(fruit[i].toUpperCase())
// }
// console.log(fruit1);


// const pi =55;

// console.log(pi);


