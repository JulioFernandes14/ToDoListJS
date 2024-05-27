export class Tarefa {


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