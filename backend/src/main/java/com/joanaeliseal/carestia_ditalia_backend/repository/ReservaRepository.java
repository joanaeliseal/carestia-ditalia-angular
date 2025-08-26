package com.joanaeliseal.carestia_ditalia_backend.repository;

import com.joanaeliseal.carestia_ditalia_backend.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //A interface é um componente de repositório, o que permite que o Spring a gerencie e a injete em outras classes (serviço).
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    // O Spring Data JPA fornece automaticamente os métodos de CRUD (salvar, buscar, deletar, etc.)

}

