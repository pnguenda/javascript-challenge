// from data.js
var tableData = data;

// YOUR CODE HERE!

// from data.js, write code that appends a table to your web page and then add new rows of data for each UFO sighting
var tableData = data;

// variable declaration
var tbody = d3.select('tbody');

// Build Table
    // 1. clear existing data
    // 2. loop through all row in data.js
    // 3. Append the table row 'tr' to the table body 'tbody'
    // 4. Iterate through the values using the object.values and the forEach
    // 5. For each value, append a cell to the row.
function buildTable(data){
    tbody.html('');
    data.forEach((dataRow) => {
        var row = tbody.append('tr');
        // Get the entries for each function in the array
        Object.values(dataRow).forEach((value) => {
            var cell = row.append('td');
            cell.text(value);
        });

    });
};

buildTable(tableData);
// print arrays to console
console.log(tableData);

// PART II 
// Code that will listen for events and search through the `date/time` column to find rows that match user input
function handleButtonClick(){
    // prevent the page from refreshing
    d3.event.preventDefault();
    var date = d3.select('#datetime').property('value');
    var filterData = tableData;

    if (date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build data
    buildTable(filterData);
}

var filterBotton = d3.selectAll('#filter-btn').on('click', handleButtonClick);
buildTable(tableData);


// import React, {useState} from 'react';
// import {multiselect} from 'multiselect-react-dropdown';
// import './App.css';

// function multiSelect() {
//     const data = {date, city, state, country, shape};
//     const [options] = useState(data);        
//     return (
//         multiselect options.displayvalue=[country]
//     )
// }

// // from multi-select.html
// function showChoices(){
//     // retrieve data
//     var tableData = data
//     // set up output string
//     for (i = 0; i < showChoices.length; i++) {
//         // examine current option
//         currentOption = showChoice[i];
//         //print if selected
//         if (currentOption.selected == true) {
//             result += currentOption.value
//         } // end if
//     } //end for loop
// } // end showChoices

// LEVEL II similar code as part II with different naming