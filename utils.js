const fs = require("fs/promises");

const readFile = async (fileName) => {
  const data = await fs.readFile(fileName, "utf-8");
  return JSON.parse(data);
};

const writeFile = async (fileName, data) => {
  await fs.writeFile(fileName, JSON.stringify(data));
};

module.exports = { readFile, writeFile };
