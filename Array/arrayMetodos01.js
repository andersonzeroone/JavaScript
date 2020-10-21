const pilotos = ['vettel', 'Aloson', 'Raikonen', 'massa'];
pilotos.pop() // remove o ultimo elemento;
console.log(` POP : ${pilotos}`);

pilotos.push('vertappen'); //add na ultima posição
console.log(` PUSH : ${pilotos}`);

pilotos.shift(); // remove o primeiro elemento
console.log(` SHIFT : ${pilotos}`);

pilotos.unshift()// add na primeira posição
console.log(` UNSHIT : ${pilotos}`);


//O SPLICE pode tanto remover como add alementos 
pilotos.splice( 2, 0,'Bottas', 'Massa')// vai add antes da posição dois
console.log(` ADD Com SPICE : ${pilotos}`);

//Removendo com splice
pilotos.splice(3,1); // remove na posição , apenas um elemento
console.log(` REMOVENDO COM SPLICE : ${pilotos}`);

//SLICE permite criar um novo array a partir de outro array
//informando  para o novo array quais posição vai copiar do antigo array

const algunsPilotos = pilotos.slice(2);// o novo array irá ter os elemtos do array anterior comencando da posição 2 
console.log(` slice : ${algunsPilotos}`);
