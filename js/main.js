const hambtn = document.querySelector('.ham');
const dropdwn = document.querySelector('.lis_men');
const over = document.querySelector('.serhov');
let menuopen = false;
let dwn = false;
let mover = false;
 

function menbtn(){
if(!menuopen){
    hambtn.classList.add('select');
    menuopen =true;
}  
else{
    hambtn.classList.remove('select');
    menuopen = false;
}
}
function drop(){
if(!dwn){
    dropdwn.classList.remove('open');
    dwn =true;
}  
else{
    dropdwn.classList.add('open');
    dwn = false;
}
}
