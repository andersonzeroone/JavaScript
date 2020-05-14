//Factory simples

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notbook', 3332))
console.log(criarProduto('celular',2323))