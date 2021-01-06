var number = document.getElementById("number");

let count = 0;

var up = document.getElementById("up");
var down = document.getElementById("down");
function counting() {
    count++;
    number.innerHTML = count;
}
function countingDown() {
    if (count == 0) {
        return;
    } else {
        count--;
        number.innerHTML = count;
    }
}

up.addEventListener("click", counting);
down.addEventListener("click", countingDown);

number.innerHTML = count;
