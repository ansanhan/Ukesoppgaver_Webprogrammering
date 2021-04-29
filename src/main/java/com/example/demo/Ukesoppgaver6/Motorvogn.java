package com.example.demo.Ukesoppgaver6;

public class Motorvogn {
    public String regnummer;
    public String merke;
    public String personnummer;
    public String navn;
    public String adresse;

    public Motorvogn(String regnummer, String merke, String personnummer, String navn, String adresse) {
        this.regnummer = regnummer;
        this.merke = merke;
        this.personnummer = personnummer;
        this.navn = navn;
        this.adresse = adresse;
    }

    public Motorvogn() {

    }

    public String getRegnummer() {
        return regnummer;
    }

    public void setRegnummer(String regnummer) {
        this.regnummer = regnummer;
    }

    public String getMerke() {
        return merke;
    }

    public void setMerke(String merke) {
        this.merke = merke;
    }

    public String getPersonnummer() {
        return personnummer;
    }

    public void setPersonnummer(String personnummer) {
        this.personnummer = personnummer;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
}