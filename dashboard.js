let columnDefs = [
  {'field': 'clinic'},
  {'field': 'reported time'},
  {'field': 'wait time'}
]

d3.csv("https://raw.githubusercontent.com/astoria-tech/nyc-covid19-testing-wait-times/main/wait-times.csv").then(function(data) {
  let rowData = data.map(row => ({'clinic': row['clinic'], 'reported time': row['reported_time_human'], 'wait time': row['wait_time_minutes']}))
  let gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  }

  let eGridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});