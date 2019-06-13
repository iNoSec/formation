var tab = [4,6,2,1,6,4,6,2,1,6,4,6,2,1,6]
var i = 6
var e = i
var j = 0
/*
for (i=0; i<= tab.length;i++){
    if (tab[i]==e){
    bool = true;
    index_convert = i + 1
    console.log("Bravo tu as un 6 dans ton tableau a la " + index_convert + "e place du tableau" );
    }
}*/
/*
while ((tab[i] != e) && (i < tab.length)){
        i++;
}
if( i >= tab.length){
    console.log("tu n'as pas de 6")
}
else{
console.log("tu as un 6 a l'index" + i )
}*/


for (i=0; i<= tab.length;i++){
    if (tab[i]==e){
        j++
    }
}
console.log("Bravo tu as un 6 et il est present " + j + "fois" );