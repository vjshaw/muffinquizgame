const questions = [
  {
    question: "What is Muffin Mouth's favorite food?",
    answers: { A: "Cupcakes", B: "Crypto-coins", C: "Blueberries", D: "Pizza" },
    correct: "B"
  },
  {
    question: "What is a cryptocurrency?",
    answers: { A: "Digital money", B: "A type of muffin", C: "A stock", D: "A bank" },
    correct: "A"
  },
  {
    question: "What’s the mission of Muffin Mouth?",
    answers: {
      A: "Teach about healthy eating",
      B: "Educate about cryptocurrency",
      C: "Promote muffins",
      D: "Win a baking contest"
    },
    correct: "B"
  }
];

let score = 0;
let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-button");
const scoreElement = document.getElementById("score");
const leaderboard = document.getElementById("leaderboard");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answerButtons.forEach((button) => {
    const choice = button.getAttribute("data-choice");
    button.textContent = currentQuestion.answers[choice];
    button.onclick = () => checkAnswer(choice);
  });
}

function checkAnswer(choice) {
  const currentQuestion = questions[currentQuestionIndex];

  if (choice === currentQuestion.correct) {
    score += 10;
    scoreElement.textContent = score;
    alert("Correct!");
  } else {
    alert("Wrong answer!");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  questionElement.textContent = "Quiz Over! Thanks for playing!";
  document.getElementById("answers").style.display = "none";
  updateLeaderboard();
}

function updateLeaderboard() {
  const playerName = prompt("Enter your name for the leaderboard:");
  const entry = document.createElement("li");
  entry.textContent = `${playerName}: ${score}`;
  leaderboard.appendChild(entry);
}

// Start the quiz
displayQuestion();
