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

const writeNew = async (newPersonagem) => {
  try {
    const originalSet = await getSimpsons();
    await fs.writeFile("./simpsons.json", JSON.stringify([...originalSet, newPersonagem]));
    return '';
  } catch(error) {
    return {
      code : 500,
      error: "errrrrrou!"
    }
  }
}

module.exports = { getSimpsons, writeNew };
