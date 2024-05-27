class Tarefa {


    constructor(nome) {

        this.nome = nome;
        this.dataCriacao = this.getData();
        dataConclusao = '';

    }

    getData() {

        const data = new Date();

        return `${data.getDate()}/${(data.getMonth()+1).toString().padStart(2, '0')}/${data.getFullYear()}`;

    }

}