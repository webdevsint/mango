const express = require("express");
const aes256 = require("aes256");
const shell = require('shelljs');
const router = express.Router();
const path = require("path");
require("dotenv").config();

const documents = require("../documents");

class Import {
  constructor(document) {
    const {
      database,
      addEntry,
      removeEntry,
      save,
    } = require(`../documents/${document}/${document}.js`);
    this.database = database;
    this.addEntry = addEntry;
    this.removeEntry = removeEntry;
    this.save = save;
  }
}

const apiKey = process.env.API_KEY;
const key = process.env.KEY;


router.get("/", (req, res) => {
  if (
    req.query.document === "" ||
    documents.includes(req.query.document) === false
  ) {
    console.log("Document not found!");
    res.send("Document not found!");
  } else {
    if (req.query.api_key === "" || req.query.api_key !== apiKey) {
      res.send("Invalid API Key!");
    } else {
      let data = new Import(req.query.document);
      const response = [];

      // Decrypting the values
      data.database.forEach((item) => {
        class Decryption {
          constructor(text) {
            const encryptedText = text;
            this.decryptedText = aes256.decrypt(key, encryptedText);
          }
        }
        const todo = new Decryption(item.todo).decryptedText; const completed = new Decryption(item.completed).decryptedText; const object = { id: this.id, todo: todo, completed: completed, };

        response.push(object);
      });
      res.json(response);
    }
  }
});

router.post("/", (req, res) => {
  if (
    req.query.document === "" ||
    documents.includes(req.query.document) === false
  ) {
    console.log("Document not found!");
    res.send("Document not found!");
  } else {
    if (req.query.api_key === "" || req.query.api_key !== apiKey) {
      res.send("Invalid API Key!");
    } else {
      let data = new Import(req.query.document);

      class Encryption {
        constructor(text) {
          const plainText = text;
          const wisherBuffer = Buffer.from(plainText);
          this.encryptedText = aes256.encrypt(key, plainText);
        }
      }
      const todo = new Encryption(req.body.todo).encryptedText; const completed = new Encryption(req.body.completed).encryptedText; data.addEntry(todo, completed);

      data.save();

      console.log(todo);
      // shell.exec('bash backup.sh');
      res.send("entry added!");
    }
  }
});

router.delete("/", (req, res) => {
  if (req.query.api_key === "" || req.query.api_key !== apiKey) {
    res.send("Invalid API Key!");
  } else {
    let data = new Import(req.query.document);

    data.removeEntry(req.query.index);
    data.save();

    // shell.exec('bash backup.sh');
    res.send("Entry deleted!");
  }
});

module.exports = router;
