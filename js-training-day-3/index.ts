const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Task 1: Serial execution
// Create two async functions:
// taskOne(): Log “One starting…”, await sleep(2000), log “One done”.
async function taskOne() {
  console.log("One starting...");
  await sleep(2000);
  console.log("One done");
}
// taskTwo(): Log “Two starting...”, await sleep(2000), log “Two done”.
async function taskTwo() {
  console.log("Two starting...");
  await sleep(2000);
  console.log("Two done");
}
// Create runSerial():
async function runSerial() {
  // Await taskOne().
  await taskOne();
  // Await taskTwo().
  await taskTwo();
}
// Goal: Observe that it takes 4 seconds total.
// runSerial();

// Task 2: Fire and forget (non-blocking)
// Create runFast():
function runFast() {
  // Call taskOne() without the await keyword.
  taskOne();
  // Log “Finished!”.
  console.log("Finished!");
}
// Observe: “One starting…” and then “Finished!” appear instantly. “One done” appears 2 seconds later.
// runFast();
// Why? You started the task but didn't wait for it. The main thread moved on.

// Task 3: Parallel execution (the fast way)
// Create runParallel():
async function runParallel() {
  console.log("Task 3");
  // Use Promise.all([ taskOne(), taskTwo() ]).
  await Promise.all([taskOne(), taskTwo()]);
}
// Observe: Both start together. Total time is 2 seconds, not 4.
// runParallel();

// Now apply the same async/await syntax to a real network request.
import axios from "axios";
// Task 4: The simple fetch
// Create a User interface (just id and name).
interface User {
  id: number;
  name: string;
}
// Create fetchUser():
async function fetchUser(): Promise<void> {
  // Use axios.get(“https://jsonplaceholder.typicode.com/users/1”).
  // Constraint: You must use try/catch to handle errors.
  try {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // Log the user's name.
    const userName = request.data.name;
    console.log(userName);
    const userProfile: User = {
      id: request.data.id,
      name: request.data.name,
    };
    console.log(userProfile);
  } catch (error) {
    console.log("error");
  }
}
fetchUser();

// Task 6: The “pending” trap
// In fetchUser, remove the await keyword from the axios call.
// Log the result immediately.
// Observe: You see Promise { <pending> }. This is the pending promise, not the data.
