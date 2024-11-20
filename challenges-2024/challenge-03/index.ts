import fs from 'node:fs'

function endPath() {
  fs.readFile('./trace-test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    const instructionsList = data.split('\n')

    for (const instruction of instructionsList) {
      console.log({ instruction })
      const jumps = instruction.split(' ').map(i => Number(i))
      console.log({ jumps })
      // 1 2 4 1 -2
      for (let i = 0; i < jumps.length; ) {
        console.log({ i, jump: jumps[i] })
        const jump = jumps[i]

        jumps[i] = jump + 1

        if (Math.sign(jump) !== -1) {
          console.log('paso ', i)
          i = i + jump
        } else {
          i = i + jump
        }

        // falta sumar el valor que de instruct -> Avanza una posición y la instrucción se convierte en 2

        console.log({ i })
        if (i === 5) break

        if (jump > i) {
          console.log('salio...')
        }
      }

      console.log({ jumpsResult: jumps })
    }

    // console.log({ instructions })
  })
}

endPath()
