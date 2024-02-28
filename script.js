var count = 0;
var countEl = document.getElementById("count-el");
var saveEl = document.getElementById("entries");

function increase() {
    count += 1;
    countEl.innerText = count;
};

function save() {
    var store = " " + count + " - ";
    saveEl.textContent += store;
    count = 0;
    countEl.textContent = count;
};