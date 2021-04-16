function integralString (taille) {
    let longueurNumber = taille.length -2;
    let numberString = taille.substring (0,longueurNumber);
    return parseInt(numberString,10);
}



/*
1) Récupère les briques existantes
2) Récupère les coordonnées des briques existantes sous forme de tableau dans un tableau
3) Récupère les coordonnées de la balle
4) Transformer les coordonnées en valeur numérique
5) Compare les coordonnées des briques à celle de la balle grâce à la méthode map()
6) Si les coordonnées correspondent, faire rebondir la balle et détruire la brique
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

//tabCoordonneesBrique();
//console.log(coordonneesBriqueExistante);

function collisionBriqueX() {
    tabCoordonneesBrique();

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
                parent.removeChild(node);
            }
        }
    }
    coordonneesBriqueExistante=[];
}

