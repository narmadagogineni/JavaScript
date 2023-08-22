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