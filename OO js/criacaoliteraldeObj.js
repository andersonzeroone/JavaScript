//usando notação literal

const obj1 = {}
console.log(`obj1 :${obj1}`);

//objeto em JS

console.log(typeof Object , typeof new Object);
const obj2 = new Object

// funções construtoras 

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log( `Produto P1: ${p1.getPrecoComDesconto()} P2: ${p2.getPrecoComDesconto()}`);

//função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return ( salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7800, 4)
const f2 = criarFuncionario('Maria', 7800, 1)
console.log(`Criar Funcionario F1: ${f1.getSalario()} F2: ${f2.getSalario()}`);

//object.create
const filha = Object.create(null)
filha.name = 'Ana'
console.log(filha);

// uma função famosa que retorna um Json

const fromJSon = JSON.parse('{"info":"sou um obj"}')
console.log(`FromJson: ${fromJSon.info}`)

