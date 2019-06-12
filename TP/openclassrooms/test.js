var parent = document.getElementById('parent');
var child = document.getElementById('child');

alert("Sans la fonction de calcul, la position de l'élément enfant est : \n\n" +
    'offsetTop : ' + child.offsetTop + 'px\n' +
    'offsetLeft : ' + child.offsetLeft + 'px');


function getOffset(truc) { // Notre fonction qui calcule le positionnement complet
    var top = 0,
        left = 0;

    do {
        top += truc.offsetTop;
        left += truc.offsetLeft;
    } while (truc = truc.offsetParent); // Tant que « truc » reçoit un « offsetParent » valide alors on additionne les valeurs des offsets

    return { // On retourne un objet, cela nous permet de retourner les deux valeurs calculées
        top: top,
        left: left
    }
}


alert("Avec la fonction de calcul, la position de l'élément enfant est : \n\n" +
    'offsetTop : ' + getOffset(child).top + 'px\n' +
    'offsetLeft : ' + getOffset(child).left + 'px');