let num0 = document.querySelector(".number-0");
let num1 = document.querySelector(".number-1");
let num2 = document.querySelector(".number-2");
let num3 = document.querySelector(".number-3");
let num4 = document.querySelector(".number-4");
let num5 = document.querySelector(".number-5");
let num6 = document.querySelector(".number-6");
let num7 = document.querySelector(".number-7");
let num8 = document.querySelector(".number-8");
let num9 = document.querySelector(".number-9");
let opdiv = document.querySelector(".division");
let opmul = document.querySelector(".multiplication");
let opsub = document.querySelector(".subtraction");
let opadd = document.querySelector(".addition");
let opequ = document.querySelector(".equal");
let button = document.querySelectorAll(".button");
let value = document.querySelector(".value");
let ac = document.querySelector(".ac");

ac.addEventListener("click", ()=>{
       value.innerText = " ";
    
    
});

opequ.addEventListener("click", ()=>{
    value.innerText = eval(value.innerText)

});

for (let i = 0; i < 19; i++) {
        button[i].addEventListener("click", screen);}

 function screen() {

    if (value.innerText.length < 8) 
    value.innerText = (value.innerText + this.innerText);
  
            }

 
