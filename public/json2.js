const csvToJson = require("csvtojson");
const fileSystem = require("fs");

async function customToJson(){
  const trainingData = await csvToJson().fromFile("public/csv80.csv");

  return trainingData;
}

module.exports = async function main(req, res){
  const trainingData = await customToJson();

  res.json(trainingData);
};