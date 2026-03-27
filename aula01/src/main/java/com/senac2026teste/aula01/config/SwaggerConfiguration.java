package com.senac2026teste.aula01.config;


import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {

    public OpenAPI custonOpenApi(){
        return new OpenAPI().info( new Info()
                .title("aula01 API")
                .version("1.0")
                .description("API por controlar a oficinas mecanicas")
                .termsOfService("Linkedin")
        );
    }


}
