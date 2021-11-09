const cache = require("../utils/cache");
const params = require("../documents/params");
const fs = require("fs");

function props(a) {
  const values = [];
  for (i = 0; i < params.length; i++) {
    values.push(`${a[i]}: ${a[i]},`);
  }
  return values.join(" ");
}

if (cache.decrypts < 1 && cache.encrypts < 1) {
  cache.decrypts = "// append decryption";
  cache.encrypts = "// append encryption";
}

const decryption = `${params
  .map((i) => `const ${i} = new Decryption(item.${i}).decryptedText;`)
  .join(" ")} const object = { id: this.id, ${props(params)} };`;

const encryption = `${params
  .map((i) => `const ${i} = new Encryption(req.body.${i}).encryptedText;`)
  .join(" ")} data.addEntry(${params.map((i) => i)});`;

const data = fs
  .readFileSync("routes.js", "utf8")
  .replace(cache.decrypts, decryption)
  .replace(cache.encrypts, encryption);

fs.writeFileSync(
  "../utils/cache.js",
  `const decrypts = "${decryption}"; const encrypts = "${encryption}"; module.exports = { decrypts, encrypts }`
);

fs.writeFileSync("routes.js", data);
