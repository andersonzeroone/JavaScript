class lancamento{
    constructor(nome='Generico', valor=0){
        this.nome=nome
        this.valor=valor
    }
}

class cicloFinanceiro{
    constructor(mes, ano){
        this.mes =  mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach( l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado;
    }
}

const salario = new lancamento('salario', 45000);
const contaluz = new lancamento('luz', -200);

const contas = new cicloFinanceiro(6, 2008);
contas.addLancamentos(salario, contaluz);

console.log(contas.sumario());