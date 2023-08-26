
//LOOPS IN ARRAYS
let movies = [
    ["mirchi", "mr perfect", "darling"],
    ["athadu", "nani", "dhookudu", "businessman"]
];

for (let i=0; i<movies.length; i++) {
    console.log(i, movies[i]);
    for (let j=0; j<movies[i].length; j++) {
        console.log(j, movies[i][j]);
    }
}

--------------------------------------------------------------------------------------

//backwards
let movies = [
    ["mirchi", "mr perfect", "darling"],
    ["athadu", "nani", "dhookudu", "businessman"]
];

for (let i=movies.length-1; i>=0; i--) {
    console.log(i, movies[i]);
    for (let j=movies[i].length-1; j>=0; j--) {
        console.log(j, movies[i][j]);
    }
}

-------------------------------------------------------------------------------------

let students = [["simmu", 78],["hemu", 95],["Nammu", 90]];

for (let i=0; i<students.length; i++) {
    console.log(i, students[i]);
    for (let j=0; j<students[i].length; j++) {
        console.log(j, students[i][j]);
    }
} 

---------------------------------------------------------------------------------------

//revserse
    
let students = [["simmu", 78],["hemu", 95],["Nammu", 90]];

for (let i=students.length-1; i>=0; i--) {
    console.log(i, students[i]);
    for (let j=students[i].length-1; j>=0; j--) {
        console.log(j, students[i][j]);
    }
} 
------------------------------------------------------------------------------------
//FOR OF LOOP
    //elements
let fruits = ["mango", "apple", "orange", "melon"];

for (fruit of fruits) {
    console.log(fruit)
}

--------------------------------------------------------------------------------
//characters
    for (char of "Narmadagogineni") {
    console.log(char)
}

=-----------------------------------------------------------------------------------
//SPLICE

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i=0; i<arr.length; i++) {
    if(num == arr[i]) {
        arr.splice(i, 1);
    }
}

console.log(arr);

----------------------------------------------------------------------------------------------
    //FUNCTIONS 

function Hello() {
    console.log("Hello");
}

function printName() {
    console.log("Nammu");
    console.log("Hemu");
}

function print1to5() {
    for (let i=1; i<=5; i++) {
        console.log(i); 
    }
}

function isAdult() {
    let age = 16;
    if (age>=18) {
        console.log("Adult");
    } else {
        console.log("not an adult");
    }
}


Hello();
printName();
print1to5();
isAdult();

--------------------------------------------------------------------------------------------------------

function poem() {
    console.log("TWINKE TWNIKLE, LITTLE STAR");
    console.log("HOW I WONDER WHAT YOU ARE!");
    console.log("UP ABOVE THE WHY SO HIGH ");
    console.log("LIKE A DIAMOND IN THE SKY");
}

poem();

function diceRoll() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

diceRoll();

------------------------------------------------------------------------------------------------------

    function printName(name) {
    console.log(name);
}

printName("Nammu");
--------------------------------------------------------------
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}

printInfo("Hemu", 23);
printInfo("Nammu");

---------------------------------------------------------
function sumOfTwoNum(a, b) {
    let sum = a+b;
    console.log(sum);
}

sumOfTwoNum(2, 4);
sumOfTwoNum(9, 3);
sumOfTwoNum(17, 83);
--------------------------------------------------------
function calcSum(a, b, c) {
    let avg = (a + b + c )/3
    console.log(avg);
}

calcSum(30,60,90);
calcSum(70,20,10);
--------------------------------------------------------
function printTable(n) {
    for (let i=1; i<=10; i++) {
        console.log(`${n}X${i}=${i*n}`);
        // console.log(i);
        }
}

printTable(5);
printTable(7);

-------------------------------------------------------
function multiTable(n) {
    for(let i=n; i<=n*10; i=i+n) {
        console.log(i);
    }
}

multiTable(8);
multiTable(17);
----------------------------------------------------
//RETURN KEYWORD

 function getSum(n) {
    let sum=0;
        for (let i=1; i<=n; i++) {
            sum = sum+i;
        }
        return sum;
}

console.log(getSum(8));
console.log(getSum(34));
------------------------------------------------------

let arr = ["hello", "hi", "bye", "bye"];

function concStr(arr) {
    let result = "";

    for (let i=0; i<arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(concStr(arr));

----------------------------------------------------------

function calSum(a, b) {
    let sum = a+b;
    console.log(sum);
}

calSum(3,6);
---------------------------------------------------


function sum2(a, b) {
    let sum = a+b;
    return sum;
}

console.log(sum2(3,7));    
------------------------------------------------

    //GLOBAL AMD FUNCTION SCOPE
    
let sum = 45;  //global scope

function add(a, b) {
    let sum = a+b;  //func scope
    console.log(sum); //prints local var
}

add(3,7);
console.log(sum);  //prints global var

-----------------------------------------------------

let sub = 7;
 
function minus(a,b) {
    // let sub = a-b;  //local
    console.log(sub); 
}

minus(8, 4);

------------------------------------------------------

//LEXICAL SCOPE 
    
 function outerFunc() {
    let x=9;
    let y=3;
    function innerFunc() {
        let a= 5;
        console.log(x);
        console.log(a);
    }
    // console.log(a);      //not accessible outside innerfunc 
    innerFunc();
}
---------------------------------------------------------------------

// BLOCK SCOPE

function str() {
    let a = "apple";
    console.log(a);  //accesible
}   // end of function scope, so the variable 'a' is no longer accessible outside this block.

str();
// console.log(a);  //not accessible

---------------------------------------------------------------------------------------

//Ex - INCLUDES GLOBAL , FUNCTION & LEXICAL SCOPEs   
    
let greet = "Hello";

function changeGreet() {
    let greet = "Namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet); //doesnt gets executed bcx we didnt call innerGreet
    }
}

console.log(greet);
changeGreet();

----------------------------------------------------------------------------------
//Ex-2

let greet = "Hello";

function changeGreet() {
    let greet = "Namaste";
    console.log(greet);
    function innerGreet() { 
        console.log(greet); 
    }
    innerGreet(); //namsste due to lexical scope
}  

console.log(greet);
changeGreet();

-------------------------------------------------------------------------------------
//FUNCTION EXPRESIONS OR NAMELESS FUNCTIONS - 
//which gives properties of variable to function

let sum = function(a,b) {
    return a + b;
}

console.log(sum(3,6));

let greet = function() {
    console.log("hello");
}

greet = function() {
    console.log("namaste");
}

greet();  
=-----------------------------------------------------------------

    //HIGHER ORDER FUNCTIONS

function multipleGreet(func, n) {
    for (let i=1; i<=n; i++) {
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

multipleGreet(greet,2);

--------------------------------------------------

 //HIGHER ORDER FUNCTION (RETURNS)

function evenOddNumTest(request) {
    if (request == "odd") {
        return function(n) {
            console.log((n%2 != 0));
        }
    } else if (request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request")
    }
}

let request = "even";    
// let request = "even";

// IN CONSOLE

//request; - prints odd
//let func = evenOddNumTest(request);- prints undefined
//func; - prints odd func 
// func(3); - prints odd
// func(50); -prints even

----------------------------------------------------------------------
//UNIQUE CHAR OF STRING
    
let str = "abccddeegghhnblbl"

function getUnique(str) {
    let newStr = "";
    for (let x=0; x<str.length; x++) {
        if(newStr.indexOf(str.charAt(x))==-1) {
            newStr = newStr+str[x];
        }          
    }
    return newStr;
}

console.log(getUnique(str));  
------------------------------------------------------
    //UNIQUE CHAR OD STRING METHOD 2

 let str ="2andos23slkslawoo21";
let newStr ="";

function getUnique(str) {
    for(i=0; i<str.length; i++) {
        let currChar = str[i];
        if(newStr.indexOf(currChar) == -1) {
            newStr = newStr + currChar;
        }
    }
    return newStr;
}

console.log(getUnique(str));
-------------------------------------------------
    
//nums greater than 5
    
let arr = [4,5,6,7,1,2,8,3,6];
let num = 5;

function getElements(arr, num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]> num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);   
---------------------------------------------------

    //LONGEST country name

let country = ["Austria", "USA", "Hindustan", "Germany"];

function longestName(country) {
    let ansIdx = 0;
    for(let i = 0; i<country.length; i++) {
        let ansLen =country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen>ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country));
------------------------------------------------------------------

    //VOWELS IN given string
    
let str ="narmadagogineni";


function vowelCount(str) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 
        ) {
            count++;
        }
    }
    console.log(count);  
}
vowelCount(str);
---------------------------------------------------------------------
//Arrow functions

const pow = (a, b) => {
    return a**b;
}

const sum = (c, d) => {
    return a+b;
}

const cube = (n) => {
    return n * n * n;
};

const hello = () => {
    console.log("Hello World!");
}

---------------------------------------------------------------

    
//implicit return in arrow functions

const mul = (a , b) => (a * b);
mul(3,5);

const sum = (a, b) => (a+b);

const pow = (a, b) => (a**b);

const cube = (n) => (n*n*n);

---------------------------------------------------------


    // SET TIMEOUT

console.log("Hi there,");

setTimeout( () => {
    console.log("My Application");
}, 4000);

console.log("welcome to...");

----------------------------------------------------
// SET INTERVAL

let id = setInterval(()=>{
    console.log("Helo world");
}, 2000);

let id2 = setInterval(() => {
    console.log("bye");
}, 2000);

// to clear  interval

clearInterval(id);
clearInterval(id2);

------------------------------------------------------------

    //THIS WITH ARROW FUNCTIONS

const student = {
    name: "Narmada",
    age: 21,
    marks: 97,
    prop: this,
    getName: function() {
        console.log(this); //global scope and functional scope and prints (student)
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parents scope - lexical scope and prints (window)
        return this.marks;
    },
};  

-------------------------------------------------------------------------------------------

    //THIS WITH ARROW FUNCTIONS

const student = {
    name: "Narmada",
    age: 21,
    marks: 97,
    prop: this,
    getName: function() {
        console.log(this); //global scope and functional scope and prints (student)
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parents scope - lexical scope and prints (window)
        return this.marks;
    },
    getInfo1: function () {
        setTimeout( function () {  
            console.log(this);       //window->setTimeout's parent is window since settimeout is inbuilt func
        }, 2000);
    },
    getInfo2:function () {
        setTimeout(() => {           
            console.log(this);       //parent(student) since settimeout's parent is function and func parent is student
        }, 2000);
    },
};  

------------------------------------------------------------------------------------------------------------------------------


    
