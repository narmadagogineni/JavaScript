
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

    
