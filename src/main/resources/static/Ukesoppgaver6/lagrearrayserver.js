$(function(){
    hentMotorvogner();
})


function registrer() {
    const regnummer = $("#regnummer").val();
    const merke = $("#merke").val();
    const personnummer = $("#personnummer").val();
    const navn = $("#navn").val();
    const adresse = $("#adresse").val();

    const motorvogn = {
        regnummer,
        merke,
        personnummer,
        navn,
        adresse
    };

    $.post("/motorvogn", motorvogn, lagtTilMotorvogn)
}

function lagtTilMotorvogn() {
    console.log("hei mats");
    hentMotorvogner();
}

function hentMotorvogner() {
    $.get("/motorvogn", visMotorvogn)
}

function visMotorvogn(motorvogner) {
    console.log(motorvogner);
}