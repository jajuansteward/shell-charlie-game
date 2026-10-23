
let prize = Math.floor(Math.random() * 3);
let score = 0;
let played = false;

function chooseShell(choice) {
    if (played) return;

    played = true;

    const shells = document.querySelectorAll(".shell");
    const message = document.getElementById("message");
    const scoreDisplay = document.getElementById("score");

    if (choice === prize) {
        message.textContent = "You WIN! You found the prize!";
        score++;
    } else {
        message.textContent =
            "Sorry! The prize was under shell " + (prize + 1) + ".";
    }

    shells[prize].textContent = "🎁 " + (prize + 1);

    if (choice !== prize) {
        shells[choice].style.backgroundColor = "crimson";
    }

    shells[prize].style.backgroundColor = "lightblue";
    scoreDisplay.textContent = "Score: " + score;
}

function resetGame() {
    prize = Math.floor(Math.random() * 3);
    played = false;

    document.getElementById("message").textContent =
        "Choose a shell to play.";

    document.querySelectorAll(".shell").forEach((shell, index) => {
        shell.innerHTML = "🥥<br>" + (index + 1);
        shell.style.backgroundColor = "";
    });
}
