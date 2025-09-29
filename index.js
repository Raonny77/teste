

const readline = require('readline-sync');

// Inicializa a matriz de cadeiras 4x4 (todas livres no início)
let cadeiras = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false]
];

function limparTela() {
  console.clear();
}

function exibirLayout() {
  console.log('\n====== CINEMA - LAYOUT DAS CADEIRAS ======\n');
  console.log('         TELA');
  console.log('    1   2   3   4');
  console.log('  +---+---+---+---+');
  
  for (let i = 0; i < 4; i++) {
    let linha = String.fromCharCode(65 + i) + ' |';
    for (let j = 0; j < 4; j++) {
      linha += cadeiras[i][j] ? ' X |' : ' O |';
    }
    console.log(linha);
    console.log('  +---+---+---+---+');
  }
  
  console.log('\nLegenda: O = Livre | X = Ocupada\n');
}

function validarEntrada(entrada) {
  // Remove espaços e converte para maiúscula
  entrada = entrada.trim().toUpperCase();
  
  // Verifica formato (letra + número)
  if (entrada.length !== 2) {
    return null;
  }
  
  const letra = entrada[0];
  const numero = entrada[1];
  
  // Valida a linha (A-D)
  if (letra < 'A' || letra > 'D') {
    return null;
  }
  
  // Valida a coluna (1-4)
  if (numero < '1' || numero > '4') {
    return null;
  }
  
  const linha = letra.charCodeAt(0) - 65; // Converte A=0, B=1, C=2, D=3
  const coluna = parseInt(numero) - 1;    // Converte 1=0, 2=1, 3=2, 4=3
  
  return { linha, coluna, posicao: entrada };
}

function comprarIngresso() {
  exibirLayout();
  
  let posicaoValida = false;
  let linha, coluna, posicao;
  
  while (!posicaoValida) {
    const entrada = readline.question('Digite a posicao desejada (ex: A1, B3, D4): ');
    
    const resultado = validarEntrada(entrada);
    
    if (resultado === null) {
      console.log('\n❌ Posicao invalida! Use formato: Letra (A-D) + Numero (1-4)\n');
      continue;
    }
    
    linha = resultado.linha;
    coluna = resultado.coluna;
    posicao = resultado.posicao;
    
    // Verifica se a cadeira está ocupada
    if (cadeiras[linha][coluna]) {
      console.log('\n❌ Esta cadeira ja esta ocupada! Escolha outra.\n');
      continue;
    }
    
    posicaoValida = true;
  }
  
  // Marca a cadeira como ocupada
  cadeiras[linha][coluna] = true;
  
  // Confirmação da compra
  console.log('\n========================================');
  console.log('✅ COMPRA CONFIRMADA COM SUCESSO!');
  console.log(`   Cadeira: ${posicao}`);
  console.log('   Bom filme!');
  console.log('========================================\n');
  
  readline.question('Pressione ENTER para continuar...');
}

// Loop infinito do sistema
while (true) {
  limparTela();
  comprarIngresso();
}