let navi = document.getElementsByTagName("nav");
let ol = document.getElementById("ordered");
let ul = document.getElementById("todo");

update_DOM();

function update_DOM(){
    update_nav();
    update_ol();
    update_ul();
}

function update_nav(){
for(var navis of navi){
    let nav = navis.getElementsByClassName("navi");
    for(i of nav){
    i.classList.add("list");
    var newLi = document.createElement('li');
    var newA = document.createElement('a');
    newA.innerText = "Localhost";
    newA.href = "http://localhost:3000/";
    newLi.appendChild(newA);
    i.appendChild(newLi);
    }
}
}

function update_ol(){
var firstList = document.createElement('li');
firstList.innerText = 'Item 0';
ol.insertBefore(firstList, ol.firstChild)
}

function update_ul(){
if(ul.classList.contains("navi")){
    ul.classList.remove("navi");
}

for(var lists of ul.childNodes){
    if(lists.innerText == "Item 2"){
        ul.removeChild(lists);
    }
}
}