var carousel = document.getElementById("carousel");
var suivant1 = document.getElementById("suivant");
var precedent1 = document.getElementById("precedent");
//Vous aurez besoin de ce genre de chose:
//carousel.style.borderColor = "#f00";
var position=0
var carou = carousel.children
var position2 = carou.length - 1

function suivant(){
    if(position == position2){
        position =0;
        for(var i=0;i<carou.length;i++)
        carou[i].style.display=null;       
    }
    
    else{
        carou[position].style.display="none";
        position++;
    }
}

function precedent(){
        
}

suivant1.onclick = suivant;
precedent1.onclick=precedent;