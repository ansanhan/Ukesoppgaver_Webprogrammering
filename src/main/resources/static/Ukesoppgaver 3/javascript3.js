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
        document.getElementById("utKonvertere").innerHTML = "<br/>Feil i input - det må skrives inn et tall i feltet.";
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
        document.getElementById("utKonvertere").innerHTML = "<br/>Feil i input - det må skrives inn et tall i feltet.";
    } else {
        const fraF = (5/9)*(innF-32);

        document.getElementById("utKonvertere").innerHTML = "<br/>" + fahrenheit + " grader fahrenheit er "
            + fraF.toFixed(2) + " grader celsius.";
    }

}

/* OPPGAVE 2 */
function pluss() {
    const innTall1 = document.getElementById("tall1").value;
    const innTall2 = document.getElementById("tall2").value;

    const tall1 = Number(innTall1);
    const tall2 = Number(innTall2);

    if (isNaN(innTall1) || isNaN(innTall2)) {
        document.getElementById("utregning").innerHTML = "<br/>Feil i input - det må skrives inn et tall i begge feltene.";
    } else {
        const pluss = tall1+tall2;

        document.getElementById("utregning").innerHTML ="<br/>" + tall1 + " + " + tall2 + " = " + pluss;
    }
}

function minus() {
    const innTall1 = document.getElementById("tall1").value;
    const innTall2 = document.getElementById("tall2").value;

    const tall1 = Number(innTall1);
    const tall2 = Number(innTall2);

    if (isNaN(innTall1) || isNaN(innTall2)) {
        document.getElementById("utregning").innerHTML = "<br/>Feil i input - det må skrives inn et tall i begge feltene.";
    } else {
        const minus = tall1-tall2;

        document.getElementById("utregning").innerHTML ="<br/>" + tall1 + " - " + tall2 + " = " + minus;
    }
}

function gange() {
    const innTall1 = document.getElementById("tall1").value;
    const innTall2 = document.getElementById("tall2").value;

    const tall1 = Number(innTall1);
    const tall2 = Number(innTall2);

    if (isNaN(innTall1) || isNaN(innTall2)) {
        document.getElementById("utregning").innerHTML = "<br/>Feil i input - det må skrives inn et tall i begge feltene.";
    } else {
        const gange = tall1*tall2;

        document.getElementById("utregning").innerHTML ="<br/>" + tall1 + " * " + tall2 + " = " + gange;
    }
}

function dele() {
    const innTall1 = document.getElementById("tall1").value;
    const innTall2 = document.getElementById("tall2").value;

    const tall1 = Number(innTall1);
    const tall2 = Number(innTall2);

    if (isNaN(innTall1) || isNaN(innTall2)) {
        document.getElementById("utregning").innerHTML = "<br/>Feil i input - det må skrives inn et tall i begge feltene.";
    } else {
        const dele = tall1/tall2;

        document.getElementById("utregning").innerHTML ="<br/>" + tall1 + " / " + tall2 + " = " + dele;
    }
}
