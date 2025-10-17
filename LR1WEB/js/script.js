function checkEvenOdd(number) {
  const output = document.getElementById("result");
    if (number % 2 === 0) {
      output.textContent = number + " — парне число.";
      output.style.color = "green";
    } else {
      output.textContent = number + " — непарне число.";
      output.style.color = "red";
    }
}

function generatePassword(name, number) {
  const partName = name.substring(0, 3).toLowerCase(); 
  const numPart = number * 2;                       
  const password = partName + numPart;                

  const block = document.getElementById("passwordBlock");
  block.textContent = "Ваш пароль: " + password;
}

function calculateAverage() {
    const grades = [];
    for (let i = 1; i <= 3; i++) {
        const grade = parseFloat(prompt(`Введіть оцінку ${i}:`));
        if (isNaN(grade)) {
            alert("Будь ласка, введіть число!");
            return;
        }
        grades.push(grade);
    }
    const sum = grades.reduce((acc, val) => acc + val, 0);
    const average = sum / grades.length;
    const averageBlock = document.getElementById("averageBlock");
    averageBlock.textContent = `Середнє оцінок: ${average.toFixed(2)}`;
}

function inputStudents() {
    const studentCount = parseInt(prompt("Введіть кількість студентів у групі:"));

    if (isNaN(studentCount) || studentCount <= 0) {
        alert("Будь ласка, введіть правильне число!");
        return;
    }
    const container = document.getElementById("studentOutput");
    for (let i = 1; i <= studentCount; i++) {
        const lastName = prompt(`Введіть прізвище студента ${i}:`).trim();
        const firstName = prompt(`Введіть ім'я студента ${i}:`).trim();

        const studentDiv = document.createElement("div");
        studentDiv.textContent = `Студент ${i}: ${lastName} ${firstName}`;
        container.appendChild(studentDiv);
    }
}

const myName = "Zahar";
const myNumber = 19;

checkEvenOdd(myNumber);
generatePassword(myName, myNumber);
calculateAverage();
inputStudents();

