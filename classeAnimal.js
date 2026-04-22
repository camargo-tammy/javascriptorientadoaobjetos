class Animal{
    fazerSom(){
        console.log("Som genérico de animal...");
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("MIAU MIAU MIAU MIAU 🐱")
    }
}
class Vaca extends Animal{
    fazerSom(){
        console.log("MUU MUU MUU MUU 🐮")
    }
}
class Lobo extends Animal{
    fazerSom(){
        console.log("AUUH AUUH AUUH AUUUH 🐺")
    }
}
class Moto extends Animal{
    fazerSom(){
        console.log("RANDANDANDANDANDAN 🏍")
    }
}
 const meusObjetos = [new Gato(), new Vaca(),new Lobo(), new Moto()];
 for (let i = 0; i < meusObjetos.length; i++){
    meusObjetos[i].fazerSom();
 }



