let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let sec = document.querySelector('#seconds');
let min = document.querySelector('#minutes');
let hour = document.querySelector('#hours');

let interval = null;
let s = 0;
let m = 0;
let h = 0;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);


function start(){
    if(!interval){
    interval = setInterval(increment, 1000); //to update every second
    }
}
function increment(){
    s++;
    if(s === 60){
        s = 0;
        m++;
    }
    if(m === 60){
        m = 0;
        h++;
    }

    sec.textContent = s.toString().padStart(2, '0');
    min.textContent = m.toString().padStart(2, '0');
    hour.textContent = h.toString().padStart(2, '0');
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    s = 0;
    m = 0;
    h = 0;

    sec.textContent = s.toString().padStart(2, '0');
    min.textContent = m.toString().padStart(2, '0');
    hour.textContent = h.toString().padStart(2, '0');
    
}