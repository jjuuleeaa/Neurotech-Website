let level = 1;
let catColors = ["red", "blue", "green", "yellow", "purple", "orange"];
let currentCatColor;
let health = 3;

function startGame() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    loadLevel();
}

function loadLevel() {
    document.getElementById('level').innerText = level;
    let randomIndex = Math.floor(Math.random() * catColors.length);
    currentCatColor = catColors[randomIndex];

    // Display cat image (for simplicity, use colored divs or images)
    let catContainer = document.getElementById('cat-container');
    catContainer.innerHTML = `<div style="background-color: ${currentCatColor}; width: 150px; height: 150px; border-radius: 10px;"></div>`;

    setTimeout(() => {
        catContainer.innerHTML = '';  // Hide the cat color after 10 seconds
    }, 10000);  // Change 10000 for 10 seconds
}

function checkAnswer() {
    let userAnswer = document.getElementById('cat-answer').value.toLowerCase();
    if (userAnswer === currentCatColor) {
        document.getElementById('game-area').style.display = 'none';
        document.getElementById('success-screen').style.display = 'block';
    } else {
        health--;
        if (health > 0) {
            document.getElementById('game-area').style.display = 'none';
            document.getElementById('fail-screen').style.display = 'block';
        } else {
            // Game over logic
            alert('Game Over! Try again.');
            restartGame();
        }
    }
}

function nextLevel() {
    level++;
    document.getElementById('success-screen').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    loadLevel();
}

function restartGame() {
    level = 1;
    health = 3;
    document.getElementById('fail-screen').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    loadLevel();
}