window.onload = function() {
    var numbers = document.querySelectorAll(".number");
    var down = document.querySelector(".down-cheapter")
    for(var i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click",num);
    
        function num(){
            down.innerHTML += this.innerHTML
        }
    }
    var fun = document.querySelectorAll(".function");
    for(var i = 0; i < fun.length; i++){
        fun[i].addEventListener("click",func);
    
        function func(){
            // down.innerHTML += this.innerHTML
        }
    }
    var ac = document.querySelector(".ac");
    ac.addEventListener("click", del);
    function del(){
        down.innerHTML = "";
        up.innerHTML = "";
    }


    var ope = document.querySelectorAll(".operator")
    for(var i = 0; i < ope.length; i++){
        ope[i].addEventListener("click",oper);
    
        function oper(){
            down.innerHTML += this.innerHTML
        }
    }
    
    var decimal = document.querySelector(".decimal"); 
    decimal.addEventListener("click", dec);
    function dec(){
        down.innerHTML += this.innerHTML
    }
    
    var up = document.querySelector(".up-cheapter");
    var equal = document.querySelector(".equal"); 
    equal.addEventListener("click", equ);
    function equ(){
        
        up.innerHTML += eval(down.innerHTML)
        
    }
}