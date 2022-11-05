const roll = document.getElementById('roll-button');
var span = document.getElementById("totals").querySelector("span");
var one = document.getElementById("ones").querySelector("p");
var two = document.getElementById("twos").querySelector("p");
var three = document.getElementById("threes").querySelector("p");
var four = document.getElementById("fours").querySelector("p");
var five = document.getElementById("fives").querySelector("p");
var six = document.getElementById("sixes").querySelector("p");

roll.addEventListener('click', e => {
    e.preventDefault();
    rollDice();
});

// update throw count
document.addEventListener('rollDice', function() {
    var count = Number(span.innerHTML);
    span.innerHTML = count + 1;
});

// update number counts
document.addEventListener('rollDice', function(e) {
    let value = e.detail.value;
    let names = [one, two, three, four, five, six];

    let count = 1;
    if(names[value-1].innerHTML !== '-'){
        count = Number(names[value-1].innerHTML);
        count += 1;
    }
    names[value-1].innerHTML = count;

});

// update dice 
document.addEventListener('rollDice', function(e) {
    let target = document.getElementById('dice').querySelector('span');
    let cloned = document.getElementById('template' + e.detail.value).content.cloneNode(true);
    target.innerHTML = cloned.querySelector("span").innerHTML;


});


