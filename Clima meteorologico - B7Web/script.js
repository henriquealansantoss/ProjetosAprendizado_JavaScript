const dq = (e) => document.querySelector(e);
const cl = (e) => console.log(e);

dq('.busca button').addEventListener('click', async (event) => {
    event.preventDefault();

    let inputValue = dq('#searchInput').value;

    if (inputValue !== '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(inputValue)}&appid=d06cdb298fafc83c520d5ab677fc477e`

        let result = await fetch(url);
        let json = await result.json();
        cl(json)
    }

})


function showWarning(msg){
    dq('.aviso').innerHTML = msg;
};