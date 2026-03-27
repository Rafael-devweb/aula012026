package com.senac2026teste.aula01.controllers;


import com.senac2026teste.aula01.model.DTO.AlterarStatusRequest;
import com.senac2026teste.aula01.model.entites.Usuario;
import com.senac2026teste.aula01.model.repository.UsuarioRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")

public class UsuarioController {


    @Autowired
    public UsuarioRepository usuarioRepository;

    @GetMapping
    public ResponseEntity<List<?>> listarTodos() {
        return ResponseEntity.ok(usuarioRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(usuarioRepository.findById(id).orElse(null));
    }

    @PostMapping
    public ResponseEntity<Long> salvar(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioRepository.save(usuario).getId());
    }


    @PatchMapping("/{id}")
    public ResponseEntity<?> salvar(@PathVariable Long id, @RequestBody Usuario usuario) {
        var usuarioBanco = usuarioRepository.findById(id).orElse(null);


        if (usuarioBanco != null) {
            usuarioBanco.setEmail(usuario.getEmail());
            usuarioBanco.setNome(usuario.getNome());
            usuarioBanco.setSenha(usuario.getSenha());
            usuarioBanco.setStatus(usuario.getStatus());

            usuarioRepository.save(usuarioBanco);

            return ResponseEntity.ok("Atualizado com sucesso");

        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/AlterarStatus")
    public ResponseEntity<?> AlterarStatus(@PathVariable Long id, @RequestBody AlterarStatusRequest statusRequest) {

        var usuarioBanco = usuarioRepository.findById(id).orElse(null);

        if (usuarioBanco != null) {
            usuarioBanco.setStatus(statusRequest.status());
            usuarioRepository.save(usuarioBanco);
            return ResponseEntity.ok("Atualizado com sucesso");
        }
        return ResponseEntity.notFound().build();
    }
}