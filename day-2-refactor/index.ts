import type { User } from "./types";

import { data } from "./data";

// To tes the avg function below
// const data: User[] = [];

// Task 1
function processData(data: User[]): string[] {
  const isActiveArray = data.filter((item) => item.isActive === true);
  const finalArray = isActiveArray.map((item) => `${item.name} (${item.age})`);
  return finalArray;
}
console.log(processData(data));

// Part 2: New features
// Create a new function getAnalytics(users: User[])
function getAnalytics(data: User[]) {
  // that returns an object containing:
  // totalActive: The count of active users.
  const totalActive = data.filter((item) => item.isActive === true).length;
  // averageAge: The average age of all users (active and inactive).
  const totalUsers = data.length;
  let averageAge: number | string;
  if (totalUsers !== 0) {
    averageAge = data.reduce((acc, item) => acc + item.age, 0) / totalUsers;
  } else {
    averageAge = "Insufficient users to calculate average age";
  }
  return { totalActive, averageAge };
}

console.log(getAnalytics(data));
