let fInput = document.getElementById("fahrenheit");
let cInput = document.getElementById("celsius");

fInput.addEventListener("input", function () {
    let f = parseFloat(fInput.value);
    if (!isNaN(f)) {
        cInput.value = (5/9 * (f - 32)).toFixed(2);
    } else {
        cInput.value = "";
    }
});

cInput.addEventListener("input", function () {
    let c = parseFloat(cInput.value);
    if (!isNaN(c)) {
        fInput.value = (c * 9/5 + 32).toFixed(2);
    } else {
        fInput.value = "";
    }
});



let correctCount = 0;
let totalCount = 0;

let taskText = document.getElementById("task");
let answerInput = document.getElementById("answer");
let resultText = document.getElementById("result");
let scoreText = document.getElementById("score");

let nextBtn = document.getElementById("nextBtn");
let checkBtn = document.getElementById("checkBtn");

let a, b, correctAnswer;

function newTask() {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    correctAnswer = a * b;

    taskText.textContent = a + " × " + b + " = ";
    answerInput.value = "";
    resultText.textContent = "";
}
newTask();

checkBtn.onclick = function() {
    let userAnswer = parseInt(answerInput.value);
    totalCount = totalCount + 1;

    if (userAnswer === correctAnswer) {
        correctCount = correctCount + 1;
        resultText.textContent = "Правильно!";
    } else {
        resultText.textContent = "Помилка, правильна відповідь «" + correctAnswer + "»";
    }

    let percent = Math.round((correctCount / totalCount) * 100);
    scoreText.textContent = "Загальний рахунок: " + percent + "% (" + correctCount + " правильних відповідей з " + totalCount + ")";
};

nextBtn.onclick = function() {
    newTask();
};



let taskText2 = document.getElementById("task2");
let optionsDiv = document.getElementById("options");
let resultText2 = document.getElementById("result2");
let scoreText2 = document.getElementById("score2");
let nextBtn2 = document.getElementById("nextBtn2");

let correctCount2 = 0;
let totalCount2 = 0;
let a2, b2, correctAnswer2;

function newTask2() {
    a2 = Math.floor(Math.random() * 10) + 1;
    b2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer2 = a2 * b2;

    taskText2.textContent = a2 + " × " + b2 + " = ";

    while (optionsDiv.firstChild) {
        optionsDiv.removeChild(optionsDiv.firstChild);
    }

    let answers = [
        correctAnswer2,
        correctAnswer2 + 1,
        correctAnswer2 + 2,
        correctAnswer2 - 1
    ];

    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = answers[i];
        answers[i] = answers[j];
        answers[j] = tmp;
    }

    for (let i = 0; i < answers.length; i++) {
        let opt = document.createElement("input");
        opt.type = "radio";
        opt.name = "ans";
        opt.value = answers[i];

        let lbl = document.createElement("label");
        lbl.textContent = " " + answers[i];

        optionsDiv.appendChild(opt);
        optionsDiv.appendChild(lbl);
        optionsDiv.appendChild(document.createElement("br"));

        opt.onclick = function() {
            totalCount2++;
            if (parseInt(this.value) === correctAnswer2) {
                correctCount2++;
                resultText2.textContent = "Правильно!";
            } else {
                resultText2.textContent = "Помилка, правильна відповідь «" + correctAnswer2 + "»";
            }

            scoreText2.textContent = "Загальний рахунок: " +
                Math.round(correctCount2 / totalCount2 * 100) + "% (" +
                correctCount2 + " правильних відповідей з " + totalCount2 + ")";
        };
    }

    resultText2.textContent = "";
}

newTask2();

nextBtn2.onclick = function() {
    newTask2();
};


let imagesArray = [
    {path: 'images/tree1.jpg', title: 'Дуб', description: 'Могутнє довговічне дерево'},
    {path: 'images/tree2.jpg', title: 'Береза', description: 'Струнке дерево зі світлою корою'},
    {path: 'images/tree3.jpg', title: 'Сосна', description: 'Хвойне дерево'}
];

function initPhotoRotator(id, arr) {
    let d = document.getElementById(id);
    let i = 0;
    let title = document.createElement('div');
    let img = document.createElement('img');
    let text = document.createElement('div');
    let back = document.createElement('a');
    let next = document.createElement('a');

    back.textContent = 'Назад';
    next.textContent = 'Вперед';
    back.href = '#';
    next.href = '#';

    function show() {
        title.textContent = "Фотографія " + (i+1) + " з " + arr.length;
        img.src = arr[i].path;
        text.innerHTML = arr[i].title + "<br>" + arr[i].description;
        back.style.visibility = i===0 ? "hidden" : "visible";
        next.style.visibility = i===arr.length-1 ? "hidden" : "visible";
    }

    back.onclick = function() { i--; show(); return false; };
    next.onclick = function() { i++; show(); return false; };

    d.appendChild(title);
    d.appendChild(back);
    d.appendChild(img);
    d.appendChild(next);
    d.appendChild(text);

    show();
}

initPhotoRotator('rotator', imagesArray);


const digits = {
    "0": [
        "111",
        "101",
        "101",
        "101",
        "111"
    ],
    "1": [
        "010",
        "110",
        "010",
        "010",
        "111"
    ],
    "2": [
        "111",
        "001",
        "111",
        "100",
        "111"
    ],
    "3": [
        "111",
        "001",
        "110",
        "001",
        "111"
    ],
    "4": [
        "101",
        "101",
        "111",
        "001",
        "001"
    ],
    "5": [
        "111",
        "100",
        "111",
        "001",
        "111"
    ],
    "6": [
        "111",
        "100",
        "111",
        "101",
        "111"
    ],
    "7": [
        "111",
        "001",
        "010",
        "010",
        "010"
    ],
    "8": [
        "111",
        "101",
        "111",
        "101",
        "111"
    ],
    "9": [
        "111",
        "101",
        "111",
        "001",
        "111"
    ]
};

let captchaNumber = "";
initCaptcha(2); 

function initCaptcha(length) {
    captchaNumber = "";
    const captchaDiv = document.getElementById("captcha");
    captchaDiv.innerHTML = "";

    for (let i = 0; i < length; i++) {
        let digit = Math.floor(Math.random() * 10).toString();
        captchaNumber += digit;

        let digitDiv = document.createElement("div");
        digitDiv.className = "captcha-digit";

        digits[digit].forEach(row => {
            row.split("").forEach(px => {
                let span = document.createElement("span");
                span.className = "pixel";
                if (px === "0") span.style.background = "transparent";
                digitDiv.appendChild(span);
            });
            digitDiv.appendChild(document.createElement("br"));
        });

        captchaDiv.appendChild(digitDiv);
    }
}

function checkCaptcha() {
    let userValue = document.getElementById("userInput").value;
    let result = document.getElementById("captchaResult");

    if (userValue === captchaNumber) {
        result.textContent = "Правильно";
        result.style.color = "green";
    } else {
        result.textContent = "Помилка";
        result.style.color = "red";
    }
}



