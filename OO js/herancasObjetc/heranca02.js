//cadeia de prototipos (prototype chain)

const avo = {attr1: 'A'}
const pai = { __proto__:avo, attr2: 'B'}
const filho =  { __proto__:pai, attr3: 'C'}

console.log(filho.attr1); 
//como FILHO não tem o attr1 ele irá buscar na cadeia de prototype 
// e encontrará o attr1 dentro de avo.


const carro ={
    velAtual: 0,
    velmax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velmax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velmax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velmax}Km/h`;
    }
}

const ferrari ={
    modelo:'F40',
    velMax: 320
}

const volvo ={
   modelo:'V40',
   status(){
       return `${this.modelo} ${super.status()}`
   }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());