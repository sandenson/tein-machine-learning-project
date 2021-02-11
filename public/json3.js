const csvToJson = require("csvtojson");
const fileSystem = require("fs");

async function customToJson(){
  const testingData = await csvToJson().fromFile("public/csv20.csv");

  return testingData;
}

module.exports = async function main(req, res){
  const testingData = await customToJson();

  res.json(testingData);
};