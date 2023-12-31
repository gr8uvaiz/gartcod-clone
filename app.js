const colors = ['#d4d4d4', '#fde047', '#fca5a5'];
let colorIndex = 0;
const img = document.getElementById('img-change');

function changeColor(){
    document.documentElement.style.setProperty('--change-color',colors[colorIndex] )
    if(img.src == 'http://127.0.0.1:5500/assets/two.svg'){
        img.src = 'http://127.0.0.1:5500/assets/chrome.png'
    }
    else{
        img.src = 'http://127.0.0.1:5500/assets/two.svg'
    }
    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(() => {
    changeColor(); 
}, 1700);



function updateTimer() {
    const date = new Date();
    const days = 31;
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()


    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

}

setInterval(updateTimer, 1000);

updateTimer();

