let level = 1;
let health = 100;
let correctAnswer = "";
let userAnswer = "";
let colors = ["red", "blue", "green", "yellow", "purple"];
let currentCats = [];

function startGame() {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    startLevel();
}

function startLevel() {
    document.getElementById('level').innerText = level;
    currentCats = generateCats(level);
    displayCats(currentCats);
    setTimeout(() => {
        hideCats();
    }, 10000); // Wait 10 seconds before hiding the cats
}

function generateCats(count) {
    let cats = [];
    for (let i = 0; i < count; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        cats.push({ id: i, color: color });
    }
    correctAnswer = cats[cats.length - 1].color; // The color of the last cat is the answer
    return cats;
}

function displayCats(cats) {
    const container = document.getElementById('catsContainer');
    container.innerHTML = ""; // Clear the container
    cats.forEach(cat => {
        const catElement = document.createElement('img');
        catElement.src = `images/cat_${cat.color}.png`;
        container.appendChild(catElement);
    });
}

function hideCats() {
    document.getElementById('catsContainer').innerHTML = "What was the color of the last cat?";
}

function submitAnswer() {
    const userAnswer = prompt("Enter the color of the last cat:");
    checkAnswer(userAnswer.toLowerCase());
}

function checkAnswer(answer) {
    if (answer === correctAnswer) {
        displayResult("Correct! 🎉", "success");
        level++;
    } else {
        health -= 10;
        document.getElementById('health').innerText = health;
        if (health <= 0) {
            displayResult("Game Over! 💔", "fail");
            restartGame();
            return;
        } else {
            displayResult("Wrong! 😿", "fail");
        }
    }
    startLevel();
}

function displayResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = message;
    resultDiv.style.color = type === "success" ? "green" : "red";
}

function restartGame() {
    level = 1;
    health = 100;
    document.getElementById('health').innerText = health;
    startGame();
}