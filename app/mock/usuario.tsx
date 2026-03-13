import { Usuario } from "../context/AuthContext";

export class UsuarioMock{
    private static usuarioDB: Usuario[] =[
        new Usuario(1,"rafael candido","9897980980", true),
        new Usuario(2,"jana candido","9897980980", true),
        new Usuario(3,"renan candido","9897980980", true),
        new Usuario(4,"rafaela candido","9897980980", true),
        new Usuario(5,"davi candido","9897980980", true),
    ];

    static async listarTodos():Promise<Usuario[]>{
        return[...this.usuarioDB]
    }

}