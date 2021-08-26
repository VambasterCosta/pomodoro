const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const button_event = document.getElementById("event");
const text_finish = "Parabéns - Hora de relaxar!!";

const min_init = 25;
const sec_init = "00";

var start_sond = new Audio("sounds/click.mp3");
var finish_sond = new Audio("sounds/bell.mp3");


function init_dom() {
    minutes.innerHTML = min_init;
    seconds.innerHTML = sec_init;
}

function start() {
    var min = min_init;
    var sec = sec_init;
    start_sond.play();


    var count_section = setInterval(count, 1000);

    function count() {
        if (min == 0 && sec == 0) {

            document.title = text_finish;
            document.getElementById("alert").innerHTML = text_finish;
            document.getElementById("alert").style.visibility = "visible";

            clearInterval(count_section);
            finish_sond.play();

        } else {
            if (sec > 0) {
                sec--;
            } else if (sec == 0 && min > 0) {
                min--;
                sec = 59;
            }
            document.title = "(" + completeNumber(min) + ":" + completeNumber(sec) + ") - Foco Ativado";
            seconds.innerHTML = completeNumber(sec);
            minutes.innerHTML = completeNumber(min);
        }

    }

}

function completeNumber(num) {
    if (num <= 9) {
        return "0" + num;
    } else {
        return num;
    }
}

function stop() {

    location.reload();

}