var liste = document.getElementById("liste");

function selectionne(e){
    //e.target represente le li qui a été cliqué dans le ul
     e.target.classList.toggle("selected");
}

liste.onclick = selectionne;

//exo1
function disapear(){
var test = liste.children
    for(var i=0; i<test.length;i++)
        {
            if(test[i].classList.contains("selected"))
            {
            test[i].classList.add("disapeared")
            }
        }
}

//exo2
function reapear(){
    var test2 = liste.children
        for(var i=0; i<test2.length;i++)
            {
                if(test2[i].classList.contains("disapeared"))
                {
                test2[i].classList.remove("disapeared")
                test2[i].classList.remove("selected")
                }
            }
    }