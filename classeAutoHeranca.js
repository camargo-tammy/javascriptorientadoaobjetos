class Automovel {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }


exibirDetalhes(){
    return `${this.marca},${this.modelo}, ${this.ano}`
}
}

class Moto extends Automovel {
    constructor(marca, modelo, ano, cilindrada){
        super(marca,modelo,ano);
        this.cilindrada = cilindrada;
    }

exibirDetalhes(){
    return `${super.exibirDetalhes()}, cilindrada: ${this.cilindrada}`;

}
}       
class Carro extends Automovel {
    constructor(marca, modelo, ano, portas){
        super(marca,modelo,ano,portas);
        this.portas = portas;
    }
}

let moto1 = new Moto("Kawasaki", "Ninja 300", 2025, 296);
console.log(moto1.exibirDetalhes());
let carro1 = new Carro("Honda", "Civic g10", 2021, 4);
console.log(carro1.exibirDetalhes());