const d = (i) => document.querySelector(i);
const dl = (i) => document.querySelectorAll(i);

let areas = {
    a: null,
    b: null,
    c: null
}

dl('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

dl('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
})

d('.neutralArea').addEventListener('dragover', dragOverNeutral);
d('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
d('.neutralArea').addEventListener('drop', dropNeutral);


// functions Item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

//functions Area

function dragOver(e) { // entrou em uma area
    if (e.currentTarget.querySelector('.item') == null) {
        e.preventDefault(); // para liberar o drop 
        e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e) { // saiu de uma area
    e.currentTarget.classList.remove('hover');
}

function drop(e) { //soltou 
    e.currentTarget.classList.remove('hover');

    if (e.currentTarget.querySelector('.item') == null) {
        let dragItem = d('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}

function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}

function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = d('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
}

// logic functons

function updateAreas(){
    dl('.area').forEach(area =>{
        let name = area.getAttribute('data-name');

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        }else{
            areas[name] = null;
        }
    });

    if(areas.a === '1' && areas.b === '2' && areas.c === '3'){
        d('.areas').classList.add('correct');
    }else{
        d('.areas').classList.remove('correct');
    }
}