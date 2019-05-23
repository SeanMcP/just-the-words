const justTheWords = require("./index");

const examples = [
  `Hello, world!`,
  `Two\nlines`,
  `Spider-man`,
  `This -- you may not realize -- is a sentence with dashes`,
  `Now\rwe're\ngoing\tcrazy`,
//   undefined
];

examples.forEach(example => console.log(justTheWords(example)));
