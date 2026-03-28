package com.senac2026teste.aula01.model.repository;


import com.senac2026teste.aula01.model.entites.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{
}
