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

import type { Product } from "./types";

const inventory: Product[] = [
  { id: 1, name: "Laptop", price: 999.0, category: "Electronics", stock: 5 },
  { id: 2, name: "T-Shirt", price: 15.0, category: "Clothing", stock: 20 },
  { id: 3, name: "Headphones", price: 50.0, category: "Electronics", stock: 0 },
  { id: 4, name: "Apple", price: 0.5, category: "Food", stock: 100 },
  { id: 5, name: "HDMI Cable", price: 10.0, category: "Electronics", stock: 0 },
];
// Using filter
const availableProducts = inventory.filter((item) => item.stock > 0);
console.log(availableProducts);

// Using map
const displayStrings = inventory.map(
  (item) => `[${item.category}] ${item.name} - $${item.price}`
);
console.log(displayStrings);

// Using reduce
const totalInventoryValue = inventory.reduce(
  (acc, item) => acc + item.stock * item.price,
  0
);
console.log(totalInventoryValue);
