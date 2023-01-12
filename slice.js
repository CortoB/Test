import { argv } from "node:process";

const newTab = argv.slice(2);
newTab.forEach((val, index) => {
  console.log(`${index + 1}: ${val}`);
});
