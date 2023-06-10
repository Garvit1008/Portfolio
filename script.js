

function nav_show(){
    const semi = document.getElementById('semi');
const tog = document.getElementById('tog');
const close = document.getElementById('close');

    tog.addEventListener("click",function(){
        semi.classList.remove('hide')
        semi.classList.add('show');
        close.classList.remove('hide')
        close.classList.add('show');
        tog.classList.remove('show')
        tog.classList.add('hide');
    })
    
}

function hidden_nav(){
    const semi = document.getElementById('semi');
const tog = document.getElementById('tog');
const close = document.getElementById('close');

    close.addEventListener("click",function(){
        semi.classList.remove('show');
        semi.classList.add('hide');
        close.classList.remove('show')
        close.classList.add('hide');
        tog.classList.remove('hide');
        tog.classList.add('show');
    })
}

