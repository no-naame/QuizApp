const quizData = [
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Preprocessor',
        b: 'Hyper Text Markup Language',
        c: 'Hyper Text Multiple Language',
        d: 'Hyper Tool Multi Language',
        answer: 'b',
    },
    {
        question: 'What does CSS stand for?',
        a: 'Common Style Sheet',
        b: 'Colorful Style Sheet',
        c: 'Computer Style Sheet',
        d: 'Cascading Style Sheet',
        answer: 'd',
    },
    {
        question: 'What does PHP stand for?',
        a: 'Hypertext Preprocessor',
        b: 'Hypertext Programming',
        c: 'Hypertext Preprogramming',
        d: 'Hometext Preprocessor',
        answer: 'a',
    },
    {
        question: 'What does SQL stand for?',
        a: 'Stylish Question Language',
        b: 'Stylesheet Query Language',
        c: 'Statement Question Language',
        d: 'Structured Query Language',
        answer: 'd',
    },
    {
        question: 'What does XML stand for?',
        a: 'eXtensible Markup Language',
        b: 'eXecutable Multiple Language',
        c: 'eXTra Multi-Program Language',
        d: 'eXamine Multiple Language',
        answer: 'a',
    },
];


const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;
    quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEl.forEach((answerEls) => {
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    });
    return answer;
}

btnSubmit.addEventListener("click", function () {
    const answers = getSelected();

    if (answers) {
        if (answers === quizData[currentQuiz].answer) {
            score++;
        }
        nextQuestion();
    }
});

function nextQuestion() {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
        footerEl.style.display = "none";
    }
}
