var carousel = document.getElementById("carousel");
var suivant1 = document.getElementById("suivant");
var precedent1 = document.getElementById("precedent");

//Vous aurez besoin de ce genre de chose:
//carousel.style.borderColor = "#f00";
var position=0
var carou = carousel.children
var position2 = carou.length - 1
var position3 = carou.length + 1

function suivant(){
    if(position == position2){
        position =0;
        for(var i=0;i<carou.length;i++)
        carou[i].removeAttribute("style", "display: none;")       
    }

    else{
        carou[position].style.display="none";
        position++;
    }
}

function precedent(){
    if(position == position3){
        position=0;
        for(var i=0;i<carou.length;i--)
        carou[i].style.display="none";       
    }  
    
    else{
        carou[position].style.display=null;
        position--;
    }

}
suivant1.onclick = suivant;
precedent1.onclick= precedent;


/* faire une condition si carou[0] go to carou[carou.length] */