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

      let result = 0
      let m = jumps[0] // 1
      console.log({ m, len: jumps.length })
      let i = 0
      // 1 -2 5
      while (i < jumps.length && Math.sign(i) !== -1) {
        console.log('paso...')
        const jump = jumps[i]
        jumps[i] = jump + 1

        i = i + jump
        result = Math.abs(jump)
      }

      console.log({ jumpsResult: jumps, result })
    }

    // console.log({ instructions })
  })
}

endPath()
