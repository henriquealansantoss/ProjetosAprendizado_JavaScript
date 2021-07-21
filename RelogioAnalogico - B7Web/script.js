let digitalElement = document.querySelector('.digital');

let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateTime() {
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    digitalElement.innerHTML = `${fixedZero(hour)}:${fixedZero(minute)}:${fixedZero(second)}`


    // analógico
    let sDeg = (360/60) * second - 90;
    let mDeg = (360/60) * minute - 90;
    let hDeg = (360/12) * hour - 90;

    secondElement.style.transform = `rotate(${sDeg}deg)`;
    minuteElement.style.transform = `rotate(${mDeg}deg)`;
    hourElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixedZero(time){
    return (time < 10) ? '0'+time : time;
}


setInterval(updateTime, 1000);
// para resolver Bug ao atualizar
updateTime();



/* 
    circulo = 360 graus
    segundo = 60
    360/60 = 6;

    let sDeg = (360/60) * second - 90;

*/