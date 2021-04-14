package com.example.demo.Ukesoppgaver5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ukesoppgaver5")
public class TemperaturController {
    @Autowired
    Temperatur temp;

    @GetMapping("/hentTemp")
    public int calculate(String mnd) {
        return temp.getTemp(mnd);
    }
}
