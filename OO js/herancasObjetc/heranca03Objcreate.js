const pai = {nome: 'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai); //cria o obj a partir dos atributos de pai
filha1.nome = 'Ana'   // modificando o nome de filha1
console.log(`Filha1 nome:${filha1.nome} cor do cabelo: ${filha1.corCabelo}`);

const filha2 = Object.create( pai, { // cria obj filha2 a parti dos atributos de pai
    nome: { value: 'Bia', writable: false, enumerable: true}  // não deixa possivel modificar o nome
});
filha2.nome = 'carla'
console.log(`Filha2 nome:${filha2.nome} cor do cabelo: ${filha2.corCabelo}`);

