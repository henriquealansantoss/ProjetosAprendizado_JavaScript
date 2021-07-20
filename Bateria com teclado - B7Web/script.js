document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
})

let buttonTocar = document.querySelector('.composer button');
buttonTocar.addEventListener('click', () => {
    let song = document.querySelector('#input').value
    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray)
    }
})

let playSound = (sound) => {
    let audioElement = document.querySelector(`#s_${sound}`);

    activeKey(sound);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
}

let activeKey = (sound) => {
    let KeyElement = document.querySelector(`div[data-key=${sound}]`);
    if (KeyElement) {
        KeyElement.classList.add('active');

        setTimeout(() => {
            KeyElement.classList.remove('active');
        }, 300)
    }
}

let playComposition = (songArray) => {
    let wait = 0;
    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}