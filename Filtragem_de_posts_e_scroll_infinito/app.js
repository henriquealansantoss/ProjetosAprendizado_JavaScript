const cl = (e)=> console.log(e);
// `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1`

const postContainer = document.querySelector('#posts-container');
const loaderConteiner = document.querySelector('.loader');
const filterInput = document.querySelector('#filter');

let page = 1;
const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    return response.json();

}

const addPostsIntoDOM = async ()=>{
    const posts = await getPosts()
    const postTemplate = posts.map(({id,title,body}) => `
    <div class="post">
    <div class="number">${id}</div>
    <div class="post-info">
        <h2 class="post-title">${title}</h2>
        <p class="post-body">${body}</p>
    </div>
    </div>
    `).join('')
   
    postContainer.innerHTML += postTemplate; 

}

addPostsIntoDOM()

const getNextPosts = ()=>{
    setTimeout(()=>{
        page++
    addPostsIntoDOM()
    },300)
    
}

const removeLoader = ()=>{
    setTimeout(()=>{
        loaderConteiner.classList.remove('show');
        getNextPosts()
    },1000)
}

const showLoader = ()=>{
    loaderConteiner.classList.add('show');

    removeLoader();
}

window.addEventListener('scroll', ()=>{
    const {clientHeight , scrollHeight, scrollTop} = document.documentElement

    // scrollTop = distancia entre o topo e topo visivel do documento
    // crientHeight = altura entre topo e final da parte visivel da pagina
    // scrollHeight =  altura total do documento
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10;

    if(isPageBottomAlmostReached){
        showLoader()
    }
})

filterInput.addEventListener('input', event =>{ // input = cada vez que é inserido um caracter no input uma ação(function) é realizada
    //obter o valor digitado no input  = event.target.value
    const inputValue = event.target.value
    const posts = document.querySelectorAll('.post')

    posts.forEach(post => {
        // buscando os posts que estão em tela 
        const postTitle = post.querySelector('.post-title').textContent.toLowerCase();
        const postBody = post.querySelector('.post-body').textContent.toLowerCase();
       
        if(postTitle.includes(inputValue) || postBody.includes(inputValue)){
            post.style.display = 'flex'
            return // para não usar o else e assim encera a condição se atender os requisitos
        }

        post.style.display = 'none'
    });

})