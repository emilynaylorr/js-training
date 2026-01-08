// In types.ts:
// Define an interface Product with:
// id (number)
// name (string)
// price (number)
// category (string) - Extension: Investigate using a Union Type 'Electronics' | 'Clothing' | 'Food'
// stock (number)
// Export the interface so it can be used elsewhere.
import type { Product } from "./types";
// const product : Product =

// In index.ts:
// Import Product from ./types.
// Create a const array called inventory type-checked as an array of Product items.
// Populate it with these items.
//   { id: 1, name: "Laptop", price: 999.00, category: "Electronics", stock: 5 }
//   { id: 2, name: "T-Shirt", price: 15.00, category: "Clothing", stock: 20 }
//   { id: 3, name: "Headphones", price: 50.00, category: "Electronics", stock: 0 }
//   { id: 4, name: "Apple", price: 0.50, category: "Food", stock: 100 }
//   { id: 5, name: "HDMI Cable", price: 10.00, category: "Electronics", stock: 0 }
// Use .filter() to create a new array availableProducts that only contains items where stock > 0.
// Log the result. Check IDs 3 and 5 are gone.
