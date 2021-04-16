let timer = 60;
let timerPlaceholder = document.querySelector(".terrain_timer h2");
timerPlaceholder.textContent = timer + " sec";

function timeOut(){
    let ecranTimeOut = document.getElementById("timeOut");
    ecranTimeOut.style.display = "flex";
    window.clearInterval(intervalMouvementBalleX);
    window.clearInterval(intervalMouvementBalleY);
    window.clearInterval(intervalNewBriqueAleatoire);
    window.clearInterval(intervalFuncTimer);
    deplacementVaisseau = false;
}

function funcTimer(){
    timer--;
    timerPlaceholder.textContent = timer + " sec";
}

let intervalFuncTimer = window.setInterval(funcTimer,1000);

window.setTimeout(timeOut,timer*1000);