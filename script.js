let balleDeplacement = true;
let compteTourX = 0;
let directionX = 1;
let compteTourY = 0;
let directionY = 1;
let balle = document.getElementById("balle");
let vaisseau = document.getElementById("vaisseau");
let positionBalleX;
let positionBalleY;


function mouvementBalleX (){
    positionBalleX = 2*compteTourX + 'px';
    balle.style.left = positionBalleX;

    if (directionX == 1){
        compteTourX = compteTourX+1;
    }
    if (compteTourX > 394) {
        directionX = -1;
    }
    if (directionX == -1){
        compteTourX = compteTourX-1;
    }
    if (compteTourX < 0){
        directionX = 1;
    }
}

function mouvementBalleY (){
    positionBalleY = 3*compteTourY + 'px';
    balle.style.top = positionBalleY;

    collisionBalleVaisseauY ();

    if (directionY == 1){
        compteTourY = compteTourY+1;
    }
    if (compteTourY > 265) {
        directionY = -1;
    }
    if (directionY == -1){
        compteTourY = compteTourY-1;
    }
    if (compteTourY < 0){
        directionY = 1;
    }
}


function collisionBalleVaisseauY () {
    
    if (positionBalleY == '630px' || positionBalleY == '600px'){
        let collisionPositionBalleX = window.getComputedStyle(balle,null).getPropertyValue("left");
        let lengthPositionBalleX = collisionPositionBalleX.length;
        let x = lengthPositionBalleX -2;
        let numberPositionBalleX = collisionPositionBalleX.substring(0, x);

        let collisionPositionVaisseauX = window.getComputedStyle(vaisseau,null).getPropertyValue("left");
        let lengthPositionVaisseauX = collisionPositionVaisseauX.length;
        let vX = lengthPositionVaisseauX -2;
        let numberPositionVaisseauX = collisionPositionVaisseauX.substring(0, vX);
        let intNumberPositionVaisseauX = parseInt(numberPositionVaisseauX, 10);

        let limitSuperieurVaisseauX = intNumberPositionVaisseauX + 60;
        let limitInferieurVaisseauX = intNumberPositionVaisseauX;
        if (numberPositionBalleX <= limitSuperieurVaisseauX && numberPositionBalleX >= limitInferieurVaisseauX) {
            directionY = directionY * (-1);
        }
    }
}


let intervalMouvementBalleX = window.setInterval(mouvementBalleX, 11, 'Parameter 1', 'Parameter 2');
let intervalMouvementBalleY = window.setInterval(mouvementBalleY, 7, 'Parameter 1', 'Parameter 2');

document.onmousemove = event => {
    let vaisseauX = event.clientX - 590;
    if (vaisseauX <= 0) {
        vaisseau.style.left = '0px';
    } else if (vaisseauX >= 740) {
        vaisseau.style.left = '740px';
    } else {
        vaisseau.style.left = vaisseauX + 'px';
    }
};