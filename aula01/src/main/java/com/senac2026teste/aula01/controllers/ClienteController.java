package com.senac2026teste.aula01.controllers;

import com.senac2026teste.aula01.model.DTO.AlterarStatusCliente;
import com.senac2026teste.aula01.model.entites.Cliente;
import com.senac2026teste.aula01.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    public ClienteRepository clienteRepository;

    @GetMapping
    public ResponseEntity<List<?>> listarTodos() {
        return ResponseEntity.ok(clienteRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(clienteRepository.findById(id).orElse(null));
    }

    @PostMapping
    public ResponseEntity<Long> salvar(@RequestBody Cliente cliente) {
        return ResponseEntity.ok(clienteRepository.save(cliente).getId());

    }


    @PatchMapping("/{id}")
    public ResponseEntity<?> salvar(@PathVariable Long id, @RequestBody Cliente cliente) {
        var clienteBanco = clienteRepository.findById(id).orElse(null);


        if (clienteBanco != null) {

            clienteBanco.setNome(cliente.getNome());
            clienteBanco.setDocumento(cliente.getDocumento());
            clienteBanco.setStatus(cliente.getStatus());

            clienteRepository.save(clienteBanco);

            return ResponseEntity.ok("Atualizado com sucesso");

        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/AlterarStatus")
    public ResponseEntity<?> AlterarStatus(@PathVariable Long id, @RequestBody AlterarStatusCliente statusCliente) {

        var clienteBanco = clienteRepository.findById(id).orElse(null);

        if (clienteBanco != null) {
            clienteBanco.setStatus(statusCliente.status());
          clienteRepository.save(clienteBanco);
            return ResponseEntity.ok("Atualizado com sucesso");
        }
        return ResponseEntity.notFound().build();
    }


}
