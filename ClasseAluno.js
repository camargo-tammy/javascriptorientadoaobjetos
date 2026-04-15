class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calculaMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }

    obterStatus() {
        const media = this.calculaMedia();
        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }
    exibirRelatorio(){
        console.log(`=============================================`);
        console.log(`Relatorio do aluno ${this.nome}`);
        console.log(`Matricula ${this.matricula}`);
        console.log(`Media Final ${this.calculaMedia().toFixed(2)}`);
        console.log(`Status ${this.obterStatus()}`);
        console.log(`=============================================`);
        

    }
}



let turma = [
    new Aluno(`Alice Ença`, `CGM5050`, [8.0, 7.3, 9.0]),
    new Aluno(`Jacinto Pontes`, `CGM5051`, [2.5,7.8,4.2]),
    new Aluno(`Oscar Alho`, `CGM5052`,[5.0,8.0,9.0]),
    new Aluno(`Amandão Caminhoneria`,`CGM5053` ,[5.9,2.9,1.0]),
]


for (let i = 0; i < turma.length; i++ ){
    turma[i].exibirRelatorio();
}