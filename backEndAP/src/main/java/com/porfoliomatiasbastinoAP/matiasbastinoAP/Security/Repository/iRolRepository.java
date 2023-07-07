package com.porfoliomatiasbastinoAP.matiasbastinoAP.Security.Repository;

import com.porfoliomatiasbastinoAP.matiasbastinoAP.Security.Entity.Rol;
import com.porfoliomatiasbastinoAP.matiasbastinoAP.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
