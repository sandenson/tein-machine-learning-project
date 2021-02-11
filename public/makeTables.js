function makeTables(
  SVMPredictions,
  dtPredictions,
  SVMPrecision,
  dtPrecision,
  testing
) {
  // RESULTADO ESPERADO | RESULTADO RECEBIDO (DECISION TREE) | RESULTADO (SVM)
  // -------------------------------------------------------------------------
  // dados              | dados                              | dados
  // -------------------------------------------------------------------------
  // (...)              | (...)                              | (...)

  // PRECISÃO           | DECISION TREE                      | SVM
  // -------------------------------------------------------------------------
  //                    | dados                              | dados

  document.getElementById("prediction2").innerHTML = "";
  var table1 = document.createElement("table");
  table1.id = "table1";
  document.getElementById("prediction2").appendChild(table1);

  var t1Header1 = document.createElement("th");
  t1Header1.innerHTML = "RESULTADO ESPERADO |";
  document.getElementById("table1").appendChild(t1Header1);
  var t1Header2 = document.createElement("th");
  t1Header2.innerHTML = "RESULTADO RECEBIDO (DECISION TREE) |";
  document.getElementById("table1").appendChild(t1Header2);
  var t1Header3 = document.createElement("th");
  t1Header3.innerHTML = "RESULTADO (SVM)";
  document.getElementById("table1").appendChild(t1Header3);

  for (let i = 0; i < testing.originalData.length; i++) {
    var row = document.createElement("tr");
    row.id = "row" + i;
    document.getElementById("table1").appendChild(row);

    var exRes = document.createElement("td");
    exRes.innerHTML = testing.originalData[i].class;
    document.getElementById("row" + i).appendChild(exRes);

    var dtRes = document.createElement("td");
    dtRes.innerHTML =
      dtPredictions[i] +
      (testing.originalData[i].class == dtPredictions[i]
        ? " (Previsão correta)"
        : " (Previsão incorreta)");
    document.getElementById("row" + i).appendChild(dtRes);

    var SVMRes = document.createElement("td");
    if (SVMPredictions[i][0] == -1) {
      if (SVMPredictions[i][0] == testing.testingLabels[i]) {
        SVMRes.innerHTML =
          SVMPredictions[i][0] + " (no-recurrence-event - Previsão correta)";
      } else {
        SVMRes.innerHTML =
          SVMPredictions[i][0] + " (no-recurrence-event - Previsão incorreta)";
      }
    } else if (SVMPredictions[i][0] == 1) {
      if (SVMPredictions[i][0] == testing.testingLabels[i]) {
        SVMRes.innerHTML =
          SVMPredictions[i][0] + " (recurrence-event - Previsão correta)";
      } else {
        SVMRes.innerHTML =
          SVMPredictions[i][0] + " (recurrence-event - Previsão incorreta)";
      }
    } else SVMRes.innerHTML = SVMPredictions[i][0] + " (Previsão incorreta)";
    document.getElementById("row" + i).appendChild(SVMRes);
  }

  var br = document.createElement("br");
  document.getElementById("prediction2").appendChild(br);

  var table2 = document.createElement("table");
  table2.id = "table2";
  document.getElementById("prediction2").appendChild(table2);

  var t1Header1 = document.createElement("th");
  t1Header1.innerHTML = "PRECISÃO |";
  document.getElementById("table2").appendChild(t1Header1);
  var t1Header2 = document.createElement("th");
  t1Header2.innerHTML = "DECISION TREE |";
  document.getElementById("table2").appendChild(t1Header2);
  var t1Header3 = document.createElement("th");
  t1Header3.innerHTML = "SVM";
  document.getElementById("table2").appendChild(t1Header3);

  var row = document.createElement("tr");
  row.id = "t2row";
  document.getElementById("table2").appendChild(row);

  var td = document.createElement("td");
  document.getElementById("t2row").appendChild(td);
  var dtPrec = document.createElement("td");
  dtPrec.innerHTML = dtPrecision;
  document.getElementById("t2row").appendChild(dtPrec);
  var SVMPrec = document.createElement("td");
  SVMPrec.innerHTML = SVMPrecision;
  document.getElementById("t2row").appendChild(SVMPrec);
}
