package com.senac2026teste.aula01.model.entites;


import com.senac2026teste.aula01.model.enums.EnumStatusCliente;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table
@Entity
public class Cliente {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String nome;

    private String documento;




    private EnumStatusCliente status = EnumStatusCliente.ATIVO;
}
