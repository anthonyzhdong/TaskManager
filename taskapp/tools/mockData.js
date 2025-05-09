// In tools/mockData.js - Updated with realistic financial transactions
const transactions = [
  {
    id: 1,
    title: "Monthly Apartment Rent",
    amount: 1200.00,
    slug: "monthly-apartment-rent",
    categoryId: 1, // Rent
    transactionType: 2, // Expense
    description: "Monthly rent payment for apartment",
    date: new Date("2025-05-01").toISOString()
  },
  {
    id: 2,
    title: "Grocery Shopping - Whole Foods",
    amount: 87.32,
    slug: "grocery-shopping-whole-foods",
    categoryId: 2, // Food
    transactionType: 2, // Expense
    description: "Weekly grocery shopping",
    date: new Date("2025-05-03").toISOString()
  },
  {
    id: 3,
    title: "Internet Bill - May",
    amount: 65.99,
    slug: "internet-bill-may",
    categoryId: 4, // Utilities
    transactionType: 2, // Expense
    description: "Monthly internet service payment",
    date: new Date("2025-05-05").toISOString()
  },
  {
    id: 4,
    title: "Biweekly Salary Deposit",
    amount: 2150.50,
    slug: "biweekly-salary-deposit",
    categoryId: 5, // Income
    transactionType: 1, // Income
    description: "Direct deposit from employer",
    date: new Date("2025-05-07").toISOString()
  },
  {
    id: 5,
    title: "Dinner at Olive Garden",
    amount: 42.75,
    slug: "dinner-at-olive-garden",
    categoryId: 2, // Food
    transactionType: 2, // Expense
    description: "Dinner with friends",
    date: new Date("2025-05-08").toISOString()
  },
  {
    id: 6,
    title: "New Shoes - Nike",
    amount: 89.99,
    slug: "new-shoes-nike",
    categoryId: 3, // Shopping
    transactionType: 2, // Expense
    description: "Running shoes",
    date: new Date("2025-05-08").toISOString()
  },
  {
    id: 7,
    title: "Mobile Phone Bill",
    amount: 75.00,
    slug: "mobile-phone-bill",
    categoryId: 4, // Utilities
    transactionType: 2, // Expense
    description: "Monthly phone service",
    date: new Date("2025-05-09").toISOString()
  },
  {
    id: 8,
    title: "Freelance Project Payment",
    amount: 350.00,
    slug: "freelance-project-payment",
    categoryId: 5, // Income
    transactionType: 1, // Income
    description: "Web design project for client",
    date: new Date("2025-05-10").toISOString()
  },
  {
    id: 9,
    title: "Electric Bill - May",
    amount: 78.45,
    slug: "electric-bill-may",
    categoryId: 4, // Utilities
    transactionType: 2, // Expense
    description: "Monthly electricity bill",
    date: new Date("2025-05-12").toISOString()
  },
  {
    id: 10,
    title: "Online Course Subscription",
    amount: 19.99,
    slug: "online-course-subscription",
    categoryId: 6, // Education
    transactionType: 2, // Expense
    description: "Monthly subscription for coding courses",
    date: new Date("2025-05-13").toISOString()
  }
];

// Updated transaction types with better descriptions
const transactionTypes = [
  { id: 1, name: "Income" },
  { id: 2, name: "Expense" }
];

// Expanded categories relevant to personal finance
const categories = [
  { id: 1, name: "Rent/Mortgage" },
  { id: 2, name: "Food & Dining" },
  { id: 3, name: "Shopping" },
  { id: 4, name: "Utilities" },
  { id: 5, name: "Income" },
  { id: 6, name: "Education" },
  { id: 7, name: "Entertainment" },
  { id: 8, name: "Transportation" },
  { id: 9, name: "Health & Fitness" },
  { id: 10, name: "Travel" }
];

// Template for a new transaction
const newTransaction = {
  id: null,
  title: "",
  amount: "",
  transactionType: null,
  categoryId: null,
  description: "",
  date: new Date().toISOString()
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newTransaction,
  transactions,
  categories,
  transactionTypes
};