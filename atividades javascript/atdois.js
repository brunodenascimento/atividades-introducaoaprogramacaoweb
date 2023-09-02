//Aluno: céu do nascimento
function executar(fn, num1 = 0, num2 = 0) {
    if (typeof fn == 'function') {
      return fn(num1, num2);
    }
  }
  
  function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multi(a, b) {
    return a * b;
  }
  
  const funcoes = [somar, subtrair, multi];
  
 
  for (let i = 0; i < 5; i++) {
    const num1 = Math.random() * 10; // numeros usados p exemplo
    const num2 = Math.random() * 10;
    const randomIndex = Math.floor(Math.random() * funcoes.length); // funcao p exemplo 
  
    const resultado = executar(funcoes[randomIndex], num1, num2);
    console.log(`Resultado: ${resultado}`);
  }