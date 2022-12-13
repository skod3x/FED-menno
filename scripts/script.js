/******************************/
/* menu openen de MENU button */
/******************************/

// menu-button opslaan in variable
var openButton = document.querySelector("header > button");

// menu button latel luisteren naar een click en functie laten uitvoeren
openButton.addEventListener("click", openMenu);

// function voegt class toe aan nav
function openMenu() {
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}


/************************************/
/* menu sluiten met de sluit button */
/************************************/

// sluit button opslaan in variable
var sluitButton = document.querySelector("header nav button");

// sluit button laten luisteren naar een click en functie laten uitvoeren
sluitButton.addEventListener("click", sluitMenu);

//functie voor verwijderen class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

/**********************************/
/* menu sluiten met escape */
/**********************************/
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}