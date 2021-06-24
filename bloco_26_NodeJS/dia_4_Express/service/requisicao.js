const fs = require('fs/promises');

const getSimpsons = async () => {
 try {
  const response = await fs.readFile("./simpsons.json", "utf-8")
  return JSON.parse(response);
 } catch(error) {
  return {
    "code": 500,
    "error": "Internal Server Error"
  }
 }
};

module.exports = getSimpsons;
