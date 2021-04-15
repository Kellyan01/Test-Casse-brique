function newBrique() {
    let terrain = document.getElementById('terrain');
    let brique = document.createElement('div');
    
    brique.classList.add ("terrain_brique");
    brique.style.top =  "-80px";
    //brique.style.left = left;
    terrain.appendChild(brique);
}
