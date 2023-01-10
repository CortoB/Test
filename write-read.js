const { writeFileSync, readFileSync } = require("node:fs");

writeFileSync("test.txt", "Troisieme text");
const fileContent = readFileSync("test.txt", "utf-8");
console.log(fileContent);
