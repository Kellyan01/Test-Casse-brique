function newBrique(top,left) {
    let zoneBrique = document.getElementById('zoneBrique');
    let brique = document.createElement('div');
    
    brique.classList.add ("terrain_zoneBrique_brique");
    brique.style.top =  top;
    brique.style.left = left;
    zoneBrique.appendChild(brique);
}

function newBrique2() {
    let zoneBrique = document.getElementById('zoneBrique');
    let brique = document.createElement('div');
    
    brique.classList.add ("terrain_zoneBrique_brique");
    brique.style.top =  Math.round(Math.random()*7)*50 + "px";
    brique.style.left = Math.round(Math.random()*15)*50 + "px";
    zoneBrique.appendChild(brique);
}

window.setInterval(newBrique2, 1000);