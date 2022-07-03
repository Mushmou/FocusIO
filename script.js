var startingMinutes = 1;
var time = startingMinutes * 60;

var minutes = Math.floor(time/60);
var seconds = time % 60;

const countdown = document.getElementById('countdown');
countdown.innerHTML = `${minutes} : 00`

function pomodoro(){
    startingMinutes = 25;
    time = startingMinutes * 60;
    minutes = Math.floor(time/60);
    seconds = time % 60;
    countdown.innerHTML = `${minutes} : 00`
}

function short(){
    startingMinutes = 5;
    time = startingMinutes * 60;
    minutes = Math.floor(time/60);
    seconds = time % 60;
    countdown.innerHTML = `${minutes} : 00`
}

function long(){
    startingMinutes = 10;
    time = startingMinutes * 60;
    minutes = Math.floor(time/60);
    seconds = time % 60;
    countdown.innerHTML = `${minutes} : 00`
}

var playing = true;

function stopTime(){
    alert("Stopped Time")
    playing = false;
}



function start(){
    temp = setInterval(updateCountdown, 1000);
    function updateCountdown(){
        minutes = Math.floor(time/60);
        seconds = time % 60;
        if (seconds != 0){
            countdown.innerHTML = `${minutes} : ${seconds}`
        }
        else{
            countdown.innerHTML = `${minutes} : 0${seconds}`
        }
        time --;

        if (time < 0){
            clearInterval(temp)
        }

        if (playing == false){
            
        }

    }

}
