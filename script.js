import {Tarefa} from './Tarefa.js';
import {ListaTarefas} from './ListaTarefas.js';

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



