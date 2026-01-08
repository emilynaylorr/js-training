// Create an array: const scores = [10, 20, 30, 40];
const scores = [10, 20, 30, 40];

// High scores (for...of):
// Use a for (const score of scores) loop.
for (const score of scores) {
  // If the score is greater than 20, log “High score: [score]”.
  if (score > 20) {
    console.log(`High score: ${score}`);
  }
}
// Power-up (forEach):
// Use scores.forEach((score) => { ... }).
// Log the score multiplied by 2.
scores.forEach((score) => {
  console.log(score * 2);
});
// Bonus round (while):
// Start with a variable total = 0.
let total = 0;
// Use a while loop that runs as long as total < 100.
while (total < 100) {
  // Add 20 to total in each loop and log the new total.
  total += 20;
  console.log(total);
}

// Task 7: Syntax evolution
// Traditional function:
// Create a function called multiply using the function keyword.
function multiply(a, b) {
  // It takes two numbers and returns the product.
  const answer = a * b;
  return answer;
}
// Log the result of multiply(3, 4).
console.log(multiply(3, 4));

// Arrow function:
// Create a function called greet.
// It takes one parameter name and logs “Hello [name]”.
console.log("Arrow function");
// Use const greet = (name) => { ... } syntax.
const greet = (name) => {
  console.log(`Hello ${name}`);
};

greet("Em");

// Shorthand arrow:
console.log("Shorthand arrow");
// Create a function called square.
const square = (number) => number * number;
console.log(square(4));
// It takes one number and returns the square.
// Rule: No curly braces {} and no return keyword allowed.

// Create an object: const player = { name: “Alice”, score: 100, level: 5 };
const player1 = { name: "Emily", age: 24, score: 100, level: 5 };
// Dot vs bracket:
// Log player.name.
console.log(player1.name);
// Log player["score"].
console.log(player1["score"]);

// Destructuring:
// Extract name and level into variables using one line:
// const { ... } = player;
const { name, score } = player1;
// Log the new variables.
console.log(name, score);

// Spread operator:
const player2 = { score: 200 };
// Create a new object updatedPlayer.
// Copy all properties from player using ..., but overwrite score to 200.
const updatedPlayer = { ...player1, ...player2 };
// Log updatedPlayer.
console.log(updatedPlayer);
