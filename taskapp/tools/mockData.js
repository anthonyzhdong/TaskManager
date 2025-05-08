const tasks = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    description: "JavaScript",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    description: "Software Practices",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    description: "Software Architecture",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    description: "Career",
    date: new Date("2025-01-15").toISOString()
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    description: "HTML5",
    date: new Date("2025-01-15").toISOString()
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newTask = {
  id: null,
  title: "",
  authorId: null,
  description: "",
  date: new Date().toISOString()
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newTask,
  tasks,
  authors
};
