Array.prototype.forEach2 = function(callback){
    for( let i = 0 ; i < this.length; i ++){
        callback(this[i], i, this)
    }

}

const aprovados = ['Agata', 'Aldo','Daniel','Pedro']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`) 

})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)