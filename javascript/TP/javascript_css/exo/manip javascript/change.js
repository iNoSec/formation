var liste = document.getElementById("liste");

function selectionne(e){
   
    //e.target represente le li qui a étécliqué dans le ul
    e.target.classList.toggle("selected");
    
}

liste.onclick = selectionne;

var txt ="";
txt = (liste.innerHTML += "<ul><li>Trois et demi</li></ul>") 
alert(txt)
