const colors = ['#d4d4d4', '#fde047', '#fca5a5'];
let colorIndex = 0;
const img = document.getElementById('img-change');
const hostname = location.hostname != '127.0.0.1'; // it means hostname is in production
function changeColor(){
    document.documentElement.style.setProperty('--change-color',colors[colorIndex] )
    console.log(location.hostname)
    console.log(img.src)
    if(hostname){
        if(img.src == `https://gartcod-clone.vercel.app/assets/two.svg`){
            img.src = 'https://gartcod-clone.vercel.app/assets/chrome.png'
        }
        else{
            img.src = 'https://gartcod-clone.vercel.app/assets/two.svg'   
        }
    }
    else{
        if(img.src == `http://127.0.0.1:5500/assets/two.svg`){
            img.src = 'http://127.0.0.1:5500/assets/chrome.png'
        }
        else{
            img.src = 'http://127.0.0.1:5500/assets/two.svg'   
        }
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

