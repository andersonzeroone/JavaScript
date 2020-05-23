const aprovados= ['Agata', 'Paula', 'maria', 'Pedro']

aprovados.forEach( function(valor, indice){ // o primeiro param é o valor e o segundo os indeces do array
    console.log(` indice: ${indice + 1}  valor: ${valor}`)//executa a função para cada elemento do array
});

aprovados.forEach(nome => console.log(nome));//nem sempre é necessario enviar os dois params

