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

const value1 = "origin";
function chapter1 (){

    const value1 = "person1";
    console.log( value1);
    
    const chapter2 = function(){
        // const value1 = "person2";
        console.log(value1);
    }
    chapter2()
}

chapter1();

// in the above example we asign value1 value in parent function as well as child function & when we call the "value1" value in child function it is written the value which is asign in the child function if the value is not present in the child function then it check its lexical environment ( its parent environment) .
// if the value is present in  their lexical environment then it print it otherwise it is check it's parent (parent ---> parent) and it checks until it reach the origin of the code which is the global scope, if it is find the value in the golbal scope then  it print it .

// here the global scope value is origin.
9