
const { readFile, writeFile } = require("./utils");

async function main() {
  const data = await readFile("products.json");
  console.log(data);
}
main();
