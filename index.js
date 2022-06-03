const check = document.getElementById("btn");
const option = document.getElementById("opt");
const square = document.getElementById("sq");

check.addEventListener('change', function (){
    if (this.checked){
        option.style.opacity=1, square.style.opacity=1;
    }else{
        option.style.opacity=0, square.style.opacity=0;
    }
})