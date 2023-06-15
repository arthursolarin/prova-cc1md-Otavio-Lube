// terçeira questao ( question 3 )

function calcularFatorial(numero) 

  // criaçao do (fatoral)  
{ if (numero === 0 || numero === 1 )
    { return 1; }
     
    let fatorial = 1;
   
    for ( let i = 2; i <= numero; i++ )  
    
    {fatorial *= i;}    
    
    return fatorial;}
  // aqui calcula-se a const.
  
    for (let i = 1; i <= 10; i++) {
    const fatorial = calcularFatorial(i);
   
  // console para start do programa.
    console.log(`O fatorial de ${i} é ${fatorial}`);
  
}
