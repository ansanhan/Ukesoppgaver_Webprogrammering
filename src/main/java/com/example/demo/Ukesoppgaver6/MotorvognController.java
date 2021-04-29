package com.example.demo.Ukesoppgaver6;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MotorvognController {
    @Autowired
    private MotorvognRepository rep;
    @PostMapping("/motorvogn")
    public void RegistrereMotorvogn(Motorvogn motorvogn) {
        System.out.println("howdy");
        rep.lagreMotorvogn(motorvogn);
    }

    @GetMapping("/motorvogn")
    public List<Motorvogn> HenteMotorvogn() {
        return rep.henteMotorvogn();
    }
}