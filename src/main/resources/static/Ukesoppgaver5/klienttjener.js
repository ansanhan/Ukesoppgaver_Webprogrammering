function hentTemp(){
    const mnd = $("#mnd").val();
    const url = "/hentTemp?mnd=" + mnd;
    $.get(url,function(temp){
        if (temp !==0) {
            $("#vismnd").html("Det var en gjennomsnittstemperatur på " + temp + " grader i " + mnd);
        } else {
            $("#vismnd").html("Ugyldig månedsnavn. Husk å skrive måneden med stor forbokstav.");
        }
    });
}