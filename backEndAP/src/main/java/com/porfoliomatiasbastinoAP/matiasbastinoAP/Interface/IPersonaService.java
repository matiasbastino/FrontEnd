package com.porfoliomatiasbastinoAP.matiasbastinoAP.Interface;

import com.porfoliomatiasbastinoAP.matiasbastinoAP.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una lista de persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto pero lo buscamos por id
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
}
