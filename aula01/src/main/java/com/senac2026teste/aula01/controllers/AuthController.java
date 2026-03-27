package com.senac2026teste.aula01.controllers;


import com.senac2026teste.aula01.model.DTO.LoginRequest;
import com.senac2026teste.aula01.model.DTO.LoginResponse;
import com.senac2026teste.aula01.model.repository.UsuarioRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@Tag(description ="Servico responsavel por controlar a autentificação ", name = "Serviço de Autentificação")

public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    @Operation(description ="Validar Senha" , summary = "Login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        if (loginRequest.email().equals("String@s") && loginRequest.senha().equals("String")){
            return ResponseEntity.ok(new LoginResponse("1234"));
        }

        return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

    }


}
