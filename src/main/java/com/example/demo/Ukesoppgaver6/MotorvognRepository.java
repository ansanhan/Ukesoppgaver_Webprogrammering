package com.example.demo.Ukesoppgaver6;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MotorvognRepository {
    @Autowired
    private JdbcTemplate db;
    public void lagreMotorvogn(Motorvogn motorvogn) {
        String sql = "INSERT INTO Motorvogn (regnummer, merke, personnummer, navn, adresse) VALUES (?,?,?,?,?)";
        try {
            db.update(sql, motorvogn.getRegnummer(), motorvogn.getMerke(), motorvogn.getPersonnummer(), motorvogn.getNavn(), motorvogn.getAdresse());
        } catch (Exception e){
            System.out.println("gikk ikke:(");
        }
    }

    public List<Motorvogn> henteMotorvogn() {
        String sql = "SELECT * FROM Motorvogn";
        try {
            List<Motorvogn> motorvognList = db.query(sql, new BeanPropertyRowMapper(Motorvogn.class));
            return motorvognList;
        } catch (Exception e){
            System.out.println("gikk ikke:(");
            return null;
        }
    }
}