#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const path = require("path");
const { readFile, writeFile } = require("./utils");
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};
program
  .command("create <price> <product>")
  .description("create a new expence")
  .action(async (product, price) => {
    try {
      const data = await readFile("products.json");
      const newExpence = {
        name: product,
        price: price + "$",
        time: getCurrentTime(),
      };
      data.push(newExpence);
      await writeFile("products.json", data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  });

program.parse();
