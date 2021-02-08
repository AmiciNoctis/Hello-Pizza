function Pessoa(nome, sobrenome) {
    var nome = nome;
    var sobrenome = sobrenome;
    this.falar = function () {
        return("Meu nome é "+nome+" "+sobrenome);
    }
}

var programador = new Pessoa("Felipe","Barbosa");
var webDesign = new Pessoa("Gustavo","Stefani");

webDesign.nome;
console.log(webDesign.falar());  

