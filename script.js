

function navshow(){
    const semi = document.getElementById('semi');
const tog = document.getElementById('tog');
const close = document.getElementById('close');

    tog.addEventListener("click",function(){
        semi.classList.toggle('show');
        close.classList.toggle('show');
        tog.classList.toggle('hide');
    })
    
}

function hidden(){
    const semi = document.getElementById('semi');
const tog = document.getElementById('tog');
const close = document.getElementById('close');

    close.addEventListener("click",function(){
        semi.classList.toggle('hide');
        close.classList.toggle('hide');
        tog.classList.toggle('show');
    })
}