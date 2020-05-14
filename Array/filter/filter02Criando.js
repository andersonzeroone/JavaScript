//criando o metodo filter
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0; i< this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray;
}


//O Filter gera um novo array a partir de uma condição
const produtos = [
    {nome: 'notebook', preco: 1.000, fragil: true},
    {nome: 'celular', preco: 500, fragil: false},
    {nome: 'geladeira', preco: 789, fragil: true},
    {nome: 'fogao', preco: 400, fragil: true}
]

const caro = produto => produto.preco >= 600 // se for maio ou igual a 600 retorna true, caso contrario retorna false
console.log( produtos.filter2(caro)) 
