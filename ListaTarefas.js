class ListaTarefas {

    #lista

    constructor() {
        this.#lista = new Array();
    }

    setTarefa(item) {
        this.#lista.push(item);
    }

    getTarefas(painel) {

        this.#lista.forEach((item) => {

            let item = document.createElement('div');
            item.classList('tarefa');

            let NomeTarefa = document.createElement('div');
            NomeTarefa.classList('nomeTarefa');

            let dataCriacao = document.createElement('div');
            dataCriacao.classList('criacaoTarefa');

            let dataConclusao = document.createElement('div');
            dataConclusao.classList('criacaoTarefa');

            let BotaoConcluir = document.createElement('div');
            BotaoConcluir.classList('BotaoConcluir');

            let BotaoExcluir= document.createElement('div');
            BotaoExcluir.classList('BotaoExcluir');

        });

    }

}