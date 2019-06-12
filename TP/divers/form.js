function validateForm(a) {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        var node = document.createElement("span");
        var textnode=document.createTextNode("Faut remplir la case!!");
        node.appendChild(textnode); 
        document.getElementById("node1").appendChild(node);        
      return false;
    }
  }