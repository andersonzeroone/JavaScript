Array.prototype.map2 = function(callback){
    const newArray = []

    for(let i =0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}



//O desafio é gerar um novo array apenas com os preco
const carrinho = [
    '{"nome":"borracha","preco":4.5}',
    '{"nome":"lapis","preco":8.7}',
    '{"nome":"caneta","preco":5.67}',
    '{"nome":"papel","preco":3.45}'
]

const paraObj = json => JSON.parse(json);  // cria uma variavel que vai transforma em JSON
const apenasPreco = produto =>produto.preco  // uma variavel que vai pegar apenas os preços

const resultado = carrinho.map2(paraObj).map2(apenasPreco);
console.log(resultado);