
let cat = document.getElementById("cat");
let obstacle = document.getElementById("obstacle");
let scoreText = document.getElementById("score");

let score = 0;
let gameOver = false;
let position = 600;

function jump() {
    if (gameOver) return;

    if (!cat.classList.contains("jump")) {
        cat.classList.add("jump");

        setTimeout(() => {
            cat.classList.remove("jump");
        }, 500);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

let game = setInterval(function() {

    if (gameOver) return;

    position -= 5;
    obstacle.style.left = position + "px";

    if (position < 80 && position > 20) {
        let catBottom = parseInt(
            getComputedStyle(cat).bottom
        );

        if (catBottom < 70) {
            gameOver = true;
            alert("Game Over! Your Score: " + score);
        }
    }

    if (position < -40) {
        position = 600;
        score++;
        scoreText.innerText = score;
    }

}, 30);

function restart() {
    score = 0;
    position = 600;
    gameOver = false;

    scoreText.innerText = score;
    obstacle.style.left = "600px";
    cat.classList.remove("jump");
}
