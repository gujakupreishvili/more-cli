#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const { readFile, writeFile } = require("./utils");

program
  .command("remove <number>")
  .description("remove an expense")
  .action(async (number) => {
    try {
      const products = await readFile("products.json");
      const index = products.findIndex(
        (item) => item.price && item.name === number
      );

      if (index === -1) {
        console.log("product  not found");
        return;
      }
      const deletedProduct = products.splice(index, 1);
      await writeFile("products.json", products);
      console.log(`Deleted: ${JSON.stringify(deletedProduct[0])}`);
    } catch (error) {
      console.error("Error:", error.message);
    }
  });

program.parse();
