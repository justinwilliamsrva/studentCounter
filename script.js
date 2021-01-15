
class Student {
    constructor(count, numberName) {

        this.name = numberName
        this.numberName = document.getElementById(numberName);
        this.count = localStorage.getItem(this.name) || count;
        

    }

    up() {
        this.count++;
        localStorage.setItem(this.name, this.count);
        this.numberName.innerHTML = this.count;
    }
    down() {
        if (this.count != 0) this.count--;
        localStorage.setItem(this.name, this.count);
        this.numberName.innerHTML = this.count;
    }
}


let newMan = [];
let students = ["kimberly", "kate", "lindsay"];

function newStudent() {
    //     let i = 0;
    //     let x = 2;

    //     newMan[i] = new Student(0, student)
    //  newMan[x] = new Student(0,game)
    let content = document.getElementById("content");

    for (let i = 0; i < students.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "student");
        let title = document.createElement("h2");
        title.innerHTML = students[i].toUpperCase();
        let counter = document.createElement("h2");
        counter.setAttribute("id", students[i]);
        let buttonDiv = document.createElement("div");
        let buttonUp = document.createElement("button");
        buttonUp.setAttribute("onClick", `newMan[${i}].up()`);
        buttonUp.innerHTML = "UP";
        let buttonDown = document.createElement("button");
        buttonDown.setAttribute("onClick", `newMan[${i}].down()`);
        buttonDown.innerHTML = "DOWN";

        buttonDiv.append(buttonUp);
        buttonDiv.append(buttonDown);
        div.append(title);
        div.append(counter);
        div.append(buttonDiv);
        content.append(div);

        newMan[i] = new Student(0, students[i]);
    }
}
newStudent();
