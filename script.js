const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = ["+", "-", "*", "÷", "π", "="];
const particles = [];

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 10; // Size of the symbol
        this.speedX = Math.random() * 2 - 1; // Horizontal speed
        this.speedY = Math.random() * 2 - 1; // Vertical speed
        this.rotation = Math.random() * Math.PI * 2; // Initial rotation
        this.rotationSpeed = Math.random() * 0.02 - 0.01; // Speed of rotation
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.opacity = Math.random() * 0.5 + 0.5; // Opacity for fading effect
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fillText(this.symbol, 0, 0);
        ctx.restore();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Wrap around the screen edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
}

// Initialize particles
function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

// Animate particles
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start the animation
init();
animate();

// Quiz Game Logic
const questionArea = document.getElementById("questionArea");
const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const submitButton = document.getElementById("submitButton");
const skipButton = document.getElementById("skipButton");
const difficultySelect = document.getElementById("difficulty");
const timerSelect = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const timeLeftElement = document.getElementById("timeLeft");
const highScoreElement = document.getElementById("highScore");

let score = 0;
let timeLeft = 0;
let interval = null;
let currentQuestion = null;
let skipsLeft = 3;
let highScore = localStorage.getItem("highScore") || 0;
let gameOver = false; // Prevent multiple game over triggers

// Utility Functions
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion(difficulty) {
    let num1, num2, operator, question, answer;

    if (difficulty === "easy") {
        num1 = getRandomNumber(11, 99);
        num2 = getRandomNumber(11, 99);
        operator = Math.random() < 0.5 ? "+" : "-";
    } else if (difficulty === "medium") {
        num1 = getRandomNumber(101, 999);
        operator = ["+", "-", "/"][getRandomNumber(0, 2)];
        num2 = operator === "/" ? getRandomNumber(1, 9) : getRandomNumber(101, 999);
    } else if (difficulty === "hard") {
        num1 = getRandomNumber(1001, 9999);
        operator = ["+", "-", "/", "*"][getRandomNumber(0, 3)];
        num2 = operator === "/" ? getRandomNumber(2, 30) : getRandomNumber(1001, 9999);
    }

    question = `${num1} ${operator} ${num2}`;
    answer = Math.round(eval(question) * 100) / 100; // Rounded for division

    return { question, answer };
}

function updateQuestion() {
    const difficulty = difficultySelect.value;
    currentQuestion = generateQuestion(difficulty);
    questionElement.textContent = currentQuestion.question;
    answerInput.value = "";
}

function updateTimer() {
    if (timeLeft <= 0 && !gameOver) {
        clearInterval(interval);
        endGame();
    } else if (timeLeft > 0) {
        timeLeft--;
        timeLeftElement.textContent = `${Math.floor(timeLeft / 60)}:${String(
            timeLeft % 60
        ).padStart(2, "0")}`;
    }
}

function endGame() {
    gameOver = true; // Mark game over
    questionArea.classList.add("hidden");
    restartButton.classList.remove("hidden");
    alert(`Time's up! Your final score is ${score}`);
    // Update high score if necessary
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        alert(`Congratulations! New High Score: ${highScore}`);
    }
}

// Event Listeners
startButton.addEventListener("click", () => {
    gameOver = false; // Reset game over state
    score = 0;
    skipsLeft = 3;
    scoreElement.textContent = score;

    timeLeft = parseInt(timerSelect.value);
    timeLeftElement.textContent = `${Math.floor(timeLeft / 60)}:${String(
        timeLeft % 60
    ).padStart(2, "0")}`;

    startButton.classList.add("hidden");
    restartButton.classList.add("hidden");
    questionArea.classList.remove("hidden");
    interval = setInterval(updateTimer, 1000);

    updateQuestion();
});

restartButton.addEventListener("click", () => {
    clearInterval(interval);
    startButton.click(); // Restart the game
});

submitButton.addEventListener("click", () => {
    const userAnswer = parseFloat(answerInput.value);

    if (userAnswer === currentQuestion.answer) {
        score++;
        scoreElement.textContent = score;
        updateQuestion();
    } else {
        alert("Wrong Answer! Try again.");
    }
});

skipButton.addEventListener("click", () => {
    if (skipsLeft > 0) {
        skipsLeft--;
        updateQuestion();
        alert(`Skipped! Skips left: ${skipsLeft}`);
    } else {
        alert("No skips left!");
    }
});

// Display High Score
highScoreElement.textContent = `High Score: ${highScore}`;
