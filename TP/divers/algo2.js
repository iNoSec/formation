//Exercice 1
/* 
var bool = false
var tab = [4,6,10,14]
var i = 6
var e = i
*/


//exo2
/*
var tab = [4,6,10,14]
var i = 0
var e = 10*/

//exo3
/*
var tab = [4,6,10,14]
var e = 6
var j = 0*/

/*exo4*/
/*
var tab = [4,6,8]
var i = 0
var e = 10*/

/*Exo 1
for (i=0; i<= tab.length;i++){
    if (tab[i]==e){
    bool = true;
    index_convert = i + 1
    console.log("Bravo tu as un 6 dans ton tableau a la " + index_convert + "e place du tableau" );
    }
}*/


/*Exo 2 
while ((tab[i] != e) && (i < tab.length)){
        i++;
}
if( i >= tab.length){
    console.log("tu n'as pas de 10")
}
else{
console.log("tu as un 10 a l'index" + i )
}*/

/*
for (i=0; i<= tab.length;i++){
    if (tab[i]==e){
        j++
    }
}
console.log("Bravo tu as un 6 et il est present " + j + "fois" );*/
//Exo 3
/*
while ((tab[i] != e) && (i < tab.length)){
        i++;
}
if( i >= tab.length){
    console.log("tu n'as pas de 10")
}
else{
console.log("tu as un 10 a l'index" + i )
}*/

//Exo 4
/*
while ((tab[i] != e) && (tab[i]<e)){
        i++;
}
if( tab[i] == e){
    convert = i +1 
console.log("tu as un 10 a l'index" + i + " ou si tu preferes a la " + convert + "e place du tableau")

}
else{
    console.log("tu n'as pas de 10")

}*/

//Exo5

var tab = [4,6,10,14,16,20,45,52,68,72,90,99,100]
var e = 99
var mid = Math.ceil(tab.length / 2)
var val = tab[mid]
var ifin = tab.length - 1


while ((val < e || val > e) && mid >= 1){
   if (e > val ) {
        //redefinir le debut de mon tab a mid
        mid = Math.ceil(mid/2)
        val = tab[mid]
   }
   else {
        mid = Math.ceil(mid/2)
        val = tab[mid]
        console.log(val + " : " + mid)
   }
}

if (val == e){
    console.log("trouvé")
}
else{
    console.log("Pas trouvé")
}



//TRUC QUI MARCHE PAS
/*
var tab = [4,6,10,14,16,20,45,52,68,72,90,99,100]
var e = 99
var min = 0
var max = tab.length - 1
var mil = Math.ceil(tab.length / 2)

while ((min<max) && ( tab[min] != e && tab[max] !=e )){
    if (tab[mil] < e){
        min = mil + 1 
    }
    else{
        max = mil - 1
    }
}
if (tab[mil] == e){
    console.log("trouvé")
}
else{
    console.log("Pas trouvé")
}
*/
