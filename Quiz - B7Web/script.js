// initial Data
let currentQuestion = 0;
let correctAnswers = 0;
let numQuestion = currentQuestion + 1;
showQuestion();

//event
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

// functions 
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];


        document.querySelector('.title').innerHTML = `Question - ${numQuestion++}`;


        let porcent = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${porcent}%`;


        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';


        document.querySelector('.question').innerHTML = q.question;
        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op ="${i}" class="option"> <span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;


        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        });

    } else {
        finishQuiz();
    }

}


function optionClickEvent(e) {
    let clickOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer === clickOption) {
        correctAnswers++;
    } else {

    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let point = Math.floor((correctAnswers / questions.length) * 100);

    if (point < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim em ?!?';
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if (point >= 30 && point < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom!';
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if (point >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }


    document.querySelector('.scorePct').innerHTML = `Acertou ${point}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

    document.querySelector('.progress--bar').style.width = `100%`;
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.title').style.display = 'none';

}

function resetEvent() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}