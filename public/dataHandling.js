function dataHandling (jsonBody) {
  var data_arr = [];
  var labels = [];

  for (let i = 0;i < jsonBody.length;i++) {
    if (jsonBody[i].age == '10-19') data_arr[i] = [1];
    else if (jsonBody[i].age == '20-29') data_arr[i] = [2];
    else if (jsonBody[i].age == '30-39') data_arr[i] = [3];
    else if (jsonBody[i].age == '40-49') data_arr[i] = [4];
    else if (jsonBody[i].age == '50-59') data_arr[i] = [5];
    else if (jsonBody[i].age == '60-69') data_arr[i] = [6];
    else if (jsonBody[i].age == '70-79') data_arr[i] = [7];
    else if (jsonBody[i].age == '80-89') data_arr[i] = [8];
    else if (jsonBody[i].age == '90-99') data_arr[i] = [9];
    
    if (jsonBody[i].menopause == 'lt40') data_arr[i].push(1);
    else if (jsonBody[i].menopause == 'ge40') data_arr[i].push(2);
    else if (jsonBody[i].menopause == 'premeno') data_arr[i].push(3);

    if (jsonBody[i].tumor_size == '0-4') data_arr[i].push(1);
    else if (jsonBody[i].tumor_size == '5-9') data_arr[i].push(2);
    else if (jsonBody[i].tumor_size == '10-14') data_arr[i].push(3);
    else if (jsonBody[i].tumor_size == '15-19') data_arr[i].push(4);
    else if (jsonBody[i].tumor_size == '20-24') data_arr[i].push(5);
    else if (jsonBody[i].tumor_size == '25-29') data_arr[i].push(6);
    else if (jsonBody[i].tumor_size == '30-34') data_arr[i].push(7);
    else if (jsonBody[i].tumor_size == '35-39') data_arr[i].push(8);
    else if (jsonBody[i].tumor_size == '40-44') data_arr[i].push(9);
    else if (jsonBody[i].tumor_size == '45-49') data_arr[i].push(10);
    else if (jsonBody[i].tumor_size == '50-54') data_arr[i].push(11);
    else if (jsonBody[i].tumor_size == '55-59') data_arr[i].push(12);

    if (jsonBody[i].inv_nodes == '0-2') data_arr[i].push(1);
    else if (jsonBody[i].inv_nodes == '3-5') data_arr[i].push(2);
    else if (jsonBody[i].inv_nodes == '6-8') data_arr[i].push(3);
    else if (jsonBody[i].inv_nodes == '9-11') data_arr[i].push(4);
    else if (jsonBody[i].inv_nodes == '12-14') data_arr[i].push(5);
    else if (jsonBody[i].inv_nodes == '15-17') data_arr[i].push(6);
    else if (jsonBody[i].inv_nodes == '18-20') data_arr[i].push(7);
    else if (jsonBody[i].inv_nodes == '21-23') data_arr[i].push(8);
    else if (jsonBody[i].inv_nodes == '24-26') data_arr[i].push(9);
    else if (jsonBody[i].inv_nodes == '27-29') data_arr[i].push(10);
    else if (jsonBody[i].inv_nodes == '30-32') data_arr[i].push(11);
    else if (jsonBody[i].inv_nodes == '33-35') data_arr[i].push(12);
    else if (jsonBody[i].inv_nodes == '36-39') data_arr[i].push(13);

    if (jsonBody[i].node_caps == 'yes') data_arr[i].push(1);
    else if (jsonBody[i].node_caps == 'no') data_arr[i].push(2);
    else if (jsonBody[i].node_caps == '?') data_arr[i].push(3);

    data_arr[i].push(parseInt(jsonBody[i].deg_malig));

    if (jsonBody[i].breast == 'left') data_arr[i].push(1);
    else if (jsonBody[i].breast == 'right') data_arr[i].push(2);
    
    if (jsonBody[i].breast_quad == 'left_up') data_arr[i].push(1);
    else if (jsonBody[i].breast_quad == 'left_low') data_arr[i].push(2);
    else if (jsonBody[i].breast_quad == 'right_up') data_arr[i].push(3);
    else if (jsonBody[i].breast_quad == 'right_low') data_arr[i].push(4);
    else if (jsonBody[i].breast_quad == 'central') data_arr[i].push(5);
    else if (jsonBody[i].breast_quad == '?') data_arr[i].push(6);

    if (jsonBody[i].irradiat == 'yes') data_arr[i].push(1);
    else if (jsonBody[i].irradiat == 'no') data_arr[i].push(2);
    
    if (jsonBody[i].class == 'no-recurrence-events') labels[i] = -1;
    else if (jsonBody[i].class == 'recurrence-events') labels[i] = 1;
  }

  return { data_arr, labels };
}