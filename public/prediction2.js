async function prediction2() {
  document.getElementById("prediction2").innerHTML =
    "Carregando previsão...";

  const training = await fetch("http://localhost:3333/partialTrainingSet")
    .then((r) => r.json())
    .then((jsonBody) => {
      const trainingSet = dataHandling(jsonBody);
      const trainingData = trainingSet.data_arr;
      const trainingLabels = trainingSet.labels;

      const dtTraining = jsonBody;
      return { dtTraining, trainingData, trainingLabels };
    });

  const testing = await fetch("http://localhost:3333/bigTestingSet")
    .then((r) => r.json())
    .then((jsonBody) => {
      const testingSet = dataHandling(jsonBody);
      const testingData = testingSet.data_arr;
      const testingLabels = testingSet.labels;

      const dtTesting = [];

      for (let i = 0; i < jsonBody.length; i++) {
        const {
          age,
          menopause,
          tumor_size,
          inv_nodes,
          node_caps,
          deg_malig,
          breast,
          breast_quad,
          irradiat,
        } = jsonBody[i];
        dtTesting.push({
          age,
          menopause,
          tumor_size,
          inv_nodes,
          node_caps,
          deg_malig,
          breast,
          breast_quad,
          irradiat,
        });
      }

      const originalData = jsonBody;

      return { dtTesting, testingData, testingLabels, originalData };
    });

  // Configuration
  var config = {
    trainingSet: training.dtTraining,
    categoryAttr: "class",
  };

  // Building Decision Tree
  const decisionTree = new dt.DecisionTree(config);

  const dtPredictions = [];
  var dtTrue = 0;

  for (let i = 0; i < testing.originalData.length; i++) {
    const prediction = decisionTree.predict(testing.dtTesting[i]);
    dtPredictions.push(prediction);

    if (prediction == testing.originalData[i].class) dtTrue++;
  }

  const dtPrecision = (
    ((100 / dtPredictions.length) * dtTrue).toFixed(2) + "%"
  ).replace(".", ",");
  console.log(dtPrecision);

  svm = new svmjs.SVM();
  svm.train(training.trainingData, training.trainingLabels, { kernel: "rbf", C: 1.0 });

  const SVMPredictions = [];
  var SVMTrue = 0;

  for (let i = 0; i < testing.testingData.length; i++) {
    const prediction = svm.predict([testing.testingData[i]]);
    SVMPredictions.push(prediction);

    if (prediction == testing.testingLabels[i]) {
      SVMTrue++;
    }
  }

  const SVMPrecision = (
    ((100 / SVMPredictions.length) * SVMTrue).toFixed(2) + "%"
  ).replace(".", ",");
  console.log("svmtrue: " + SVMTrue);
  console.log(testing.testingLabels);

  makeTables(SVMPredictions, dtPredictions, SVMPrecision, dtPrecision, testing);
}