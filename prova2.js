// segunda questao ( question 2 )

// caracteres dados pela senha. 
function verificarSenha(senha) 
 {if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/[0-9]/.test(senha))   
 
// retorna a senha nao valida.
 
 {return "A senha não é válida."; }
  
// retorna a senha valida. 
   
  return "A senha é válida.";}
  
// start o console.

  const senha1 = "senhaFraca123";
  const senha2 = "SenhaForte#";
  console.log(verificarSenha(senha1)); // Saída: A senha não é válida.
  console.log(verificarSenha(senha2)); // Saída: A senha é válida.
