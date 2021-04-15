function integralString (taille) {
    let longueurNumber = taille.length -2;
    let numberString = taille.substring (0,longueurNumber);
    return parseInt(numberString,10);
}

console.log(integralString('2593px'));