function accessTerminal({ code }: { code: string }) {
  // v2
  const [nums, moves] = code.split(' ')
  const result = nums.split('').map(Number)

  let position = 0

  for (const move of moves) {
    if (move === 'U') {
      result[position] = (result[position] + 1) % 10 // Incremento cíclico
    } else if (move === 'D') {
      result[position] = (result[position] - 1 + 10) % 10 // Decremento cíclico
    } else if (move === 'R') {
      position = (position + 1) % nums.length // Movimiento cíclico a la derecha
    } else if (move === 'L') {
      position = (position - 1 + nums.length) % nums.length // Movimiento cíclico a la izquierda
    }
  }

  console.log({ result: result.join('') })
}

accessTerminal({ code: '528934712834 URDURUDRUDLLLLUUDDUDUDUDLLRRRR' }) // 628934712834
// accessTerminal({ code: '000 URURD' }) // 119
// accessTerminal({ code: '1111 UUURUUU' }) // 4411
// accessTerminal({ code: '9999 LULULULD' }) // 8000

// V1
function accessTerminalWithoutCyclic({ code }: { code: string }) {
  const [nums, moves] = code.split(' ')
  const result = nums.split('').map(Number)
  let position = 0

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i]

    if (move === 'U') {
      result[position] = (result[position] + 1) % 10
    } else if (move === 'D') {
      result[position] = (result[position] - 1 + 10) % 10
    } else if (move === 'R') {
      position++
    } else if (move === 'L') {
      position--
    }
  }

  console.log({ result: result.join('') })
}
