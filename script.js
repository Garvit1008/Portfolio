function navshow(){
    let semi = document.getElementById('semi');
    let tog = document.getElementById('tog');
    let close = document.getElementById('close');
    tog.addEventListener("click",function(){
        tog.style.display='none';
        semi.style.display='block';
        close.style.display='block';
    })
    close.addEventListener("click",function(){
        tog.style.display='block';
        semi.style.display='none';
        close.style.display='none';
    })
}