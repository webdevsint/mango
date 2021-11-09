const documents = require("../documents");
const params = require("./params");
const fs = require("fs");

const name = process.argv[2];

if (!name) {
  console.log("Please provide a document name!");
} else {
  const imports = fs.readFileSync("../utils/imports.txt", "utf8");
  const functions = fs.readFileSync("../utils/functions.txt", "utf8");

  function props(a) {
    const values = [];
    for (i = 0; i < params.length; i++) {
      values.push(`this.${a[i]} = ${a[i]};`);
    }
    return values.join(" ");
  }

  const template = `class Entry {constructor(${params.map(
    (i) => i
  )}) { this.id = nanoid(); ${props(params)}}}; const addEntry = (${params.map(
    (i) => i
  )}) => { database.push(new Entry(${params.map((i) => i)}));};`;

  const document = imports + template + functions;

  if (documents.includes(name) === true) {
    console.log("Document already exists!");
  } else {
    documents.push(name);
    (() => {
      fs.mkdir(name, () => {
        fs.writeFileSync(`./${name}/${name}.js`, document);
        fs.writeFileSync(`./${name}/data.json`, `{"db":[]}`);
        fs.writeFileSync(
          "../documents.js",
          `const documents=[${documents
            .map((i) => `'${i}'`)
            .join(",")}];module.exports=documents;`
        );
      });
    })();

    console.log("Document created!");
  }
}
