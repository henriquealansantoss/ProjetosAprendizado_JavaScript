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


let inicializarLoja = ()=>{
    var containerProdutos = document.getElementById('produtos');

    itens.map((val)=>{
        console.log(val.nome);
    })

}

inicializarLoja();