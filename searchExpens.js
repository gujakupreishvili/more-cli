#!/usr/bin/env node

const { Command } = require("commander");
const path = require("path");
const program = new Command();
const { readFile } = require("./utils");

program
  .command("find <name>")
  .description("find products by name")
  .action(async (name) => {
    try {
      const products = await readFile("products.json");
      const matchingProducts = products.filter(
        (item) => item.name.toLowerCase() === name.toLowerCase()
      );

      if (matchingProducts.length === 0) {
        console.log(`No products found with the name "${name}".`);
      } else {
        console.log("Matching products:", JSON.stringify(matchingProducts));
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  });

program.parse();
