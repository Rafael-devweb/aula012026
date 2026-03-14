import { Usuario } from "../context/AuthContext";

export class UsuarioMock {
    private static usuarioDB: Usuario[] = [
        new Usuario(1, "rafael candido", "9897980980", true),
        new Usuario(2, "jana candido", "9897980980", true),
        new Usuario(3, "renan candido", "9897980980", true),
        new Usuario(4, "rafaela candido", "9897980980", true),
        new Usuario(5, "davi candido", "9897980980", true),
    ];

    static async listarTodos(): Promise<Usuario[]> {
        return [...this.usuarioDB]
    }

    static async salvar(usuario: Usuario): Promise<void> {


        const indexExistente = this.usuarioDB.findIndex(u => u.codigo === usuario.codigo);

        if(indexExistente === -1){

       
        const novoCodigo = Math.max(...this.usuarioDB.map(u => u.codigo)) + 1;
        usuario.codigo = novoCodigo;
        this.usuarioDB.push(usuario);
        console.log(`usuario id ${novoCodigo}salvo com sucesso `)

        
          }else{
            this.usuarioDB[indexExistente].name = usuario.name;
             this.usuarioDB[indexExistente].cpf = usuario.cpf;

             console.log(`Usuario de Id ${usuario.codigo} Atulizado com sucesso!`);
    }
}

    static async buscarPorId(codigo: Number): Promise<Usuario | undefined> {

        return this.usuarioDB.find(u => u.codigo === codigo);
    }

}