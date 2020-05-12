const pessoa = {
    nome:' Pedro',
    idade:22,
    peso:13
}

console.log(` Keys: ${Object.keys(pessoa)}`);  //pega as chaves do obj
console.log(` Values: ${Object.values(pessoa)}`);//pega os valores do obj
console.log(` Entries: ${Object.entries(pessoa)}`); // pega um array com dois valores, a cheve e o valor

Object.entries(pessoa).forEach(([chave, valor]) => {
        console.log(`Chave: ${chave}  valor:${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2000'

})

pessoa.dataNascimento = '02/02/3000' //não permite alterar propriedade

console.log(`DataNascimento: ${pessoa.dataNascimento}`);

console.log(` Apos add propriedade: ${Object.keys(pessoa)}`);

//Object.assign (ECMAScript 2015)

const dest = {a:1}
const a1 = {b:2}
const a2 = {c:3, d:4}
const obj = Object.assign(dest, a1, a2)

Object.freeze(obj);
obj.c =1234
console.log(obj);
