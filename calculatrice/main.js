// let m1 = Number(prompt('Premier opérateur : '));
// let m2 = prompt('opération : ');
// let m3 = Number(prompt('Deuxieme opérateur : '));
// let result;
// let validation = confirm("Voulez vous éxecuter l'opération ?");

// if (m2 === '+') {
//     result = m1 + m3;
// }

// if (m2 === '-') {
//     result = m1 - m3;
// }

// if (m2 === '/') {
//     result = m1 / m3;
// }

// if (m2 === '*') {
//     result = m1 * m3;
// }

// while (!validation) {
//     m1 = Number(prompt('Premier opérateur : '));
//     m2 = prompt('opération : ');
//     m3 = Number(prompt('Deuxieme opérateur : '));
//     if (m2 === '+') {
//         result = m1 + m3;
//     }

//     if (m2 === '-') {
//         result = m1 - m3;
//     }

//     if (m2 === '/') {
//         result = m1 / m3;
//     }

//     if (m2 === '*') {
//         result = m1 * m3;
//     }
//     validation = confirm("Voulez vous éxecuter l'opération ?");
// }

// if (validation) {
//     alert(result);
// }
function ajouter(params) {
    document.querySelector('input').value += params
}
//fonction operation 
function operation(signe) {
    document.querySelector('input').value += signe
}
//fonctions effectuant des operations speciales (via des methodes intégrées à javascript)
function fonctionSpeciale(opespeciale) {
    switch (opespeciale) {
        case "sqrt":
            document.Calculette.affiche.value = Math.sqrt(eval(document.Calculette.affiche.value));
            break;
        case "log":
            document.Calculette.affiche.value = Math.log(eval(document.Calculette.affiche.value));
            break;
        case "pow":
            document.Calculette.affiche.value = Math.pow(eval(document.Calculette.affiche.value), 2);
            break;
    }
}

//fonction de resultat
function resultat() {
    let result = document.querySelector('input').value;
    // if (!result.match(/[0-9]+(?:\+)|(?:\-)|(?:\*)|(?:\/)[0-9]+/)) {
    //     alert("le format n'est pas correct");
    // }
    // else {
    let reponse;
    let calcul;
    let test_plus = result.match(/(?:\+)/);
    let test_minus = result.match(/(?:\-)/);
    let test_multi = result.match(/(?:\*)/);
    let test_divi = result.match(/(?:\/)/);

    if (test_plus && test_plus.length !== 0) {
        calcul = result.split('+');
        reponse = Number(calcul[0]) + Number(calcul[1]);
    }
    if (test_minus && test_minus.length !== 0) {
        calcul = result.split('-');
        reponse = Number(calcul[0]) - Number(calcul[1]);
    }
    if (test_multi && test_multi.length !== 0) {
        calcul = result.split('*');
        reponse = Number(calcul[0]) * Number(calcul[1]);
    }
    if (test_divi && test_divi.length !== 0) {
        calcul = result.split('/');
        reponse = Number(calcul[0]) / Number(calcul[1]);
    }
    document.Calculette.affiche.value = reponse;
}
//fonction réinisialisation
function reset() {
    document.Calculette.affiche.value = '';
}

// }