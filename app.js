function check() {


    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "kinshasa") {
        correct++;
    }
    if (question2 == "pretoria") {
        correct++;
    }
    if (question3 == "bangui") {
        correct++
    }

    var messages = ["Good job", "Not bad", "You really need to do better"];
    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";


    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";

}

// reflesh page function

function myFunction() {
    location.reload();
}


function check() {


    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "kinshasa") {
        correct++;
    }
    if (question2 == "hartfort") {
        correct++;
    }
    if (question3 == "albany") {
        correct++
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";

}