function send() {
    document.getElementById('item').value = '';
    document.getElementById('message').innerHTML = 'Сообщение отправлено!';

    setTimeout(() => document.getElementById('message').innerHTML = '', 1000);
}

function openTab(punktName) {
    let tabs = ["tab1", "tab2", "tab3", "tab4", "tab5"];

    for (var i = 0; i < tabs.length; i++){
        console.log(tabs[i]);
        document.getElementById(tabs[i]).style.display = "none";
    }

    document.getElementById(punktName).style.display = "inline";
}