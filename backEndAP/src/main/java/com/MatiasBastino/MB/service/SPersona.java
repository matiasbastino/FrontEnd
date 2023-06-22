package com.MatiasBastino.MB.service;

import com.MatiasBastino.MB.entity.Persona;
import com.MatiasBastino.MB.repository.RPersona;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SPersona {
   
    @Autowired
    public RPersona persoRepo;
    
    
    public List<Persona> verPersonas() {
        List<Persona> listaPersonas= persoRepo.findAll();
        return listaPersonas;
    }
    
    public Persona buscarPersona(int id){
        //Si no encuentra la persona devuelve nulo(null)
        Persona perso = persoRepo.findById(id).orElse(null);
        return perso;
    }
    
    public void crearPersona(Persona perso){
        persoRepo.save(perso);
    }
    
    public void borrarPersona(int id) {
    persoRepo.deleteById(id);
    }
    
    public void editarPersona(Persona perso){
        persoRepo.save(perso);
    }

    public List<Persona> verPersona() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
   }