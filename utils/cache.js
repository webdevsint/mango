const decrypts = "const todo = new Decryption(item.todo).decryptedText; const completed = new Decryption(item.completed).decryptedText; const object = { id: this.id, todo: todo, completed: completed, };"; const encrypts = "const todo = new Encryption(req.body.todo).encryptedText; const completed = new Encryption(req.body.completed).encryptedText; data.addEntry(todo,completed);"; module.exports = { decrypts, encrypts }