export class ListaTarefas {

    #lista

    constructor() {
        this.lista = new Array();
    }

    setTarefa(item) {
        this.lista.push(item);
    }

    getTarefas(painel) {

		painel.innerHTML = '';

        this.lista.forEach((item) => {

            let tarefa = document.createElement('div');
			tarefa.classList = 'tarefa';

            let NomeTarefa = document.createElement('div');
            NomeTarefa.textContent = item.nome;
            NomeTarefa.classList = 'nomeTarefa';

            let dataCriacao = document.createElement('div');
            dataCriacao.textContent = item.dataCriacao;
            dataCriacao.classList = 'criacaoTarefa';

            let dataConclusao = document.createElement('div');
            dataConclusao.textContent = item.dataConclusao;
            dataConclusao.classList = 'conclusaoTarefa';

            let BotaoConcluir = document.createElement('div');
            BotaoConcluir.textContent = '✔️'
            BotaoConcluir.classList = 'BotaoConcluir';

            let BotaoExcluir= document.createElement('div');
            BotaoExcluir.textContent = '❌';
            BotaoExcluir.classList = 'BotaoExcluir';

            tarefa.appendChild(NomeTarefa,dataCriacao,dataConclusao,BotaoConcluir,BotaoExcluir);
            tarefa.appendChild(dataCriacao);
            tarefa.appendChild(dataConclusao);
            tarefa.appendChild(BotaoConcluir);
            tarefa.appendChild(BotaoExcluir);
			
			painel.appendChild(tarefa);

        });

    }

}