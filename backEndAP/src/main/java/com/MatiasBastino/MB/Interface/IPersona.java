
package com.MatiasBastino.MB.Interface;

import com.MatiasBastino.MB.entity.Persona;
import java.util.List;

public interface IPersona {
    //Traer una lista de persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
            
    //Eliminar un usuario
    public void deletePersona(Long id);
    
    //Buscar una persona
    public Persona findPersona(Long id);
}
