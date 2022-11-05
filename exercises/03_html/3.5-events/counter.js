let res = document.getElementById("reset");
let sub = document.getElementById("decrement");
let inc = document.getElementById("increment");
let counter = document.getElementById("counter");
const min = -5;
const max = 5;

res.addEventListener("click",function resetClick(){
    counter.innerText = '0';
});

function checkValue(count){
    switch(count){
        case 6:
            counter.innerText = -5;
            return true;
        case -6:
            counter.innerText = 5;
            return true;
        default:
            return false;
    }
}

inc.addEventListener("click",function sumClick(){
    var value = Number.parseInt(counter.innerText);
    value += 1;
    if(!checkValue(value)){
    counter.innerText = value;
    }
});

sub.addEventListener("click",function subClick(){
    var value = Number.parseInt(counter.innerText);
    value -= 1;
    if(!checkValue(value)){
    counter.innerText = value;
    }
});
