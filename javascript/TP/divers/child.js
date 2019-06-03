var paragraph = document.getElementById('myP');
        var first = paragraph.firstChild;//on prend le 1er enfant de l'element ayant pour id myP
        var last =  paragraph.lastElementChild;//on prend le dernier enfant de l'element ayant pour id myP

        alert(first.nodeName.toLowerCase());
        alert("La on utilise nodeValue : "first.nodeValue);
        alert("La on utilise data : " + first.data);

        alert(last.nodeName.toLowerCase());
        alert("La on utilise nodeValue : " + last.firstChild.nodeValue);//on prend le firstchild ici pour en avoir le texte
        alert("La on utilise data : " + last.firstChild.data);//data et nodeValue c'est pareil!!