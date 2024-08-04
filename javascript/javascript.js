const questions = [
    {
        question: "HTML stands for?",
        options: ["HighText Machine Language", "HyperText and links Markup Language","HyperText Markup Language"],
        answer: 2
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is-",
        options: ["Head, Title, HTML, body", "HTML, Head, Title, Body","HTML, Head, Title, Body"],
        answer: 2
    },
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        options: ["b", "pre","a"],
        answer: 0
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        options: ["pre", "br","b"],
        answer: 1
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        options: ["li", "i","ul"],
        answer: 1
    }
];

let currentQuestion = 0;
let answers = new Array(questions.length);

document.getElementById("question").innerHTML = questions[currentQuestion].question;
document.getElementById("option1").nextElementSibling.innerHTML = questions[currentQuestion].options[0];
document.getElementById("option2").nextElementSibling.innerHTML = questions[currentQuestion].options[1];
document.getElementById("option3").nextElementSibling.innerHTML = questions[currentQuestion].options[2];

document.getElementById("submit").addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answerIndex = selectedOption.id === "option1" ? 0 : 1;
        answers[currentQuestion] = answerIndex;
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        document.getElementById("option1").nextElementSibling.innerHTML = questions[currentQuestion].options[0];
        document.getElementById("option2").nextElementSibling.innerHTML = questions[currentQuestion].options[1];
        document.getElementById("option3").nextElementSibling.innerHTML = questions[currentQuestion].options[2];
        document.getElementById("previous").disabled = false;
        if (currentQuestion === questions.length - 1) {
            document.getElementById("next").disabled = true;
            document.getElementById("submit").disabled = true;
        }
    }
});

document.getElementById("previous").addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        document.getElementById("option1").nextElementSibling.innerHTML = questions[currentQuestion].options[0];
        document.getElementById("option2").nextElementSibling.innerHTML = questions[currentQuestion].options[1];
        document.getElementById("option3").nextElementSibling.innerHTML = questions[currentQuestion].options[2];
        document.getElementById("next").disabled = false;
        document.getElementById("submit").disabled = false;
        if (currentQuestion === 0) {
            document.getElementById("previous").disabled = true;
        }
    }
});