document.querySelector('#formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(event) {
    event.preventDefault();

    let modelCarro = document.querySelector('#modeloCarro').value;
    let placa = document.querySelector('#placaCarro').value;
    let time = new Date();

    carro = {
        modelo: modelCarro,
        placa: placa,
        hora: time.getHours(),
        minutos: time.getMinutes(),
        segundos: time.getSeconds()
    }
}