const input = [
  // root
  ["Notes.txt"], // Folder 1
  [
    // Folder2
    ["ExampleCode.js"], // Folder3
    "ExamPreparation.txt",
    "ExamResults.pdf",
  ],
  "Objectives.txt",
];

const output = [];

function listFiles(input, output) {
  if (input.length === 0) {
    return;
  }

  if (typeof input[0] === "string") {
    output.push(input[0]);
  } else {
    listFiles(input[0], output);
  }

  input.shift();
  listFiles(input, output);
}

function refactoredListFiles(input, output) {
  if (input.length === 0) return;

  const firstItem = input.shift();
  typeof firstItem === "string"
    ? output.push(firstItem)
    : listFiles(firstItem, output);

  listFiles(input, output);
}

// listFiles(input, output);
// console.log(output);

refactoredListFiles(input, output);
console.log(output);
