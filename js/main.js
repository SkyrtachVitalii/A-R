const targetDate = new Date("September 06, 2024 08:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Час вийшов!";
    }
}, 1000);



function clickTg() {
    let telegtamImg = document.getElementById('telegram');
    let telegtamImg__white = document.getElementById('telegram_white');
    telegtamImg.classList.remove("active");
    telegtamImg.classList.add("none")
    telegtamImg__white.classList.remove("none");
    telegtamImg__white.classList.add("active");

    setTimeout(() => {
        telegtamImg.classList.add("active");
        telegtamImg.classList.remove("none");
        telegtamImg__white.classList.add("none");
        telegtamImg__white.classList.remove("active");
    }, 1000);

}