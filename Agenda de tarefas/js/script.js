document.addEventListener('DOMContentLoaded', function () {
    // console.log(this);

    // mostrarError();
    document.getElementById('buttonSave').onclick = criarLembrete;
});


//função para verificar se é há texto...
function textoValido(texto) {
    if (texto === null || texto === "" || texto.lenght < 1) {
        return false;
    } else {
        return true;
    }
}


//função para exibir os erros
function mostrarError() {
    let html = '';
    html += '<div class="alert alert-danger" role="alert">';
    html += 'Por favor informe a tarefa!';
    html += '</div>'

    document.getElementById('error').innerHTML = html;

}

//função para limpar error
function limparErro() {
    document.getElementById('error').innerHTML = "";
}

//função para para criar o lembrete
function criarLembrete() {
    let conteudoTextArea = document.getElementById('texto').value;
    if (!textoValido(conteudoTextArea)) {
        mostrarError();
        return;
    }

    limparErro();

    //criando variaveis para tempo...
    let referencia = new Date();
    let id = referencia.getTime();
    let data = referencia.toLocaleDateString();
    let texto = conteudoTextArea;


    let recordatorio = {
        "id": id,
        "data": data,
        "texto": texto
    };


    //função para verificar se existe o lembrete
    comprovarRecordatorio(recordatorio);


}

//função para verificar se existe o lembrete
function comprovarRecordatorio(recordatorio) {
    let recordatorioExistetes = localStorage.getItem("recordatorio");
    if (recordatorioExistetes === null || recordatorioExistetes === "") {
        let recordatorios = [];
        recordatorios.push(recordatorio);

        //salvar recordatorio
        saveRecordatorios(recordatorios);
    } else {
        let recordatoriosRecuperados = JSON.parse(recordatorioExistetes);

        //salvar
        recordatoriosRecuperados.push(recordatorio);
        saveRecordatorios(recordatorios);
    }

}


//função para salva
function saveRecordatorios(recordatorios) {
    let recordatoriosJSON = JSON.stringify(recordatorios);
    localStorage.setItem("re", recordatoriosJSON);
}

//função para exibir itens
function mostrarRecordatorios() {
    let html = "";
    let recordatorioExistetes = localStorage.getItem("recordatorios");
    if (recordatorioExistetes === null || recordatorioExistetes === "") {
        html = "Não existe nenhum lembrete...";


        document.getElementById('recordatorios').innerHTML = html;
    } else {
        let recordatoriosRecuperados = JSON.parse(recordatorioExistetes);
        for (let i = 0; i < recordatoriosRecuperados.lenght; i++) {
            html += formartarRecordatorio(recordatoriosRecuperados[i]);
        }
        document.querySelector("#recordatorios").innerHTML = html;
    }

}

//função para exibir os lembretes
function formartarRecordatorio(recordatorio) {
    let html = "";
    html += `<div class="recordatorio" id="${recordatorio.id}">`;
    html += `<div class="row">`;
    html += `<div class="col-6 text-left" >`;
    html += `<small><i class="fa fa-calendar-alt" aria-hidden="true"></i> ${recordatorio.data}</small>`;
    html += `</div>`;
    html += `<div class="col-6 text-right">`;
    html += `<small><i class="fa fa-window-close" aria-hidden="true"></i></small>`;
    html += `</div>`;
    html += `</div>`;
    html += `<br>`;
    html += `<div class="row">`;
    html += `<div class="col-12">`;
    html += `${recordatorio.texto}`; 
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `<br> `

    return html;
}

//comprovar se está tudo ok...
document.addEventListener('DOMContentLoaded', function () {
    // console.log(this);

    // mostrarError();
    document.getElementById('buttonSave').onclick = criarLembrete;
    mostrarRecordatorios();
});