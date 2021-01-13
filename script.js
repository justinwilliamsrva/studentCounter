// var number = document.getElementById("number");
// var numberk = document.getElementById("numberk");
// var numberl = document.getElementById("numberl");

// let count = 0;
// let countk = 0;
// let countl = 0;


// var up = document.getElementById("up");
// var down = document.getElementById("down");
// var upk = document.getElementById("upk");
// var downk = document.getElementById("downk");
// var upl = document.getElementById("upl");
// var downl = document.getElementById("downl");
// function counting() {
//     count++;
//     number.innerHTML = count;
// }
// function countingDown() {
//     if (count == 0) {
//         return;
//     } else {
//         count--;
//         number.innerHTML = count;
//     }
// }

// up.addEventListener("click", counting);
// down.addEventListener("click", countingDown);

// number.innerHTML = count;

class Student{
    constructor(count,numberName) {
        this.count = count;
        this.numberName = document.getElementById(numberName)
    };

    up() { this.count++;this.numberName.innerHTML = this.count }
    down() { if (this.count != 0) this.count--;this.numberName.innerHTML = this.count}
}

let lindsay = new Student(0,"lindsay");
let kate = new Student(0,"kate");
let kimberly = new Student(0,"kimberly");






