var arr = [];
function allowDrow(ev) {
    ev.preventDefault(); // отменяет действие события по умолчанию
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("content", ev.target.textContent);
}
function drop(ev, block) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var content = ev.dataTransfer.getData("content");
    if(block.id == "div2"){
        if(arr.indexOf(content) == -1){
            arr.push(content);
        }
    }
    if(block.id == "div1"){
        if(arr.indexOf(content) != -1){
            arr.splice(arr.indexOf(content), 1);
        }
    }
    block.appendChild(document.getElementById(data));
    console.log(arr);
}