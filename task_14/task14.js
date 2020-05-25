function hTableToData(tableId) {
    let tbl = document.getElementById(tableId);

    let arrTable = [];
    for (let i = 0; i < tbl.rows.length; i++) {
        let row = tbl.rows[i];
        arrCells = [];
        for (let j = 0; j < row.cells.length; j++) {
            let text = row.cells[j].innerHTML;
            let number = Number(text);
            if (number) arrCells.push(number);
            else arrCells.push(text);
        }
        arrTable.push(arrCells);
    }

    console.log(arrTable);
    return arrTable;
}

function drawChart1() {
    var data = google.visualization.arrayToDataTable(hTableToData("table1"));

    var options = {
        title: 'Доходы компаний за разные года',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

function drawChart2() {
    var data = google.visualization.arrayToDataTable(hTableToData("table1"));

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options = {
        title: "Сравнение доходов компаний Сбербанк и Магнит за разные года",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Компания', 'Доход'],
        ['Сбербанк', 155],
        ['Магнит', 145],
        ['X5 Retail Group', 198],
        ['РЖД', 134]
    ]);

    var options = {
        title: 'Доля доходов компаний за 2010 год',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}