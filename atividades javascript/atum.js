//aluno: céu do nascimento
function verificarEntrada(entrada) {
  const convert = parseInt(entrada);

  if (!isNaN(convert)) {
      if (convert % 2 === 0) {
          console.log(entrada + " é um número par.");
      } else {
          console.log(entrada + "é um número ímpar.");
      }
  } else if (typeof entrada === "string") {
      console.log(entrada + "é uma string.");
  } else {
      console.log(entrada + " não é um número nem uma string.");
  }
}

const numEntradas = 5;

for (let i = 0; i < numEntradas; i++) {
  let entrada = prompt("Por favor, informe um valor: ");
  verificarEntrada(entrada);
}