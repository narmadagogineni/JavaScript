
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
