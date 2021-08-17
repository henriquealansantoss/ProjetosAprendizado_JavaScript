// apoio
const dqs = (q) => document.querySelector(q);
const dqsl = (q) => document.querySelectorAll(q);
const cl = (w) => console.log(w);

// 
const images = [
    'angular.svg',
    'aurelia.svg',
    'backbone.svg',
    'ember.svg',
    'react.svg',
    'vue.svg'
];

let cardHTML = '';
let lockCard = false;

// rederizando
images.forEach(img => {
    cardHTML += `
    <div class="memory-card" data-card="${img}">
        <img class="front-face" src="images/${img}">
        <img class="back-face" src="images/js-badge.svg">
    </div>
    `
});

const cardboard = dqs("#cardboard");
cardboard.innerHTML = cardHTML + cardHTML;

let firstCard, secondCard;

function flipCard() {
    if(lockCard) return false;

    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;

        return false;
    }

    secondCard = this;

    checkForMath();
}

const cards = dqsl('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

function checkForMath() {
    let isMath = firstCard.dataset.card === secondCard.dataset.card;

    !isMath ? disableCard() : resetCards(isMath);
}

function disableCard() {
    lockCard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetCards();
    }, 1000);

}

(function shuffle(){
    cards.forEach(card =>{
        let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    })
})();

function resetCards(isMath = false){
    if(isMath){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
    [firstCard,secondCard, lockCard] = [null, null, false];
}