const readline = require('readline-sync');

// Função para preencher a matriz
function preencherMatriz() {
  const matriz = [];
  
  console.log('\n====== PREENCHIMENTO DA MATRIZ 3x3 ======\n');
  
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      const valor = readline.questionInt(`Digite o valor para posicao [${i}][${j}]: `);
      matriz[i][j] = valor;
    }
  }
  
  return matriz;
}

// Função para exibir a matriz
function exibirMatriz(matriz) {
  console.log('\n====== MATRIZ 3x3 ======\n');
  
  for (let i = 0; i < 3; i++) {
    let linha = '';
    for (let j = 0; j < 3; j++) {
      linha += matriz[i][j].toString().padStart(6, ' ');
    }
    console.log(linha);
  }
  
  console.log('\n');
}

// Função para exibir o menu
function exibirMenu() {
  console.log('====== MENU DE OPÇÕES ======');
  console.log('1 - Somatório dos elementos da linha 1');
  console.log('2 - Multiplicação da diagonal principal');
  console.log('3 - Quantidade de números pares na matriz');
  console.log('4 - Encerrar o programa');
  console.log('============================\n');
}

// Opção 1: Somatório da linha 1
function somatorioLinha1(matriz) {
  let soma = 0;
  for (let j = 0; j < 3; j++) {
    soma += matriz[0][j];
  }
  console.log(`\n✅ Soma dos numeros da linha 1: ${soma}`);
  console.log(`   Elementos: ${matriz[0][0]} + ${matriz[0][1]} + ${matriz[0][2]} = ${soma}\n`);
}

// Opção 2: Multiplicação da diagonal
function multiplicacaoDiagonal(matriz) {
  let produto = 1;
  for (let i = 0; i < 3; i++) {
    produto *= matriz[i][i];
  }
  console.log(`\n✅ Multiplicação da diagonal: ${produto}`);
  console.log(`   Elementos: ${matriz[0][0]} × ${matriz[1][1]} × ${matriz[2][2]} = ${produto}\n`);
}

// Opção 3: Quantidade de números pares
function contarPares(matriz) {
  let quantidade = 0;
  const pares = [];
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] % 2 === 0) {
        quantidade++;
        pares.push(matriz[i][j]);
      }
    }
  }
  
  console.log(`\n  Números pares: ${quantidade}`);
  if (quantidade > 0) {
    console.log(`   Todos os numeros pares: ${pares.join(', ')}\n`);
  } else {
    console.log('   Nenhum número par encontrado.\n');
  }
}

// Programa principal
function main() {
  const matriz = preencherMatriz();
  
  let continuar = true;
  
  while (continuar) {
    exibirMatriz(matriz);
    exibirMenu();
    
    const opcao = readline.questionInt('Escolha uma opcao (1-4): ');
    
    switch (opcao) {
      case 1:
        somatorioLinha1(matriz);
        readline.question('Pressione ENTER para continuar...');
        console.clear();
        break;
        
      case 2:
        multiplicacaoDiagonal(matriz);
        readline.question('Pressione ENTER para continuar...');
        console.clear();
        break;
        
      case 3:
        contarPares(matriz);
        readline.question('Pressione ENTER para continuar...');
        console.clear();
        break;
        
      case 4:
        console.log('\n✅ Finalizado!\n');
        continuar = false;
        break;
        
      default:
        console.log('\n X Opção inválida!X Escolha uma opção de 1 a 4.\n');
        readline.question('Pressione ENTER para continuar...');
        console.clear();
        break;
    }
  }
}

// Inicia o programa
main();