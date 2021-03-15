// Le but de ce job sera dans un premier temps de créer une balise button
// ayant comme id “button”. Cette balise servira à mélanger l’ensemble des
// images de l’arc-en-ciel. Par la suite, vous devrez faire en sorte qu’il soit
// possible de remettre les images dans le bon ordre. Lorsque l’on clique sur
// une image, elle doit changer de div.
// Le bouton mélanger fait remonter les images présents dans la div
// “rangees” et réorganise les images de façon aléatoire.
// Une fois qu’il y a 6 images dans la div “rangees”, un message s’affiche en
// dessous. Si l’arc-en ciel est bien reconstitué, le message “Vous avez
// gagné” s’affiche en vert. Sinon, le message “Vous avez perdu” s’affiche en
// rouge.


$('#button').click(function () {
    var parent = $("#melangees");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
})
function allowDrop(ev) {
    ev.preventDefault(); // prevent default permet de remettre a leur place les drag qui n'ont pas été droppé
    console.log("ALLOWDROP");

}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("DRAG START");
} //DataTransfer contient les données glissées au cours d'une opération de glisser-déposer. 
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));  //target se réfère à l'élément cliqué

    var parent = $("#rangees");
    var child = parent.children();
    var solution = ['image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6'];
    for (i = 0; child[i] && child[i].id == solution[i]; i++); // 
    console.log(child[0].id);
    console.log(i);
    if (child.length == 6 && i == 6) {
        console.log('gagné');
    }
    else if (child.length == 6 && i != 6)
        console.log("perdu");



}


