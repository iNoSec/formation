/*var paragraph = document.getElementById('myP');
        var first = paragraph.firstChild;//on prend le 1er enfant de l'element ayant pour id myP
        var last =  paragraph.lastElementChild;//on prend le dernier enfant de l'element ayant pour id myP

        alert(first.nodeName.toLowerCase());
        alert("La on utilise nodeValue : " + first.nodeValue);
        alert("La on utilise data : " + first.data);

        alert(last.nodeName.toLowerCase());
        alert("La on utilise nodeValue : " + last.firstChild.nodeValue);//on prend le firstchild ici pour en avoir le texte
        alert("La on utilise data : " + last.firstChild.data);//data et nodeValue c'est pareil!!
*/

var p1 = document.getElementById('myP');
var p2 = document.getElementById('myP2');

var children1 = p1.childNodes
var children2 = p2.childNodes

/*
console.log(children1)
console.log(children2[0].data)//permet d'acceder a la valeur contenu dans mon tableau (créer avec childNodes)
 ayant pour index 0
*/

for(var i =0; i<children1.length;i++)
{
    if (children1[i].nodeType === 1){
        console.log("<" + children1[i].nodeName + "> --> est un Element HTML")
    }
    else if(children1[i].nodeType === 3){
        console.log(children1[i].data + "--> est un noeud texte!!")
    }
}