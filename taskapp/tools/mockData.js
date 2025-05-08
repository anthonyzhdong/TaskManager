const tasks = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    amount: 100.00,
    slug: "react-auth0-authentication-security",
    categoryId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 2,
    title: "React: The Big Picture",
    amount: 100.00,
    slug: "react-big-picture",
    categoryId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    amount: 100.00,
    slug: "react-creating-reusable-components",
    categoryId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    amount: 100.00,
    slug: "javascript-development-environment",
    categoryId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    amount: 100.00,
    slug: "react-redux-react-router-es6",
    categoryId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    amount: 100.00,
    slug: "react-flux-building-applications",
    categoryId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    amount: 100.00,
    slug: "writing-clean-code-humans",
    categoryId: 1,
    description: "Software Practices",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    amount: 100.00,
    slug: "architecting-applications-dotnet",
    categoryId: 1,
    description: "Software Architecture",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    amount: 100.00,
    slug: "career-reboot-for-developer-mind",
    categoryId: 2,
    description: "Career",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    amount: 100.00,
    slug: "web-components-shadow-dom",
    categoryId: 3,
    description: "HTML5",
    date: new Date("2025-01-15").toISOString()
  }
];

const categories = [
  { id: 1, name: "Rent" },
  { id: 2, name: "Food" },
  { id: 3, name: "Shopping" }
];

const newTask = {
  id: null,
  title: "",
  //amount: null,
  categoryId: null,
  description: "",
  date: new Date().toISOString()
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newTask,
  tasks,
  categories
};
