var myDiv = document.getElementById('myDiv');
    
color = getComputedStyle(myDiv).color;
alert('Selon le JavaScript, la couleur de fond de ce <div> est : ' + color); // On affiche la couleur de fond
