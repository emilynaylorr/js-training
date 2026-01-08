const validateUser = (user) => {
  const { email, password, age, role } = user;

  // Email check
  if (!email.includes("@")) {
    console.log("Error: Invalid email");
    return false;
  }

  // Password check
  if (password.length <= 8) {
    console.log("Error: Password too short");
    return false;
  }

  // Age check (Type safety + Value)
  if (typeof age !== "number" || age < 18) {
    console.log("Error: Invalid age");
    return false;
  }

  // Role check
  if (role !== "admin" && role !== "user") {
    console.log("Error: Invalid role");
    return false;
  }

  return true;
};

// Test
const testUser = {
  email: "bob@mail.com",
  password: "123",
  age: 20,
  role: "user",
};
console.log(validateUser(testUser)); // Should be false
