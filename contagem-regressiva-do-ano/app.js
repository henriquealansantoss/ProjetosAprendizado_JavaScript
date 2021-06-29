//// ------------  codigo inicialmente criado

// const secondsContainer = document.querySelector('#seconds')
// const minutesContainer = document.querySelector('#minutes')
// const hoursContainer = document.querySelector('#hours')
// const daysContainer = document.querySelector('#days')
// const nextYearContainer = document.querySelector('#year')
// const spinnerLoading = document.querySelector('#loading')
// const countdownContainer = document.querySelector('.countdown')

// const nextYear = new Date().getFullYear() + 1;
// const newYearTime = new Date(`JAnuary 01 ${nextYear} 00:00:00`);

// nextYearContainer.textContent = nextYear;


// const updateCountdown = () => {
//     /*quantidade de milissegudos que 
//     falta para chegar nas 0 horas do próximo ano*/
//     const currentTime = new Date();
//     // decremento milissegundos
//     const difference = newYearTime - currentTime

//     //calculando milissegundos para obter dias, horas, minutos e segundos 
//     const days = Math.floor(difference / 1000 / 60 / 60 / 24)
//     const hours = Math.floor(difference / 1000 / 60 / 60) % 24
//     const minutes = Math.floor(difference / 1000 / 60) % 60
//     const seconds = Math.floor(difference / 1000) % 60

//     secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
//     minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
//     hoursContainer.textContent = hours < 10 ? '0' + hours : hours
//     daysContainer.textContent = days < 10 ? '0' + days : days
// }

// setTimeout(() => {
//     spinnerLoading.remove();
//     countdownContainer.style.display = 'flex';
// }, 1000)

// setInterval(updateCountdown, 1000);



//// ------------ codigo melhorado

const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('.countdown')

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`${nextYear}`);

nextYearContainer.textContent = nextYear;


const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({
    days,
    hours,
    minutes,
    seconds
}) => {

    secondsContainer.textContent = getTimeUnit(seconds);
    minutesContainer.textContent = getTimeUnit(minutes);
    hoursContainer.textContent = getTimeUnit(hours);
    daysContainer.textContent = getTimeUnit(days);
}

const updateCountdown = () => {
    /*quantidade de milissegudos que 
    falta para chegar nas 0 horas do próximo ano*/
    const currentTime = new Date();
    // decremento milissegundos
    const difference = newYearTime - currentTime
    //calculando milissegundos para obter dias, horas, minutos e segundos 
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    // melhorando o entendimento do código
    insertCountdownValues({
        days,
        hours,
        minutes,
        seconds
    });

}

// melhorando o entendimento do código
const handleCountdownDisplay = () => {
    spinnerLoading.remove();
    countdownContainer.style.display = 'flex';
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000);