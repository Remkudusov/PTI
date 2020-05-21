function start() {
    let answers = [{id: "FIO", text: "ФИО"},
        {id: "Group", text: "группа"}];
    let empty = [];
    let isEmpty = false;
    for (let i = 0; i < answers.length; i++) {
        if (document.getElementById(answers[i].id).value === ""){
            isEmpty = true;
            empty.push(answers[i].text);
        }
    }

    if (!isEmpty) {
        return result_form();
    }
    else {
        if (empty.length === 2) {
            alert("Вы не заполнили пункты " + empty[0] + " и " + empty[1]);
        }
        else {
            alert("Вы не заполнили пункт " + empty[0]);
        }
    }
}

function result_form() {
    var FIO = document.getElementById("FIO");
    var Course = document.getElementById("Course");
    var Faculty = document.getElementById("Faculty");
    var Group = document.getElementById("Group");
    var Subject = document.getElementById("Subject");
    var Teacher = document.getElementById("Teacher");
    var Mounth = document.getElementById("Mounth");
    var Day = document.getElementById("Day");
    var Time = document.getElementById("Time");
    var studyForm = check();

    function check()
    {
        var inp = document.getElementsByName('radio');
        for (var i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
                return inp[i].value;
            }
        }
    }

    let tables = "<table border=1 id=\"1\">" +
        "<tr>" +
        "<th>Фамилия, Имя, Отчество</th>" +
        "<th>" + FIO + "</th>" +
        "</tr>"+
        "<tr>" +
        "<th>Курс</th>" +
        "<th>" + Course + "</th>" +
        "</tr>"+
        "<tr>" +
        "<th>Факультет</th>" +
        "<th>" + Faculty + "</th>" +
        "</tr>"+
        "<tr>" +
        "<th>Группа</th>" +
        "<th>" + Group + "</th>" +
        "</tr>"+
        "<tr>"+
        "<th>Предмет</th>" +
        "<th>" + Subject + "</th>" +
        "</tr>" +
        "<tr>"+
        "<th>Преподаватель</th>" +
        "<th>" + Teacher + "</th>" +
        "</tr>" +
        "<tr>"+
        "<th>Время сдачи</th>" +
        "<th>" + Day + " " + Mounth + ", " + Time + " часов" + "</th>" +
        "</tr>"+
        "<tr>"+
        "<th>Форма сдачи</th>" +
        "<th>" + studyForm + "</th>" +
        "</tr>" +
    "<\/table>";

    document.getElementById('result').innerHTML = tables ;
}