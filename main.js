const canvas = document.querySelector('canvas');
const ctx = canvas.getContext ('2d');

// Function criada para que o fundo do canvas não suma ao utilizar a function setInterval();
function fundoCanvas(){

    // Desenha cor do canvas
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect(0,0,600,400);

    // Desenha borda.
    ctx.beginPath();
    ctx.moveTo (0, 0);
    ctx.lineTo (0,400);
    ctx.lineTo (600,400);
    ctx.lineTo (600, 0);
    ctx.lineTo (0, 0)
    ctx.strokeStyle = 'white';
    ctx.stroke();


    // Desenha linhas das madeiras.
    function linhaMadeira(){

         
        let linhaMadeira = 10;
        while(linhaMadeira <= 600){
        
            ctx.beginPath();
            ctx.moveTo (linhaMadeira, 0);
            ctx.lineTo (linhaMadeira,400);
            ctx.strokeStyle = "black"
            ctx.stroke();
            linhaMadeira =  linhaMadeira + 40;
            linhaMadeira++
            
        }        
      }

    // Desenha Parafuso das madeiras.
    function desenhaParafuso(){
           
        
          for(let linha = 50; linha <=400 ; linha++){
                    for (let coluna = 30; coluna <= 600; coluna++ ){  
                    desenhaCirculo(coluna, linha, 'black', radius - 8);  
                    
                    coluna = coluna + 40;
                    }
                    linha = linha + 100;
                    
                    
            }     
        }
    
    
    desenhaParafuso();
    linhaMadeira();

}


// Desenha circulo
function desenhaCirculo(x, y, color, radius){
    ctx.fillStyle = color; 
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

// Define circunferência inicial do circulo.
const radius = 10; 

function desenhaAlvo(x, y){
    desenhaCirculo(x, y, 'white', radius+40);
    desenhaCirculo(x, y, 'black', radius+30);
    desenhaCirculo(x, y, 'DodgerBlue', radius+20);
    desenhaCirculo(x, y, 'red', radius+10);
    desenhaCirculo(x, y, 'yellow ', radius);
}

// Sorteia posições aleatorias do Alvo.
function sorteiaPosicao(limiteMinimo, limiteMaximo){
   
    return  Math.random() * (limiteMaximo - limiteMinimo) + limiteMinimo;
   
} 

let xAleatorio 
let yAleatorio 

// Atualiza a tela para o alvo sumir e aparecer em uma nova posição.
function atualizaTela(){
       
     xAleatorio = sorteiaPosicao(50, 550);
     yAleatorio = sorteiaPosicao(50,350);

        fundoCanvas()
        desenhaAlvo(xAleatorio,yAleatorio);
        
}    
// Define o intevalo de tempo que o alvo ficará na tela.
    setInterval(atualizaTela, 600);
     


// Quando clicar no alvo amarelo, tela exibe msg de acerto do alvo. 
function exibeAlerta(event){

    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop; 
   
    if((x >= xAleatorio - radius && x <= xAleatorio + radius) 
        && ( y >= yAleatorio - radius && y <= yAleatorio + radius)) {
            alert ("Parabéns, você acertou o alvo !! ")
    }
       
}



canvas.onclick = exibeAlerta;
