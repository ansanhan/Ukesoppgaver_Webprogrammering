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



/* OPPGAVE 3 */
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



/* OPPGAVE 4 */
const personRegister = [];

function visPersonRegister() {
    const person1 = {
        navn: "Erik Sommer",
        adresse: "Darres gate",
        telefonnr: 43232323
    }

    const person2 = {
        navn: "Mats Sommervold",
        adresse: "Darres gate",
        telefonnr: 95732456
    }

    personRegister.push(person1, person2);

    let ut = "<table><tr>" +
        "<th><br/>Navn</th>" +
        "<th><br/>Adresse</th>" +
        "<th><br/>Telefonnr</th>" +
        "</tr>";


    for (let person of personRegister) {
        ut+= "<tr><td>" + person.navn + "</td>" +
            "<td>" + person.adresse + "</td>" +
            "<td>" + person.telefonnr + "</td>" +
            "</tr>";
    }

    ut+= "</table>";

    document.getElementById("personRegister").innerHTML=ut;
}

function registrerPerson() {
    const innNyttNavn = document.getElementById("nyttNavn").value;
    const innNyAdresse = document.getElementById("nyAdresse").value;
    const innNyttNummer = document.getElementById("nyttNummer").value;

    const nyPerson = {
        navn: innNyttNavn,
        adresse: innNyAdresse,
        telefonnr: innNyttNummer
    }

    personRegister.push(nyPerson);

    let ut = "<table><tr>" +
        "<th><br/>Navn</th>" +
        "<th><br/>Adresse</th>" +
        "<th><br/>Telefonnr</th>" +
        "</tr>";

    for (let person of personRegister) {
        ut+= "<tr><td>" + person.navn + "</td>" +
            "<td>" + person.adresse + "</td>" +
            "<td>" + person.telefonnr + "</td>" +
            "</tr>";
    }

    ut += "</table>";
    document.getElementById("personRegister").innerHTML = ut;

    document.getElementById('nyttNavn').value='';
    document.getElementById('nyAdresse').value='';
    document.getElementById('nyttNummer').value='';
}



/* EKSTRAOPPGAVE 1 */

function leggTil() {
    let li = document.createElement("li");
    let innVerdi = document.getElementById("nyToDo").value;
    let t = document.createTextNode(innVerdi);
    li.appendChild(t);
    if (innVerdi === '') {

    } else {
        document.getElementById("liste").appendChild(li);
    }
    document.getElementById("nyToDo").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

document.getElementById("feilmelding").innerHTML = "<br/>Husk at du må skrive noe i feltet :)";