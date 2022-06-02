const check = document.getElementById("btn");
const option = document.getElementById("opt");

check.addEventListener('change', function (){
    if (this.checked){
        option.style.opacity=1;
    }else{
        option.style.opacity=0;
    }
})