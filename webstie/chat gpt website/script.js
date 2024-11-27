let currentQuestion = 1;
const totalQuestions = 6;

function showQuestion(number) {
    document.querySelectorAll('.question').forEach((q, index) => {
        q.style.display = (index + 1 === number) ? 'block' : 'none';
    });

    // Update buttons and progress bar
    document.getElementById('prevButton').disabled = (number === 1);
    document.getElementById('nextButton').style.display = (number === totalQuestions) ? 'none' : 'inline-block';
    document.getElementById('submitButton').style.display = (number === totalQuestions) ? 'inline-block' : 'none';

    updateProgress(number);
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}
let userAnswers = {};

function selectOption(question, answer) {
    userAnswers[question] = answer;
    highlightSelectedOption(question, answer);
}

function highlightSelectedOption(question, answer) {
    document.querySelectorAll(`.question#${question} .option`).forEach(option => {
        if (option.textContent.trim() === answer) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}


function updateProgress(questionNumber) {
    const progressIndicator = document.getElementById('progressIndicator');
    const progressWidth = (questionNumber / totalQuestions) * 100;
    progressIndicator.style.width = `${progressWidth}%`;
}

function showSuggestion() {
    const suggestionBox = document.getElementById("suggestion");
    const suggestionText = document.getElementById("suggestionText");
    suggestionText.textContent = "Here is your suggested laptop based on your preferences!";
    suggestionBox.style.display = 'block';
}

showQuestion(currentQuestion);





function selectOption(question, answer) {
    userAnswers[question] = answer;
    document.querySelectorAll(`.question#${question} img`).forEach(img => {
        if (img.alt === answer) {
            img.classList.add('selected');
        } else {
            img.classList.remove('selected');
        }
    });
}



function goToQuestion(questionNumber) {
    const questionSection = document.getElementById(`question${questionNumber}`);
    if (questionSection) {
        questionSection.scrollIntoView({ behavior: 'smooth' });
    }
}