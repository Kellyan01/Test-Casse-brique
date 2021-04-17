let deplacementVaisseau = true;
let compteTourX = 0;
let directionX = 1;
let compteTourY = 0;
let directionY = 1;
let balle = document.getElementById("balle");
let vaisseau = document.getElementById("vaisseau");
let positionBalleX;
let positionBalleY;
let coordonneesBriqueExistante = [];
let score = 0;

let scorePlaceholder = document.querySelector(".terrain_score h2");
scorePlaceholder.textContent = score + " points";

//fonction qui prend une taille en pixel et retourne sa valeur numérique
function integralString (taille) {
    let longueurNumber = taille.length -2;
    let numberString = taille.substring (0,longueurNumber);
    return parseInt(numberString,10);
}

//gestion du mouvement horizontal de la balle et de ses collisions en X
function mouvementBalleX (){
    positionBalleX = 1*compteTourX + 'px'; //si modifie le multiplicateur, ajuster la borne supérieur de compteTourX
    balle.style.left = positionBalleX;

    collisionBalleVaisseauX();
    collisionBriqueX();

    if (directionX == 1){
        compteTourX = compteTourX+1;
    }
    if (compteTourX > 780) { //borne supérieur de compteTourX (retrancher la taille de la balle à la taille du terrain)
        directionX = -1;
    }
    if (directionX == -1){
        compteTourX = compteTourX-1;
    }
    if (compteTourX < 0){
        directionX = 1;
    }
}

//gestion du mouvement vertical de la balle et de ses collisions en Y
function mouvementBalleY (){
    positionBalleY = 2*compteTourY + 'px'; //si modifie le multiplicateur, ajuster la borne supérieur de compteTourY
    balle.style.top = positionBalleY;

    collisionBalleVaisseauY();
    collisionBriqueY();

    if (directionY == 1){
        compteTourY = compteTourY+1;
    }
    if (compteTourY > 390) { //borne supérieur de compteTourY (retrancher la taille de la balle à la taille du terrain)
        directionY = -1;
    }
    if (directionY == -1){
        compteTourY = compteTourY-1;
    }
    if (compteTourY < 0){
        directionY = 1;
    }
}

//gestion collision Y balle-vaisseau - origine balle : Centre
function collisionBalleVaisseauY () {
    let numberPositionBalleY = integralString(positionBalleY) + 10;
    if (numberPositionBalleY == 650 || numberPositionBalleY == 610){
        let collisionPositionBalleX = window.getComputedStyle(balle,null).getPropertyValue("left");
        let numberPositionBalleX = integralString(collisionPositionBalleX) + 10;

        let collisionPositionVaisseauX = window.getComputedStyle(vaisseau,null).getPropertyValue("left");
        let NumberPositionVaisseauX = integralString(collisionPositionVaisseauX);

        if (numberPositionBalleX <= NumberPositionVaisseauX + 60 && numberPositionBalleX >= NumberPositionVaisseauX) {
            directionY = directionY * (-1);
        }
    }
}

//gestion collision X balle-vaisseau - origine balle : Center
function collisionBalleVaisseauX () {
    let collisionPositionBalleX = window.getComputedStyle(balle,null).getPropertyValue("left");
    let numberPositionBalleX = integralString(collisionPositionBalleX) + 10;

    let collisionPositionVaisseauX = window.getComputedStyle(vaisseau,null).getPropertyValue("left");
    let NumberPositionVaisseauX = integralString(collisionPositionVaisseauX) + 10;

    if (numberPositionBalleX == NumberPositionVaisseauX + 60 || numberPositionBalleX == NumberPositionVaisseauX -20) {
        let numberPositionBalleY = integralString(positionBalleY);

        if (numberPositionBalleY <= 650 && numberPositionBalleY >= 610){
            directionX = directionX * (-1);
        }
    }
}


let intervalMouvementBalleX = window.setInterval(mouvementBalleX, 5, 'Parameter 1', 'Parameter 2');
let intervalMouvementBalleY = window.setInterval(mouvementBalleY, 5, 'Parameter 1', 'Parameter 2');



document.onmousemove = event => {
    //let fenetre = window.visualViewport.width;
    let fenetre = window.innerWidth;
    let decalage = (fenetre-800)/2;
    let vaisseauX = event.clientX - decalage -30;
    if (deplacementVaisseau == true) {
        if (vaisseauX <= 0) {
            vaisseau.style.left = '0px';
        } else if (vaisseauX >= 740) {
            vaisseau.style.left = '740px';
        } else {
            vaisseau.style.left = vaisseauX + 'px';
        }
    }
};