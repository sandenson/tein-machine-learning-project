function prediction1() {
  document.getElementById("prediction1").innerHTML =
    "Carregando previsão...";

  fetch("http://localhost:3333/fullTrainingSet")
    .then((r) => r.json())
    .then((jsonBody) => {
      const { data_arr, labels } = dataHandling(jsonBody);

      console.log(data_arr);

      svm = new svmjs.SVM();
      svm.train(data_arr, labels, { kernel: "rbf", C: 1.0 });
      prediction = svm.predict([[5, 2, 7, 2, 2, 3, 1, 2, 2]]);

      if (prediction == -1)
        prediction = "Previsão: " + prediction + " (no-recurrence-event)";
      else if (prediction == 1)
        prediction = "Previsão: " + prediction + " (recurrence-event)";
      else
        prediction =
          "Previsão: " +
          prediction +
          " (esse resultado não deveria ser possível, e não sei porque aconteceu)";

      document.getElementById("prediction1").innerHTML = prediction;
      console.log(labels);
    });
}