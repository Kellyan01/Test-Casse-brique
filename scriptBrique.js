function newBrique(top,left) {
    let zoneBrique = document.getElementById('zoneBrique');
    let brique = document.createElement('div');
    
    brique.classList.add ("terrain_zoneBrique_brique");
    brique.style.top =  top +"px";
    brique.style.left = left + "px";
    zoneBrique.appendChild(brique);
}

function newBloqueBrique(ligne,nbr,decalageLeft,decalageTop) {
    let zoneBrique = document.getElementById('zoneBrique');
    for (let i=0; i<ligne; i++) {
        for (let j=0; j<nbr; j++) {
            let brique = document.createElement('div');
            brique.classList.add ("terrain_zoneBrique_brique");
            brique.style.top =  i*50 + decalageTop + "px";
            brique.style.left = j*100 + decalageLeft + "px";
            zoneBrique.appendChild(brique);
        }
    }
}

function newBriqueAleatoire() {
    let zoneBrique = document.getElementById('zoneBrique');
    let brique = document.createElement('div');
    
    brique.classList.add ("terrain_zoneBrique_brique");
    brique.style.top =  Math.round(Math.random()*7)*50 + "px";
    brique.style.left = Math.round(Math.random()*7)*100 + "px";
    zoneBrique.appendChild(brique);
}

newBloqueBrique(4,4,200,50);
//window.setInterval(newBriqueAleatoire, 3000);