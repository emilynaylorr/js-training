// Independent task
// Example input
const user = {
  email: "test@company.com",
  password: "securePassword123",
  age: 25,
  role: "admin",
};

// create the funct
function validateUser(user) {
  // Pull out the data we need
  const { email, password, age, role } = user;
  // Email: Must contain the "@" symbol. (Check docs for .includes()).
  let email_is_valid;
  if (email.includes("@")) {
    email_is_valid = true;
  } else {
    email_is_valid = false;
  }
  // Password: Must be strictly longer than 8 characters.
  let password_is_valid;
  if (password.length > 8) {
    password_is_valid = true;
  } else {
    password_is_valid = false;
  }
  // Age: Must be a number and must be 18 or older.
  let age_is_valid;
  if (age > 18) {
    age_is_valid = true;
  } else {
    age_is_valid = false;
  }
  // Role: Must be either “admin” or “user”.
  let role_is_valid;
  if (role === "admin" || "user") {
    role_is_valid = true;
  } else {
    age_is_valid = false;
  }
  // True if all data is valid
  if (
    email_is_valid &&
    password_is_valid &&
    age_is_valid &&
    role_is_valid === true
  ) {
    console.log("true");
  }
  // Else, fail
  else {
    console.log("false");
  }
}
// Call the function with user data
validateUser(user);
