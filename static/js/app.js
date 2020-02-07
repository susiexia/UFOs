// import data from data.js
const tableData = data;

// reference the HTML table(output) using d3 library
var tbody = d3.select('tbody')

// Function of populate data into html table
function buildTable(data) {
    // init table data
    tbody.html('');

    // first array loop for <tr>
    data.forEach((dataRow) => {
        let row = tbody.append('tr'); //html
        //second loop for <td>
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append('td'); //html
            // d3 funtion 
            cell.text(val);
        });
    });

    
}


function handleClick() {
    let inputdate = d3.select('#datetime').property('value');
    // init filtered table
    let filteredData = tableData;
    // a if condition statement(contains a nested filter condition)
    if (date) {
        filteredData = filteredData.filter((row) => row.datetime === inputdate);
    };
    //  Directly call buildTable function,no nessecery to write else statement
    buildTable(filteredData);
}

// d3 event handling
d3.select('#filter-btn').on('click', handleClick);

// show original table when page loads, before event triggerd
buildTable(tableData);
