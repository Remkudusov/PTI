var xhr = new XMLHttpRequest();
xhr.open("GET", "pricelist.php?action=getPrices", true);
xhr.send();
xhr.onreadystatechange = function () {
	if (xhr.readyState != 4) return;
	if (xhr.status != 200) {
		emptyResult();
	} else {
		var res = JSON.parse(xhr.responseText);
		createTable(res.prices);
	}
};