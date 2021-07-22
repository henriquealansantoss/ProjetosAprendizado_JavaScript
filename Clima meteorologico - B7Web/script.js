const dq = (e) => document.querySelector(e);

dq('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let inputValue = dq('#searchInput').value;

    if (inputValue !== '') {
        clearInfo();
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(inputValue)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`

        let result = await fetch(url);
        let json = await result.json();

        if (json.cod === 200) {
            showInfo({
                nome: json.name,
                sigla: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windsSpeed: json.wind.speed,
                windAngle: json.wind.deg 
            });
           
        } else {
            showWarning('Não foi possível realizar está busca!')
        }
    } else {
        clearInfo();
        showWarning('Não foi possível realizar está busca!')
    }

});

function showInfo(infs) {
    clearInfo();

    dq('.titulo').innerHTML = `${infs.nome}, ${infs.sigla}`;
    dq('.tempInfo').innerHTML = `${infs.temp} <sup>ºC</sup>`;
    dq('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${infs.tempIcon}@2x.png`);
    dq('.ventoInfo').innerHTML = `${infs.windsSpeed} <span>km/h</span>`;
    dq('.ventoPonto').style.transform = `rotate(${infs.windAngle-90}deg)`;

    dq('.resultado').style.display = 'block';
};


function showWarning(msg) {
    dq('.aviso').innerHTML = msg;
};

function clearInfo(){
    showWarning('');
    dq('.resultado').style.display = 'none';
};

