// import data from data.js
const tableData = data;

// reference the HTML table(output) using d3 library
var tbody = d3.select('tbody');

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

    
};
// Keep track of all filters
var filters = {};

function updateFilters() {
    // Save the element, value, and id of the filter that was changed
        
        var inputElement = d3.select(this);
        var inputID = inputElement.attr("id");
        
        var inputValue = inputElement.property("value");
    
    // Create an if-else statement to add filter data from input
        if (inputValue) {
            filters[inputID] = inputValue;
        } else{filters={};};
    

    //console.log(filters)

    // Call function to apply all filters and rebuild the table
    filterTable(filters);
};

function filterTable(obj) {

    // Set the filteredData to the tableData
    let filteredData = tableData;
    // Loop through all of the filters and keep any data that
    // matches the filter values

    Object.entries(obj).forEach(([fkey, fval]) =>{
        
            filteredData = filteredData.filter((row) => row[fkey] === fval)
            

    });



    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  };





// d3 event handling
function inputall(){
    d3.selectAll("input").on("change",updateFilters);
};

d3.selectAll("#filter-btn").on("click", inputall);
                            

// show original table when page loads, before event triggerd
buildTable(tableData);
