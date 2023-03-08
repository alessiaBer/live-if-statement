/* 2. Live:
età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande */

//strumenti
//prompt
//console.log
//if else
//Number() o parseInt()

//chiedo l'età alla prima persona e console log
const firstAge = Number(prompt('quanti anni hai?'));
//chiedo l'età alla seconda e console log
const secondAge = parseInt(prompt('quanti anni hai?'));

console.log(firstAge, secondAge);
// verifico se la prima persona è più vecchia
if (firstAge > secondAge) {
    console.log('La prima persona è più grande');
}
// verifico se la seconda è più vecchia
else if (secondAge > firstAge) {
    console.log('la seconda è più grande');
}
// verifico se hanno la stessa età
else {
    console.log('Hanno la stessa età');
}