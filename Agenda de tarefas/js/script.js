document.addEventListener('DOMContentLoaded', function(){
    console.log(this);

    // mostrarError();
    document.getElementById('buttonSave').onclick = criarLembrete;
});


//função para verificar se é há texto...
function textoValido(texto){
        if(texto === null || texto === "" || texto.lenght < 1){
            return false;
        }else{
            return true;
        }
}


//função para exibir os erros
function mostrarError(){
    let html = '';
    html += '<div class="alert alert-danger" role="alert">';
    html += 'Por favor informe a tarefa!';
    html += '</div>'

    document.getElementById('error').innerHTML = html;

}

//função para limpar error
function limparErro(){
    document.getElementById('error').innerHTML = "";
}

//função para para criar o lembrete
function criarLembrete(){
    let conteudoTextArea = document.getElementById('texto').value;
    if(!textoValido(conteudoTextArea)){
        mostrarError();
        return;
    }

    limparErro();
}