// quarta questao ( question 4 )


function quadradoPerfeito(numero) {
    // devo calcular a matriz do numero.
    let raiz = Math.floor(Math.sqrt(numero));
    
    if (raiz * raiz === numero)
    
    {return true; // retorna um numero que e um quadrado perfeito.
    
         } else 

    {return false; // retorna para um numero que nao e um quadrado perfeito.
    }
  }
  
  
  let numero = parseInt(prompt("Digite um número:"));

  if (quadradoPerfeito(numero)) {
    console.log(numero + " é um quadrado perfeito.");
  } else {
    console.log(numero + " não é um quadrado perfeito.");
  }
    
    
