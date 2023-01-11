import { argv } from "node:process";

const option = argv[2];

if (option === "foo") {
  console.log("foo");
} else if (option === "bar") {
  console.log("bar");
} else {
  console.log("default");
}
