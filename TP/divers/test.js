var tab = [1,2,3,4,5,6]
var notes = 0

for (var i = 0 ; i < tab.length ; i++ ){
    
    if (tab[i] > notes)
    {
    notes = tab[i]
    }
}
console.log(notes)