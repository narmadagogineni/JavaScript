
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
