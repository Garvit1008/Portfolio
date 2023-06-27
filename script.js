window.addEventListener('scroll',function(){
    let a = window.scrollY;
    if(a>=550&&a<=1600){
        document.getElementById('skill-id').style.opacity = "1";
        document.getElementById('skill-id').style.transition = "all 2s";
    }
    else{
        document.getElementById('skill-id').style.opacity = "0";
    }
    });
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      } 
