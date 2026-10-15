// getElementById

/**
 * document? -> HTML fajl unutar koga se ucitava script.js
 * document = index.html
 *
 * document.getElementById
 *      -> vraca element na osnovu ID-a
 *      -> iz index.html izvuci mi element koji sadrzi ID "name"
 *
 *
 *  style
 *     <h1 style="color: red"></h1>
 */

/**
 * getElementById -> prosledite id, dobijate element
 *  - getElementByClassName -> prosledite klasu i bobijate aray sa elementima
 *  - querySelector -> po id "#id"
 *  - querySelectorAll -> "#name", ".name" -> vraca array sa elementima
 */

// h1Element.innerText = "Mira"

let h1Element = document.getElementById("name")

let name = prompt("Unesite ime")
console.log(name)

let textColor = prompt("Unesite boju texta")
console.log(textColor)

let backgroundColor = prompt("Unesite boju pozadine")
console.log(backgroundColor)

h1Element.style.color = "red"

h1Element.style.background = "black"

h1Element.innerText = "Mira";

h1Element.innerText = name;

h1Element.style.color = textColor

h1Element.style.background = backgroundColor






// ime prompt




// vezba : prompt(ime)



// vezba: koju boja slova


// vezba: korisnik koju pozadinu zeli



// document.getElementById("name").style.color = "red";


// document.getElementById("name").style.background = "black"


// vezba: umesto ana nesto drugo


// vezba : prompt(ime) resenje


// vezba: koju boja slova reseje


// vezba: korisnik koju pozadinu zeli resenje







// let h1Element = document.getElementById("name");

// let name = prompt("unesite vase ime")
// console.log(name)

// let textColor = prompt("unesite boju texta")
// console.log(textColor)

// let backgroundColor = prompt("unesite boju pozadine")
// console.log(backgroundColor)

// // document.getElementById("name").innerText = "Mira"
// h1Element.innerText = "Mira"

// // document.getElementById("name").style.color = "red"
// h1Element.style.color = "red"

// h1Element.style.color = textColor

// h1Element.innerText = name

// h1Element.style.background = backgroundColor

// // document.getElementById("name").style.background = "black"
// h1Element.style.background = "black"











// kao da promenim boju element direktno iz js

// let h1Element2 = document.getElementById("name");

// document.getElementById("name").style.color = "red";
// h1Element2.style.color = "red";
// <h1 id="name" style="color: red;">Ana</h1>

// domaci : pozadina da bude crna
// document.getElementById("name").style.background = "black";
// h1Element2.style.background = "black";

// domaci : da pise umesto ana = mira
// h1Element2.innerText = "Mira";

// domaci: ubaciti isk prozor(prompt) unutar kog ce korisnik uisati ime i da pise njegovo ime

// let name = prompt("uneste vase ime")
// console.log(name)

// h1Element2.innerText = name;

// vezba :koju boja slova zeli da unese

// let textColor = prompt("unesite zeljenu boju")

// console.log(textColor)

// h1Element2.style.color = textColor;

// domaci : pitati korisnika da promeni pozadinsku boju
// let backgroundColor = prompt("koju boju pozadine zelite?")
// console.log(backgroundColor);

// h1Element2.style.background = backgroundColor;



/**
 * getElementById -> prosledite id, dobijate element
 *  - getElementByClassName -> prosledite klasu i bobijate aray sa elementima
 *
 *  - querySelector -> "#name" ".name" -> vraca 1 element
 *  - querySelectorAll -> "#name", ".name" -> vraca array sa elementima
 */




// let h1Element = document.getElementById("name");

// h1Element.innerText = "Mira"


// let name = prompt("unesite ime")
// console.log(name)

// h1Element.innerText = name;

// let textColor = prompt("unesite boju texta")
// console.log(textColor)

// let backgroundColor = prompt("unesite pozadinsku boju")
// console.log(backgroundColor)


// document.getElementById("name").style.color = "red"
// h1Element.style.color = "red"
// h1Element.style.color = textColor

// document.getElementById("name").style.background = "black"
// h1Element.style.background = "black"
// h1Element.style.background = backgroundColor;








// kao da promenim boju element direktno iz js

// document.getElementById("name").style.color = "red"
// <h1 id="name" style="color: red;">Ana</h1>

// vezba : crna pozadina
// document.getElementById("name").style.background = "black"

// let h1Element = document.getElementById("name");

// h1Element.style.color = "red"

// h1Element.style.background = "black"

// vezba : umesto ana nesto drugo
// document.getElementById("name").innerText = "Mira"

// h1Element.innerText = "Mira"

// vezba : iskacuci prozor (prompt)
// let name = prompt("unesite ime")
// console.log(name)

// h1Element.innerText = name;

// vezba: koju boju slova zeli da unese

// let textColor = prompt("unesite zeljenu boju texta")
// console.log(textColor)

// h1Element.style.color = textColor;

// vezba : koju pozadinu zeli (boju)



// let backgroundColor = prompt("unesite zeljenu boju pozadine")
// console.log(backgroundColor)

// h1Element.style.background = backgroundColor;

/**
 * - getElementById -> proslkedite ID, dobijate element
 * - getElementByClassName -> prosleddite klasi i dobijate array sa elementima
 * - querySelector -> "#name", ".name" -> vraca 1 element
 * - querySelectorAll -> "#name", ".name" -> vraca array sa elementima
 * 
 */














// document.getElementById("name").style.color = "red";
// <h1 id="name" style="color: red;">Ana</h1>

// domaci : staviti pozadinu u crno
// u css -> background-coloer, u js -> backgroundColor
// document.getElementById("name").style.background = "black";

// let name = prompt("unesite vase ime")
// console.log(name)

// domci: koju boju slov zeli da unese
// resenje
// let textColor = prompt("unsite zeljenu boju tetxta")
// console.log(textColor);

// let h1Element = document.getElementById("name");

// zamena za document.getElementById
// h1Element.style.color = "white";
// resenje za textColor
// h1Element.style.color = textColor;

// h1Element.style.background = "green";

// vezba : umesto ana da p[ise neso drugo
// document.getElementById("name").innerText = "Tara"
// h1Element.innerText = "Tara";

// domaci : ubaciti propmpt("Mira")
// resenje
// h1Element.innerText = name;

// domci: koju boju slov zeli da unese
// resenje

// domaci : prozor(prompt) da promeni popzadinu
// let backgroundColor = prompt("koju boju pozadine zelite")
// console.log(backgroundColor)

// h1Element.style.background = "red";

/**
 * getElementById -> prosledite id, dobijate element
 *  - getElementByClassName -> prosledite klasu i bobijate aray sa elementima
 *  - querySelector -> po id "#id"
 *  - querySelectorAll -> "#name", ".name" -> vraca array sa elementima
 */
