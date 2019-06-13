//Exo 3.1
/*
var nbre = prompt("Entrez un nombre:");
if ( parseInt(nbre) > 0){
    alert("Votre nombre est positif");
}
else{
    alert("Ce nombre est négatif");
}*/



//-Exo 3.2
/*
var nbre1 = prompt("Entrez un nombre:");
var nbre2 = prompt("Entrez un nombre:");

if ((parseInt(nbre1) > 0 && parseInt(nbre2) > 0) || (parseInt(nbre1) < 0 && parseInt(nbre2) < 0)){
    alert("Le produit des deux nombres est positif");
}
else{
    alert("Le produit des deux nombrees est négatif");
}*/




//exo 3.3
/*
var nom1 = prompt("Entrez un nom");
var nom2 = prompt("Entrez un nom");
var nom3 = prompt("Entrez un nom");

if ((nom1 < nom2) && (nom2<nom3)){
    alert("Ils sont rangés alphabétiquement");
}
else{
    alert("Ils ne sont pas rangé alphabétiquement");
}
*/



/*
//exo 3.4

var nbre1 = prompt("Entrez un nombre");
var nbre2 = prompt("Entrez un nombre");

if ((parseInt(nbre1)>0 && parseInt(nbre2)>0) || (parseInt(nbre1) < 0 && parseInt(nbre2) < 0)) {
    alert("Le produit des deux nombres est égal a positif");
}
else if ((parseInt(nbre1)==0 && parseInt(nbre2)==0)){
    alert("Le produit des deux nombres est égal a 0");    
}
else{
    alert("Le produit des deux nombres est négatif");
}*/



//Exo 3.5
/*
var age = prompt("Entrez l'age de votre enfant:");
var age2 = parseInt(age);

if ( age2 >= 12 ){
    alert("Cadet");
}
else if (age2 >= 10) {
    alert("Minime");
}
else if (age2 >= 8) {
    alert("Pupille");
}
else if(age2 >= 6) {
    alert("Poussin");
}*/

/*
//Exo 4.2

var heure = prompt("Entrez l'heure");
var minutes = prompt("Entrez les minutes");


var min1 = parseInt(minutes) + 1; 

if (min1 == 60){
    min1 = 0
    heure = parseInt(heure) + 1 
        if (heure == 24){
            heure = 0;
            alert("Dans une minute il sera " + heure + "h et " + min1 + " minute(s)" );
        } 
        else {
            alert("Dans une minute il sera " + heure + "h et " + min1 + " minute(s)" ); 
        }
}
else {
    alert("Dans une minute il sera " + heure + "h et " + min1 + " minute(s)" ); 
}*/


//Exo 4.3
/*
var heure = prompt("Entrez l'heure");
var minutes = prompt("Entrez les minutes");
var secondes = prompt("Entrez les secondes:");

 
var sec1 = parseInt(secondes) + 1;

if (sec1 == 60)
{
    sec1 = 00;
    min1 = parseInt(minutes) + 1;
        if (min1 == 60)
        {
            min1 = 00;
            heure = parseInt(heure) + 1 ;
                if (heure == 24)
                {
                    heure = 00;
                    alert("Dans une minute il sera " + heure + "h et " + min1 + " minute(s) et " + sec1 + " seconde(s)");
                } 
                else 
                {
                    alert("Dans une minute il sera " + heure + "h et " + min1 + " minute(s) et " + sec1 + " seconde(s)"); 
                }
        }
    }
        else
        {
                alert("Dans une minute il sera " + heure + "h et " + minutes + " minute(s)et " + sec1 + " seconde(s)");
        }  
        
*/ 


//Exo 4.5
/*
var sexe = prompt("Quel est votre sexe?");
var age = prompt("Quel est votre age?");

var age = parseInt(age)

var bool1 = ((sexe == "Male" || sexe == "Homme") && age > 20);
var bool2 = ((sexe == "Femme" || sexe == "Femelle") && (age > 18 && age < 35));

if (bool1 || bool2){
    alert("Vous etes imposable");
}
else{
    alert("Vous n'etes pas imposable");
}*/



// Exo 6.1
/*
var truc = [];

for (i=0;i<7;i++){
    truc[i] = 0;
    
}
alert(truc)
*/


//exo 6.4
/*
var tab_long = prompt("Entrez le nombre de valeurs : ");
var tab_long = parseInt(tab_long);
var tab_long = tab_long - 1 ;
var tableau = [];
var nbp=0;
var nbn=0;
var i = 0;



while (i<=tab_long){
    var val = prompt("Entrez une valeur:");
    i++;
        if (val>0){
            nbp=nbp+1;
        }
        else{
            nbn=nbn+1;
        }
        for (j=0; j < tab_long.length; j++){
            tableau[j] = val;
        }
}
alert("Il y a " + nbp + " positifs et " + nbn + " négatifs dans vos valeurs");
*/


//exo 7.1

// on cree le tableau bleu, contenant les lignes
/*var grille = [];

var userL = prompt("Entrez la longueur du tableau")
var userl = prompt("Entrez la largeur du tableau")
var user_val = prompt("Entrez vos valeurs:")
// on cree les lignes les unes après les autres
for(var i=0; i<userL; i++){
   grille[i] = [];
}
// on parcourt les lignes...
for(var i=0; i<userL; i++){
   // ... et dans chaque ligne, on parcourt les cellules
   for(var j=0; j<userl; j++){
      grille[i][j] = user_val;
}
}
console.log(grille)*/


