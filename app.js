let time = 30
let myTimer;
let correct = 0;
let unanswered = 0;
let incorrect = 0;

function startTimer () {
    timer = setInterval(function() {
        time--
        document.getElementById("timer").innerText = `Time Left: ${time}`
        if(time == 0){
            end()
        }
    }, 1000);
}

function resetTimer() {
    window.clearInterval(1);
    time = 30;
}

function end (event) {
    resetTimer()
    if(event != null){
        event.preventDefault();
    }
    for(i = 1; i <= 5; i++){
        if ($(`input[name=fish${i}]:checked`).length == 0) {
            unanswered++
        }
    }
    for(i=1; i <= 5; i++){
        let x = document.getElementById(`true${i}`).checked
        console.log(x);
        if(x == true){
            correct++;
        }
    }
    incorrect = 5 - unanswered - correct;
    console.log(correct, "correct")
    console.log(incorrect, "incorrect")
    console.log(unanswered, "unanswered")
    showEndScreen()
}

function showEndScreen () {
    document.getElementById("correct").innerText = `Correct: ${correct}`;
    document.getElementById("incorrect").innerText = `Incorrect: ${incorrect}`;
    document.getElementById("unanswered").innerText = `Unanswered: ${unanswered}`;
    document.getElementById("results").style.display = "inherit"
    document.getElementById("game").style.display = "none"
}

function start() {
    resetTimer();
    startTimer();
    document.getElementById("game").style.display = "inherit";
    document.getElementById("start").style.display = "none";
}
//'input[name=fish1]:checked'
