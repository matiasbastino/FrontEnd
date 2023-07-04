package com.porfoliomatiasbastinoAP.matiasbastinoAP.Repository;

import com.porfoliomatiasbastinoAP.matiasbastinoAP.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
