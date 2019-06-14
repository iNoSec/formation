var tableau = ["Bob","Pj","Dom"];
var liste =document.getElementById("liste")

function ajouter(){                                                 
    for(var i=0; i<tableau.length;i++)                                        
        {     
            var newli = document.createElement("li") 
            var prenom = document.createTextNode(tableau[i]) 
            liste.appendChild(newli)   
            newli.appendChild(prenom)                                                     
        }                                                                   
}  
/*
function afficherListe(){
    if (liste.firstChild == li){
        for(var i=0; i<tableau.length;i++)                                        
        { 
            var newli = document.createElement("li") 
            var prenom = document.createTextNode(tableau[i]) 
            liste.appendChild(newli)   
            newli.appendChild(prenom)
        }
    }
    else{
    
    }
}*/

function ajoutBtn(){
    var boxvalue = document.getElementById("box").value
    tableau.push(boxvalue)
    ajouter()
    return false;
}



function supBtn(){
        tableau.pop()
        ajouter()
}


