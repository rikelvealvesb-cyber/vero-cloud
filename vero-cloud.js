class VeroCloud {
    constructor(accessKey) {
        if (!accessKey) throw new Error("A Access Key do Vero Cloud é obrigatória!");
        // A URL do banco fica totalmente oculta aqui dentro do seu script
        this.databaseURL = "https://subjectrobot-49600-default-rtdb.firebaseio.com";
        this.accessKey = accessKey;
    }

    // Método para salvar ou atualizar dados
    async set(caminho, dados) {
        const url = `${this.databaseURL}/accessData/${this.accessKey}/${caminho}.json`;
        const res = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        if (!res.ok) throw new Error("Acesso negado ou chave inválida.");
        return await res.json();
    }

    // Método para buscar todos os dados da chave
    async get() {
        const url = `${this.databaseURL}/accessData/${this.accessKey}.json`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao carregar dados.");
        return await res.json();
    }
}
