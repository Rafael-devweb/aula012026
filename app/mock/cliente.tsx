


export class Cliente {
    constructor(
        public id: number | null,
        public name: string,
        public email: string,
        public status: string,



    ) { }
}

export class ClienteMock {
    private static clienteDB: Cliente[] = [
        new Cliente(1, "rafael ", "9897980980", "ATIVO"),
        new Cliente(2, "jana ", "9897980980", "ATIVO"),
        new Cliente(3, "renan ", "9897980980", "ATIVO"),
        new Cliente(4, "rafaela ", "9897980980", "ATIVO"),
        new Cliente(5, "davi", "9897980980", "ATIVO"),
    ];

    static async listarTodos(): Promise<Cliente[]> {
        // Retorna uma cópia da lista para evitar mutações acidentais
        return [...this.clienteDB];
    }

    static async salvar(cliente: Cliente): Promise<void> {
        const indexExistente = this.clienteDB.findIndex(c => c.id === cliente.id);

        if (indexExistente === -1) {
            // Lógica segura para gerar novo ID
            const ultimoId = this.clienteDB.length > 0
                ? Math.max(...this.clienteDB.map(c => c.id ?? 0))
                : 0;

            cliente.id = ultimoId + 1;
            this.clienteDB.push(cliente);
            console.log(`Cliente ID ${cliente.id} salvo com sucesso!`);
        } else {
            // Atualiza o registro existente
            this.clienteDB[indexExistente] = { ...cliente };
            console.log(`Cliente de Id ${cliente.id} atualizado com sucesso!`);
        }
    }

    static async alterarStatus(codigo: number): Promise<void> {
        const cliente = this.clienteDB.find(c => c.id === codigo);

        if (cliente) {
            // Inverte o booleano do status (ativo/inativo)
            cliente.status = cliente.status;

            console.log(`[Database] Status do Cliente ID ${codigo} alterado para: ${cliente.status}`);
        } else {
            throw new Error("Cliente não encontrado no sistema.");
        }
    }

    /**
     * Busca um cliente específico pelo seu ID/Código
     */
    static async buscarPorId(codigo: Number): Promise<Cliente | undefined> {
        // Utiliza find para retornar o objeto ou undefined caso não exista
        return this.clienteDB.find(c => c.id === codigo);
    }

}
