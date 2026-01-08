// Block 1: Variables & logic

// Task 1: Basic types
// Create a const variable for name (string).
const name = "Emily";
// Create a let variable for age (number).
let age = 24;
// Create a const variable for isStudent (boolean).
const isStudent = true;
// Log all three values.
console.log(name, age, isStudent);
// Change the value of age and log it again.
age++;
console.log(age)

// Task 2: Logic ranges
// Create a variable score.
const score = undefined;
// Write an if/else statement:
// If score is 50 or more → log "Pass".
if (score >= 50) {
    console.log("Pass");
    // Otherwise → log “Fail”.
} else {
    console.log("Fail");
}
// Add a second if statement:
// If score is between 70 and 100 → log “Good score”.
// Hint: Python allows 70 < score < 100. JavaScript does not. You must use &&.

// Task 3: Strict equality
// Create a variable role = 1 (number).
const role = 1;
// Write an if statement:
// If role === "1" (string) → log “String One”.
if (role === "1") {
    console.log("String One")};
// If role === 1 (number) → log "Number One".
if (role === 1) {
    console.log("Number One")};
// Observation: Notice how === prevents the types from matching.

// Task 4: The ternary operator
// Turn the code below into a one-line ternary statement:
// const status = "online";
// if (status === "online") {
//   console.log("Green dot");
// } else {
//   console.log("Grey dot");
// }
// const status = age >= 18 ? "Adult" : "Minor"
const status = "online" === "online" ? console.log("Green dot") : console.log("Grey dot");

// Task 5: Switch statements
// Write a switch statement that checks a variable day (number 1-7).
const day = 5;
// Case 1: Log “Monday”.
// Case 5: Log “Friday”.
// Default: Log “Weekend”.
// Warning: Don't forget the break; keyword!
switch (day) {
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    default: console.log("The weekend!");
    break;
}