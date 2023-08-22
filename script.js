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