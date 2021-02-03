/* OPPGAVE 1 */
function visInput() {
    const innNavn = document.getElementById("navn").value;
    const innAlder = document.getElementById("alder").value;

    if (isNaN(innAlder) || innAlder <= 0) {
        document.getElementById("utInput").innerHTML = "<br/>Feil i input, alder må være et tall større enn 0.";
    } else {
        document.getElementById("utInput").innerHTML = "<br/>Navn: " + innNavn + "<br/>Alder: " + innAlder;
    }
}

/* OPPGAVE 2 */
function CtilF() {
    const innC = document.getElementById("celsius").value;
    const celsius = Number(innC);

    if (isNaN(innC)) {
        document.getElementById("utKonvertere").innerHTML = "<br/>Feil i input - det må skrives inn et nummer i feltet.";
    } else {
        const fraC = (9/5)*innC+32;

        document.getElementById("utKonvertere").innerHTML = "<br/>" + celsius + " grader celsius er "
            + fraC.toFixed(2) + " grader fahrenheit.";
    }

}

function FtilC() {
    const innF = document.getElementById("fahrenheit").value;
    const fahrenheit = Number(innF);

    if (isNaN(innF)) {
        document.getElementById("utKonvertere").innerHTML = "<br/>Feil i input - det må skrives inn et nummer i feltet.";
    } else {
        const fraF = (5/9)*(innF-32);

        document.getElementById("utKonvertere").innerHTML = "<br/>" + fahrenheit + " grader fahrenheit er "
            + fraF.toFixed(2) + " grader celsius.";
    }

}
