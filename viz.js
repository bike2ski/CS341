/*
 * viz.js
 *
 * Defines:
 * - The data to be visualized in the chart.
 * - The options for the look of the chart to be drawn.
 * - How to draw the chart.
 *
 * @author: Tanya L. Crenshaw
 * @since: Jan 6, 2015
 */

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(drawChart);

function drawChart() {

    // STEP 3: STORE THE DATA.

    // Store the data by creating a google DataTable object with
    // two columns: Month and People Hours.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'People Hours');

    // Add 12 rows to the DataTable, January - December of
    // 2014.
    data.addRows([
        ['January', 1207.01],
        ['February', 907.09],
        ['March', 113.82],
        ['April', 112.34],
        ['May', 239.5],
        ['June', 146],
        ['July', 130],
        ['August', 385.67],
        ['September', 2352.56],
        ['October', 582.57],
        ['November', 300.08],
        ['December', 20.83]
      ]);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.  Finally
    // turn off the legend.
    var options = {
        width: 1000,
        height: 563,
	title: 'Session Hours Provided by University of Portland Librarians in 2014',
        hAxis: {
            title: 'Month',
            gridlines: {count: 12}
        },
        vAxis: {
            title: 'People Hours'
        },
	legend: { 
	    position: 'none' 
	}
    };

    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called ex0
    // in the html file.
    var chart = new google.visualization.ColumnChart(document.getElementById('ex0'));

    // STEP 7: SHOW THE DATA
    // Draw the chart with the supplied options.
    chart.draw(data, options);
}
