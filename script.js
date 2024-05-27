class Tarefa {


    constructor(nome) {

        this.nome = nome;
        this.dataCriacao = this.getData();
        this.dataConclusao = 'Não concluída';
		this.concluida = false;

    }

    getData() {

        const data = new Date();

        return `${data.getDate()}/${(data.getMonth()+1).toString().padStart(2, '0')}/${data.getFullYear()}`;

    }

}

class ListaTarefas {

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

function seletor (tag) {
	return document.querySelector(tag);
}

function novaTarefa(tarefa,lista,painel) {
	
	let nTarefa = new Tarefa(tarefa);
	
	lista.setTarefa(nTarefa);
	
	lista.getTarefas(painel);
	
}


document.addEventListener('DOMContentLoaded',function(){
	
	let painel = seletor('.painel');
	let input = seletor('input');
	let btnAdicionar = seletor('.btnAdicionar');
	
	let listaTarefas = new ListaTarefas();

	let listaConcluir = document.querySelectorAll('.BotaoConcluir');
	let listaExcluir = document.querySelectorAll('.BotaoExcluir');
	
	btnAdicionar.addEventListener('click',function() {
		
		novaTarefa(input.value,listaTarefas,painel);
		
		listaConcluir = document.querySelectorAll('.BotaoConcluir');
		listaExcluir = document.querySelectorAll('.BotaoExcluir');
		
		listaConcluir.forEach (item => {
			
			item.addEventListener('click',function(){
				
				let alterar = item.parentNode;
			
				let pegarTarefa = listaTarefas.lista[(Array.from(listaConcluir)).indexOf(item)];
				
				let dataConclusaoAlterar = alterar.querySelector('.conclusaoTarefa');
				
				if (pegarTarefa.concluida) {
					pegarTarefa.concluida = false;
					pegarTarefa.dataConclusao = 'Não cocluída';
					alterar.classList = 'tarefa';
					dataConclusaoAlterar.textContent = pegarTarefa.dataConclusao;
					
				} else {
					pegarTarefa.concluida = true;
					pegarTarefa.dataConclusao = pegarTarefa.getData();
					alterar.classList = 'tarefaConcluida';
					dataConclusaoAlterar.textContent = pegarTarefa.dataConclusao;
					
				}
			
				
			});
		});
		
		listaExcluir.forEach(item => {
			
			item.addEventListener('click', function() {
				let excluir = item.parentNode;
				let removerIndice = Array.from(excluir.parentNode.children).indexOf(excluir); 
				listaTarefas.lista.splice(removerIndice, 1); 
				excluir.parentNode.removeChild(excluir); 

				listaConcluir = document.querySelectorAll('.BotaoConcluir');
				listaExcluir = document.querySelectorAll('.BotaoExcluir');
		});
});

		
	});
	
	
});



