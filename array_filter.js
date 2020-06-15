//Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let highScores = scores.filter(score => score >= 100);

console.log(highScores.length);