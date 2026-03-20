import { Cliente } from "../context/AuthContext";

export class ClienteMock {
    private static clienteDB: Cliente[] = [
        new Cliente(1, "rafael ", "9897980980", true),
        new Cliente(2, "jana ", "9897980980", true),
        new Cliente(3, "renan ", "9897980980", true),
        new Cliente(4, "rafaela ", "9897980980", true),
        new Cliente(5, "davi", "9897980980", true),
    ];

    static async listarTodos(): Promise<Cliente[]> {
        // Retorna uma cópia da lista para evitar mutações acidentais
        return [...this.clienteDB];
    }

    static async salvar(cliente: Cliente): Promise<void> {
        const indexExistente = this.clienteDB.findIndex(c => c.codigo === cliente.codigo);

        if (indexExistente === -1) {
            // Lógica segura para gerar novo ID
            const ultimoId = this.clienteDB.length > 0 
                ? Math.max(...this.clienteDB.map(c => c.codigo)) 
                : 0;
            
            cliente.codigo = ultimoId + 1;
            this.clienteDB.push(cliente);
            console.log(`Usuário ID ${cliente.codigo} salvo com sucesso!`);
        } else {
            // Atualiza o registro existente
            this.clienteDB[indexExistente] = { ...cliente };
            console.log(`Usuário de Id ${cliente.codigo} atualizado com sucesso!`);
        }
    }

    // Corrigido de Number para number
    static async buscarPorId(codigo: number): Promise<Cliente | undefined> {
        const encontrado = this.clienteDB.find(c => c.codigo === codigo);
        // Retorna uma cópia do objeto
        return encontrado ? { ...encontrado } as Cliente : undefined;
    }
}