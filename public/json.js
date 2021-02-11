const csvToJson = require("csvtojson");
const fileSystem = require("fs");

async function customToJson(){
  const a = await csvToJson().fromFile("public/breast-cancer.csv");
  return a;
}

module.exports = async function main(req, res){
  const arr_training = await customToJson();
  console.log(arr_training);

  res.json(arr_training);
};