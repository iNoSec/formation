var class1 = [{
    nom: "Marc",
    notes: [10,5,12]
    //moyenne: 18
}]
var class2 = [
{
    nom:"Sophie",
    notes: [14,15,18]
    //moyenne: 6
}]
var class3 = [
{
    nom:"John",
    notes: [4,15,11]
    //moyenne: 14
}]
var class4 = [
{
    nom:"Pierre",
    notes: [10,12,16]
    //moyenne: 8
}
]

/*
//1ere partie ou la moyenne est deja faite dans mon tableau assoc
function aLaMoyenne(classes){
    for (var i=0;i<classes.length;i++){
        var classe = classes[i];
        if (classe.moyenne >= 10){
            console.log(classe.nom + " a la moyenne");
        }
        else {
            console.log(classe.nom + " n'a pas la moyenne");
        }
    }

}

aLaMoyenne(class1)*/



function LaMoyenne(classes){
    var somme = 0
   for(var i=0; i<classes.length;i++){
       var classe = classes[i];
            for(var j=0;j<classe.notes.length;j++){
                var note = classe.notes[j]
                somme = somme + note}
                console.log(classe.nom + " a " + somme/3 + " de moyenne.")
                /*
                    if (moyenne>=10){
                    var name = classe.nom
                    console.log(name + " a la moyenne")
                    }
                    else{
                        console.log(name + " n'a pas la moyenne")
                    }*/
       
   }
}
LaMoyenne(class1)
LaMoyenne(class2)
LaMoyenne(class3)
LaMoyenne(class4)


