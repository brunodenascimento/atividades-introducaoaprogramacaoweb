//aluno: céu do nascimento
const alunos = [];

//essa função calcula a média arredondada
function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;
  return Math.round(media);
}

//registrar alunos
function cadastrarAluno() {
  const nome = prompt("Informe o nome do aluno:");
  const alunoExistente = alunos.find((aluno) => aluno.nome === nome);

  if (alunoExistente) {
    console.log("Aluno já registrado.");
  } else {
    alunos.push({ nome, notas: [] });
    console.log(`Aluno ${nome} registrado com sucesso.`);
  }
}

//registrar as notas 
function cadastrarNotas() {
  const nome = prompt("Por favor, escreva o nome do aluno:");
  const aluno = alunos.find((aluno) => aluno.nome === nome);

  if (aluno) {
    const notas = [];
    for (let i = 0; i < 3; i++) {
      const nota = parseFloat(prompt(`Digite a nota ${i + 1} do aluno ${nome}:`));
      notas.push(Math.round(nota));
    }
    aluno.notas = notas;
    console.log(`Notas do aluno ${nome} registradas com sucesso.`);
  } else {
    console.log("Aluno não encontrado.");
  }
}

//boletim aluno
function exibirBoletim() {
  const nome = prompt("Digite o nome do aluno:");
  const aluno = alunos.find((aluno) => aluno.nome === nome);

  if (aluno) {
    const media = calcularMedia(aluno.notas);
    let status = "";
    
    if (media >= 7) {
      status = "Aprovado";
    } else if (media >= 5) {
      status = "Em Recuperação";
    } else {
      status = "Reprovado";
    }

    console.log(`Nome: ${aluno.nome}`);
    console.log(`Notas: ${aluno.notas.join(", ")}`);
    console.log(`Média: ${media}`);
    console.log(`Status: ${status}`);
  } else {
    console.log("Aluno não encontrado.");
  }
}

//opções
while (true) {
  const escolha = parseInt(prompt(`Menu de Opções:\n1. Registrar Aluno\n2. Regisstrar Notas\n3. Mostrar Boletim\n4. Sair\nEscolha uma opção:`));

  switch (escolha) {
    case 1:
      cadastrarAluno();
      break;
    case 2:
      cadastrarNotas();
      break;
    case 3:
      exibirBoletim();
      break;
    case 4:
      console.log("Fechando programa.");
      process.exit(0);
    default:
      console.log("Essa opção não é válida. Por favor, tente novamente.");
  }
}