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
    if(position < position2){
        carou[position].style.display="none";
        position++;
               
    }

    else{
        position =0;
        for(var i=0;i<carou.length;i++)
        carou[i].removeAttribute("style", "display: none;")
    }
}


function precedent(){
    if(position >0-1){
        carou[position].style.display=null;
        position--;     
    }  
    else{
        position=2;
        for(var i=position;i>0-1;i--)
        carou[i].style.display="none"; 
    }

}
suivant1.onclick = suivant;
precedent1.onclick= precedent;