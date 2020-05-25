function createTable(prices) {
    let table = '<table border=1 id="1">';
    table += "<thead><tr>";

    table +=
		'<td>Город</td>' +
        '<td>Цена</td>' +
        '<td>Улица</td>'
	
		table += "</tr></thead>";

    prices.forEach(function (p) {
        table += "<tr>";

        table +=
            "<td>" +
            p.city +
            "</td>" +
            "<td>" +
            p.price +
            "</td>" +
            "<td>" +
            p.street +
            "</td>";

        table += "</tr>";
    });

    table += "</table>";
    document.getElementById("result").innerHTML = table;
}

function emptyResult() {
    document.getElementById("result").innerHTML = "<p>Нет данных</p>";
}
