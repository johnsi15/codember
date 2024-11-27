import fs from 'node:fs'

function getNetworkSaves() {
  fs.readFile('./network.txt', 'utf8', (err, data) => {
    const networks = JSON.parse(data)
    console.log({ networks })
    // const nodos = new Map()
    interface Nodos {
      [key: string]: number[]
    }

    const nodos: Nodos = {}

    let result = ''

    for (let i = 0; i < networks.length; i++) {
      const nodo = networks[i]
      console.log({ nodo })
      nodo.forEach((n: number) => {
        if (n in nodos) {
          nodos[n] = [...nodos[n], i]
        } else {
          nodos[n] = [i]
        }
      })
    }

    console.log({ nodos })
    let indicesToRemove: number[] = []

    for (const key in nodos) {
      if (nodos[key].length > 1) {
        nodos[key].forEach(i => {
          indicesToRemove.push(i)
        })
      }
    }

    indicesToRemove = [...new Set(indicesToRemove)]
    indicesToRemove.sort((a, b) => b - a)

    indicesToRemove.forEach(index => {
      networks.splice(index, 1)
    })

    networks.forEach((n: number[]) => {
      // console.log(n.join(','))
      result += n.join(',') + ','
    })

    console.log({ result })
  })
}

getNetworkSaves()
