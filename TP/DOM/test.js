/*var divs = document.getElementsByTagName("li");
var count = 0;

for (i = 0 ; i < divs.length;i++){
    count++    
}
alert("Tu as " + count + " li")*/

//document.getElementById("menu").className = "menu2"

/*
var test = document.getElementById("test")
function change(e){
 e.target.className="test2";
    
}
test.onclick = change;*/

legende = document.getElementById("legende")
console.log("Voici mon code html de ma div: " + legende.innerHTML)
console.log("legende.textContent: " + legende.textContent)
console.log("legende.firstChild: " + legende.firstChild) // h3
console.log("legende.firstChild.textContent: " + legende.firstChild.textContent)//contenu du h3
console.log("legende.firstChild.nextSibling.firstChild.textContent : " + legende.firstChild.nextSibling.firstChild.textContent)
console.log("legende.lastChild: " + legende.lastChild)
console.log("legende.lastChild.fisrtChild.textContent: " + legende.lastChild.firstChild.textContent)
console.log("legende.lastChild.textContent: " + legende.lastChild.textContent)
console.log("legende.lastChild.previousSibling.textContent: " + legende.lastChild.previousSibling.textContent)
console.log("legende.lastElementChild: " + legende.lastElementChild)
console.log("legende.lastElementChild.textContent: " + legende.lastElementChild.textContent)




/*
alert(myMenu.innerHTML)
alert(myMenu.firstChild.innerHTML)
alert(myMenu.firstChild.nextSibling.innerHTML)
*/