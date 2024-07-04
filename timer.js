
function display() {
    timer();
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    function timer() {
        const interval = setInterval(() => {
            if (seconds == 60) {
                minute++
                if(minute==60){
                    hour++
                }
                seconds=0
                clearInterval(interval);
                timer()
            } else {
                seconds++;
            }
            document.getElementById('seconds').innerHTML = seconds
            document.getElementById('minute').innerHTML = minute
            document.getElementById('hour').innerHTML = hour

        }, 1000);
    }










}



