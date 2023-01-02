// chapter 39 ---**
// computed property ---**

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myValue1";
// const value2 = "myValue2";

// we have to create a object which take key value from key1( key value should be objkey1) & value of this key is take from value1 ( myValue1 should be the value of this key)-- how do you do ?

// let object = {
//     key1 : value1,
//     key2 : value2
// }
// console.log(object);

// this above will  didn't print objkey1 as a key but it will print myValue1 as a value,b/c whatever we write in  value either it is a  string or number but if we write a variable then js engine print the variable value.

// so  method 1  is --

// let obj ={

// }

//  obj.key1 = value1;
//  in the above when we use .key1 it add key1 as a key but we want key1 variable value inside this so we use [key1] without "".this will call key1 value & paste it inside the object.

// obj[key1] = value1;
// console.log(obj);

// method 2----
// but here we use computed property which is using simply [] inside the object and used on the key.

// let obj1 = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj1);

// important---

// here important point is that the value of value1 is computed automatically & pasted on the location of the value
// but this is not happening with key . to compute ( take value from variable ) we have to use these two methods .


//  chapter 40 -----*****
// spread operator ----[...]***
// spread operator in array ( revision)---

// let array1 = ["item1","item2"];
// let array2 = ["item3","item4"];

// let newArray = [...array1, ...array2];
// console.log(newArray);

// if we write any string it will spread that string like this---

// let anotherArray = [..."abc"];

// it will open this string as an individual string.
// it will not spread any integer value --

// let integerArray = [... 494949];

// console.log(integerArray);
// console.log(anotherArray);



// spread operator in objects ------**

// let obj = {
//     item1 : "value1",
//     item2 : "value2"
// }
// let obj1 ={
//     item1 : "valueUnique",
//     item3 : "value3",
//     item4 : "value4"
// }

// console.log({...obj});
// or 
// let newObject = {...obj, ...obj1};
// or
// let newObject = {...obj, ...obj1, key1 : "anothervalue"};

// console.log(newObject);

// we take this same example to explain a very import. concept which is same key is not present in any object and if present then the last one will be effictive.

// similarly this concept is also aplicable on spread various obj into one variable like ---


// const obj = {
//     item1 : "value1",
//     item2 : "value2"
// }
// const obj1 ={
//     item1 : "valueUnique",
//     item3 : "value3",
//     item4 : "value4"
// }

// here also item1 has two values in both objects so it pick the last one which is valueUnique

// let newObject = {...obj, ...obj1};
// if we change the order of obj & obj1 then it is also change the priority of print the item1 value---

// let newObject = { ...obj1, ...obj};

// here it pick value1 b/c it is in the last in the newObject.
// console.log(newObject);

// we can spread a string in object -- when we do it it create index value as a key and the string values as a value.

// let newObject1 = {..."abc"};
// console.log(newObject1);

// it create key :value pair and key value is index number and vlaue is string(abc)


// this will also happens with array -----
// if we apply spread operator before an  array inside an object  then it is also spread with key & value pair & given index number as a key.

// let newObject1 = {...["item1","item2"]};
// console.log(newObject1);


// # important --

// let newObject1 = {...["item1","item2"], ...["item3","item4"]};
// console.log(newObject1);
// in this it is only consider the one & spread it 
// same concept is giving same result with string - if we add multiple string with multiple spread operator then it is also consider last spread operator.

// we may be used  this in   problem solving ---
// if we want to find  any specific value index number then we can use this

// let newObject1 = {..."abcdefghijklmnopqrstuvwxyz"};
// console.log(newObject1);
// console.log(newObject1[0]);


// chapter 41---
// object destructuring---**
// const person = {
//     name: "amit",
//     age: 28,
//     hobbies: "movies",
//     life: "fire"
// }

// if we want to print the value of the key then we use this method 
// const person1 = person.name
// const age = person.age
// console.log(person1, age);



// shortcut of this ---which is also destructuring ------

// we hava to decide what  we want to use const or let --
// const {name , age} = person
// console.log(name ,age);
// the other two key & value is not affect from this the will not print .
// if we want to store the values of the keys in different variable then we use this----
// const {name:var1 , age:var2} = person 
// console.log(var1 , var2);

// the other two key & value is not affect from this they will not print.

// if we want to print these two reamining key & values then --

// const {name:var1 , age:var2 , ...othersValue}  = person 
// console.log(var1 , var2, othersValue);

// the othersValue is a variable inwhich we can store the rest of the value & it  will give an object.

// chapter 42 -------****
// object inside array -------**

// let persons = [
//     {personId:1, firstPerson:"amit",gender: "male"},
//     {personId:2, secondPerson:"neha",gender:"female"},
//     {personId:3, thirdPerson:"boby-boy",gender:"transgender"}
// ]

// console.log(person);

// for (let person of persons){
//     console.log(person);
// }

// new topic ---***
// destructuring of  object in array --

// first revise it -- destructuring of array ---**

// let item = ["value1","value2","value3","value4"];

// const [ ] = item    // syntex 
// we can choose const & let which choosing --
// const [ item1 , item2 ] = item;
// console.log(item1);

// we can put value 4 into item2 also ---

// const [ item1 , , , item2 ] = item;
// console.log(item2);

// that's how we do destrucuting in array .

// now destruturing of object ---** (revision)---

// const person = {
//     coutry : "india",
//     age :44,
//     hobbies: "movies"
// }

// const {} = person;  // syntex

// const { coutry , age} = person
// console.log(coutry , age );

// that's how we do destructring on objects---


//  now destructuring of  object in array --**
// it's mix of array & objects ---

// let persons = [
//     {personId:1, firstPerson:"amit",gender: "male"},
//     {personId:2, secondPerson:"neha",gender:"female"},
//     {personId:3, thirdPerson:"boby-boy",gender:"transgender"}
// ]

// const [value1 , value2, value3 ] = persons 
// console.log(value1);

// if we want to access id then we use object destructuring --- 

// const [{personId}, ]  = persons 
// console.log(personId);

// if we want to access id -1  &  gender --transgender then ---
// const [{personId}, , {gender} ]  = persons 
// console.log(personId , gender);

//  we can store id & gender into new variable also ---in the above example --

// const [{personId:newvariable}, , {gender:genderNewVariable} ]  = persons 

// console.log(personId , gender);      // now it is undefine 

// console.log(newvariable, genderNewVariable);












