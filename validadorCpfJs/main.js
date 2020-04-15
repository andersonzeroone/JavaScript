
  function pegarCpf(){
    let pegarCpf = (document.querySelector(".input").value);
    let cpf = pegarCpf.replace(/([\u0300-\u036f]|[^0-9])/g, '');

    if( cpf === ''){ 
        alert('Preencha o campo')
    }else if(cpf.length < 11 ){
      alert('O cpf deve conter no minino 11 caractere.');
    }else if(cpf.length > 11 ){
      alert('O cpf deve conter no maximo 11 caractere.');
    }else{

      validarCpf(cpfInArray(cpf));
    }
      console.log(`cpf:${cpf}`)
}

  function cpfInArray(cpf){
    let cpfArray = []

    for( let i = 0; i < cpf.length; i++ ){
      cpfArray.push(parseInt(cpf.substr(i,1)));
      console.log(` arrray valor: ${cpfArray[i]} posi${i}`)
    }

      return cpfArray;
  }

  function validarCpf(cpfArray){

    let cpfAr=cpfArray;

    let primeiroDigitoVerfi = cpfAr[9];
    let primeiraVerificacao =  verificarDigitoVerificador(calcularDigit(10,cpfAr),primeiroDigitoVerfi);
    
    if(primeiraVerificacao === true){

      let segundoDigitoVerfi = cpfAr[10];
      let segundaVerificacao =  verificarDigitoVerificador(calcularDigit(11,cpfAr),segundoDigitoVerfi);
  
      segundaVerificacao === true ? document.getElementById("messege").innerHTML = `CPF valido!`:  
                                    document.getElementById("messege").innerHTML = `CPF Invalido!`             

    }else{
      document.getElementById("messege").innerHTML = `CPF Invalido `;
    }
  }

  function calcularDigit(quantIndice,cpfArr){
    let digito = 0;
    let soma = 0;
  
    for(i=quantIndice; i>=2; i--){
      soma = soma + (cpfArr[digito] * i);
      digito++
    }

    let restoCal = (soma*10) % 11;
    return  restoCal;
  
  }

  function verificarDigitoVerificador(resto,digitoVerificador){
     console.log(`fora do  if ${resto}`);

      if(resto === 10 || resto ===11){
         resto = 0;
         return resto === digitoVerificador ? true : false
      }
        return resto === digitoVerificador ? true : false 
  }
  
let apagar = () => {
    document.querySelector(".input").value = ''
    document.getElementById("messege").innerHTML = ''
}
