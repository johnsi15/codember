import fs from 'node:fs'

function endPath() {
  fs.readFile('./trace.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    const instructionsList = data.split('\n')
    let total = 0
    let totalLast = 0

    for (let index = 0; index < instructionsList.length; index++) {
      const instruction = instructionsList[index]
      const jumps = instruction.split(' ').map(i => Number(i))
      let step = 0
      let i = 0

      do {
        const jump = jumps[i]
        jumps[i] = jump + 1
        i = i + jump
        step++
      } while (i < jumps.length && i >= 0)

      if (index === instructionsList.length - 1) {
        totalLast = step
      }

      total += step
    }

    console.log({ total, totalLast })
  })
}

endPath()
