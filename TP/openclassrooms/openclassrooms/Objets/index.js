var nicks = [];

while (nick = prompt('Entrez un prénom :')) {
    if (nick) {
        nicks.push(nick);
    } else {
        break; // On quitte la boucle
    }
}

alert(nicks); // Affiche les prénoms à la suite