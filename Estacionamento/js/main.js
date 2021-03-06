document.querySelector('#formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(event) {
    event.preventDefault();

    let modelCarro = document.querySelector('#modeloCarro').value;
    let placa = document.querySelector('#placaCarro').value;
    let time = new Date();

    if(!modelCarro && !placa){
        alert('Informe os dados antes de adicionar!');
        return false;
    }

    carro = {
        modelo: modelCarro,
        placa: placa,
        hora: time.getHours(),
        minutos: time.getMinutes(),
        segundos: time.getSeconds()
    }



    if (localStorage.getItem('patio') === null) {
        let carros = [];
        carros.push(carro);
        localStorage.setItem('patio', JSON.stringify(carros));
    } else {
        let carros = JSON.parse(localStorage.getItem('patio'));
        carros.push(carro);
        localStorage.setItem('patio', JSON.stringify(carros));
    }

    mostrarPatio();

}

function apagarVeiculo(placa){
    let carros = JSON.parse(localStorage.getItem('patio'));

    for(let i = 0; i < carros.length; i++){
        if(carros[i].placa === placa){
            carros.splice(i,1);
        }

        localStorage.setItem('patio', JSON.stringify(carros));
    }

    mostrarPatio();
}


function mostrarPatio() {
    let carros = JSON.parse(localStorage.getItem('patio'));
    let carrosResultado = document.querySelector("#resultados");

    carrosResultado.innerHTML = "";


    for (let i = 0; i < carros.length; i++) {
        let modelo = carros[i].modelo;
        let placa = carros[i].placa;
        let hora = carros[i].hora;
        let minutos = carros[i].minutos;
        let segundos = carros[i].segundos;


        carrosResultado.innerHTML += `<tr>
                                <td> ${modelo} </td>
                                <td> ${placa} </td>
                                <td> ${hora}:${minutos}:${segundos}</td>
                                <td><button class="btn btn-danger" onclick ="apagarVeiculo('${placa}')">Excluir</button></td>
                                </tr>
                                `;
    }
}