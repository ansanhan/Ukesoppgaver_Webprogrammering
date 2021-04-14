import { apiKlientTjener as api} from "../apiurl.js"

$(() => {
    $("vismnd").click(() => {
        const mnd = $("mnd").val();

        $.get(api + "/hentTemp?mnd=" + mnd, temp => {
            if (temp !== 0) {
                $("vismnd").html("Det var en gjennomsnittstemperatur på " + temp + " grader i " + mnd);
            } else {
                $("vismnd").html("Du har oppgitt et ugyldig månedsnavn. Husk å skrive med stor forbokstav.");
            }
        });

    });
});