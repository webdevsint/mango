const documents = require("../documents");
const path = require("path");
const fs = require("fs");

const document = process.argv[2];

if (!document) {
  console.log("Please provide a document name!");
} else {
  const file = path.resolve("..", "documents", document);

  if (!documents.includes(document)) {
    console.log("Oops! This document doesn't exist!");
  } else {
    const index = documents.indexOf(document);
    if (index !== -1) {
      documents.splice(index, 1);
    }

    fs.rmdirSync(file, { recursive: true });

    fs.writeFileSync(
      "../documents.js",
      `const documents=[${documents
        .map((i) => `'${i}'`)
        .join(",")}];module.exports=documents;`
    );

    console.log(`Document "${document}" deleted!`);
  }
}
