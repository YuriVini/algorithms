const p = [
  { operador: false, label: 'F' },
  { operador: false, label: 'F' },
  { operador: true, label: 'V' },
  { operador: true, label: 'V' },
]
const q = [
  { operador: false, label: 'F' },
  { operador: true, label: 'V' },
  { operador: false, label: 'F' },
  { operador: true, label: 'V' },
]

const labels = {
  false: 'F',
  true: 'V',
}

function removeElements() {
  // Aqui apaga cada linha criada da tabela nas linhas 64, 65 e 66
  // Para que não mantenha os dados anterior e crie uma lista enorme.
  for (let i = 0; i < 4; i++) {
    const removingLines = document.getElementById('line' + i)

    removingLines?.parentNode?.removeChild(removingLines)
    document.getElementById('title').innerHTML = ''
    document.getElementById('text-line' + i).innerHTML = ''
  }
}

function trueTable() {
  // Limpa a tabela para zerar os dados ou limpa para substituir os dados
  removeElements()

  // Pega os valores da Propriedade e Operador Lógico
  const operator = document.getElementById('selectedOperator').value
  const firstLabel = document.getElementById('selectedOption').value
  const secondLabel = firstLabel === 'R' ? 'Q' : 'R'
  let result

  // Adiciona o título da tabela
  document.getElementById(
    'title'
  ).innerHTML = `<td>${firstLabel} | ${secondLabel} | ${firstLabel} ${operator} ${secondLabel}\n</td>`

  // Faz um switch case identificando qual o operador a ser usado
  // E faz um looping pegando o valor final da comparação de cada linha da tabela
  for (let i = 0; i < p.length; i++) {
    switch (operator) {
      case 'E':
        result = p[i].operador && q[i].operador
        break
      case 'OU':
        result = p[i].operador || q[i].operador
        break
      case 'OU OU':
        result = p[i].operador !== q[i].operador
        break
      default:
        break
    }

    // Ainda dentro do looping imprime na tela ou o primeiro resultado da tabela ou sobrescreve com um novo resultado
    document.getElementById(
      'text-line' + i
    ).innerHTML = `<tr id={"line"+i}>${p[i].label} | ${q[i].label} | ${labels[result]}</tr>`
  }
}
