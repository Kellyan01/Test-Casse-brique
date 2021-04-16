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
let intervalNewBriqueAleatoire = window.setInterval(newBriqueAleatoire, 3000);

/*
1) Récupère les briques existantes
2) Récupère les coordonnées des briques existantes sous forme de tableau dans un tableau
3) Récupère les coordonnées de la balle
4) Transformer les coordonnées en valeur numérique
5) Compare les coordonnées des briques à celle de la balle
6) Si les coordonnées correspondent, faire rebondir la balle, faire évoluer la santé de la brique ou la détruire la brique, afficher le nouveaus score
*/

function tabCoordonneesBrique() {
    let briqueExistante = document.getElementsByClassName("terrain_zoneBrique_brique");

    for (let i =0; i<briqueExistante.length;i++){
        let briqueXPixel = window.getComputedStyle(briqueExistante[i],null).getPropertyValue("left");
        let briqueYPixel = window.getComputedStyle(briqueExistante[i],null).getPropertyValue("top");
        let briqueX = integralString (briqueXPixel);
        let briqueY = integralString (briqueYPixel);
        let pairsCoordonnees = [briqueX,briqueY];
        coordonneesBriqueExistante.push(pairsCoordonnees);
    }
}    

function collisionBriqueX() {
    tabCoordonneesBrique();
    let collisionPositionBalleX = window.getComputedStyle(balle,null).getPropertyValue("left");
    let numberPositionBalleX = integralString(collisionPositionBalleX);

    for (let i=0; i<coordonneesBriqueExistante.length;i++){
        let borneXGauche = coordonneesBriqueExistante[i][0];
        let borneXDroite = coordonneesBriqueExistante[i][0] + 100;
        if (numberPositionBalleX == borneXGauche -20 || numberPositionBalleX == borneXDroite ){
            let collisionPositionBalleY = window.getComputedStyle(balle,null).getPropertyValue("top");
            let numberPositionBalleY = integralString(collisionPositionBalleY);

            let borneYHaut = coordonneesBriqueExistante[i][1];
            let borneYBas = coordonneesBriqueExistante[i][1] + 50;

            if (numberPositionBalleY <= borneYBas && numberPositionBalleY >= borneYHaut) {
                directionX = directionX * (-1);
                let node = document.getElementsByClassName("terrain_zoneBrique_brique")[i];
                let parent = document.getElementById("zoneBrique");
                if (node.classList.contains("fragile")) {
                    parent.removeChild(node);
                    score++;
                    scorePlaceholder.textContent = score + " points";
                } else if (node.classList.contains("endommage")) {
                    node.classList.replace("endommage","fragile");
                } else if (node.classList.contains("heurte")) {
                    node.classList.replace("heurte","endommage");
                } else {
                    node.classList.add("heurte");
                }
            }
        }
    }
    coordonneesBriqueExistante=[];

}

function collisionBriqueY() {
    tabCoordonneesBrique();
    let collisionPositionBalleY = window.getComputedStyle(balle,null).getPropertyValue("top");
    let numberPositionBalleY = integralString(collisionPositionBalleY);

    for (let i=0; i<coordonneesBriqueExistante.length;i++){
        let borneYHaut = coordonneesBriqueExistante[i][1];
        let borneYBas = coordonneesBriqueExistante[i][1] + 50;
        if (numberPositionBalleY == borneYHaut -20 || numberPositionBalleY == borneYBas ){
            let collisionPositionBalleX = window.getComputedStyle(balle,null).getPropertyValue("left");
            let numberPositionBalleX = integralString(collisionPositionBalleX);

            let borneXGauche = coordonneesBriqueExistante[i][0];
            let borneXDroite = coordonneesBriqueExistante[i][0] + 100;

            if (numberPositionBalleX <= borneXDroite && numberPositionBalleX >= borneXGauche) {
                directionY = directionY * (-1);
                let node = document.getElementsByClassName("terrain_zoneBrique_brique")[i];
                let parent = document.getElementById("zoneBrique");
                if (node.classList.contains("fragile")) {
                    parent.removeChild(node);
                    score++;
                    scorePlaceholder.textContent = score + " points";
                } else if (node.classList.contains("endommage")) {
                    node.classList.replace("endommage","fragile");
                } else if (node.classList.contains("heurte")) {
                    node.classList.replace("heurte","endommage");
                } else {
                    node.classList.add("heurte");
                }
            }
        }
    }
    coordonneesBriqueExistante=[];
}