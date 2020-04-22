    const red = src = "imgens/red.png";
    const yellow = src = "imgens/yellow.png";
    const green = src = "imgens/green.png";
    const greenP = src = "imgens/verde.png";
    const redP = src = "imgens/vermelho.png";


    (function (){
        setTimeout( () => {swapGreen();}, 4000);
    })()

    function swapGreen(){
        document.getElementById("semaforo1").src = green;
        document.getElementById("pedestre1").src = redP;

        setTimeout( () => {swapYellow();}, 4000);
    }

    function swapYellow(){
        document.getElementById("semaforo1").src = yellow;
        setTimeout( () => {swapRed();}, 2000);
    }
    function swapRed(){
        document.getElementById("semaforo1").src = red;
        document.getElementById("pedestre1").src = greenP;
        setTimeout( () => {swapG();}, 1000);
    }

    function swapG(){
        document.getElementById("semaforo2").src = green;
        setTimeout( () => {swapY();}, 4000);
    }

    function swapY(){
        document.getElementById("semaforo2").src = yellow;
        setTimeout( () => {swapR();}, 2000);
    }
    function swapR(){
        document.getElementById("semaforo2").src = red;
           setTimeout( () => {swapGreen();}, 4000)
    }
