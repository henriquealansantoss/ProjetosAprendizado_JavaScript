const itens = [{
        id: 0,
        nome: 'camiseta',
        img: 'image.gif',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'calça',
        img: 'image.gif',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'sapato',
        img: 'image.gif',
        quantidade: 0
    }

];


let inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');

    itens.map((val) => {
        containerProdutos.innerHTML += `
        <div class = "produto-single">
            <img src="` + val.img + `"/>
            <p>` + val.nome + `</p>
            <a key="` + val.id + `" href="#"> Adicionar ao carrinho! </a>
        </div>
        `
    })

}

inicializarLoja();

let atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    itens.map((val) => {
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `
            <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
            <hr>
        `
        }
        
});

}


let links = document.querySelectorAll('a');

for(let i = 0; i < links.length; i++){
   links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
   })
};