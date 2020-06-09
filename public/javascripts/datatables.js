"use strict"

// Call the dataTables jQuery plugin

var dev;
var temp_mask = [];
var data_frame =  {
  "name": "temperature",
  "value": "23",
  "datetime": "2011/04/25"
};
var dataTables = [];
var store ={
  retrieve: true,
  dom: 'Bfrtip',
  buttons: {
    buttons: [
      { extend: 'copy', className: 'copyButton' },
      { extend: 'excel', className: 'excelButton' },
      { extend: 'csv', className: 'csvButton' },
      { extend: 'pdf', className: 'pdfButton' },
      { extend: 'print', className: 'printButton' }
    ]
  },
  // data: dataTables,
  columns: [
    { data: 'name' },
    { data: 'value' },
    { data: 'datetime' }
  ]
};

$(document).ready(function () {
  $('#dataTable').DataTable(store);
});
  // {
  //   "name": "temperature",
  //   "value": "23",
  //   "datetime": "2011/04/25"
  // },
//   {
//     "name": "humanality",
//     "value": "12",
//     "datetime": "2011/07/25"
//   },
//   {
//     "name": "báo cháy",
//     "value": "123",
//     "datetime": "2011/07/25"
//   }
// ];

//----------------------------------------------------------------------------------------


async function init_data_table() {
  dataTables=[];
  dev = document.getElementById("tables").value;
  let mess_table = { dev: dev };
  mess_table = JSON.stringify(mess_table);
  let response = await fetch('https://iot-server-365.herokuapp.com/user/display/getdata', {
    method: "POST",
    body: mess_table,
    mode: "cors",
    headers: { "Content-type": "application/json;charset=utf-8" }
  });
  let datum = await response.json();

  if (datum.init == null) {
    return;
  }
  console.log(datum.init);

  for (let i = 0; i < datum.init.length; i++) {
    temp_mask.push(datum.init[i].mask);
    data_frame.name=datum.init[i].mask;

    // $('#dataTable').dataTable().fnClearTable();
    $('#dataTable').dataTable().fnAddData(data_frame);
  
  }
  console.log(dataTables);
}

document.getElementById("add_table").addEventListener("click", function () {
  init_data_table();

  // $('#dataTable').dataTable().fnClearTable();
  // $('#dataTable').dataTable().fnAddData(dataTables);

});
document.getElementById("clear_table").addEventListener("click", function () {
  $('#dataTable').dataTable().fnClearTable();
});


// async function getData_table() {
//     let response = await fetch('https://iot-server-365.herokuapp.com/user/display/getdata', {
//         method: 'get',
//         mode: 'cors',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         }
//     });

//     let datum = await response.json();
//     console.log(datum.data);
// }

// setInterval(getData_table, 1000);