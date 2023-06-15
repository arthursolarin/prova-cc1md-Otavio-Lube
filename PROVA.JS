// primeira questao ( QUESTION 1)

function ehPrimo(numero) 

// constancia do numero. 

{if (numero < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) 
    { if ( numero % i === 0 ) 
     
      { return false } }
    return true;}
//divisao dos dos numeros. 
  
function listarPrimos()
 
  { const primos = [];
   
    for ( let numero = 1; numero <= 1000; numero++ ) 
    
    { if ( ehPrimo( numero ) ) {
        
        primos.push(numero) ; }  }
    
        return primos;}
  
  const primosAte1000 = listarPrimos();
  
// console para start do programa.
  
console.log(primosAte1000);
  
