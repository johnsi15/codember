import fs from 'node:fs'

function getNetworkSaves() {
  fs.readFile('./network.txt', 'utf8', (err, data) => {
    const networks = JSON.parse(data)
    interface Nodos {
      [key: string]: number[]
    }

    const nodos: Nodos = {}

    let result = ''

    for (let i = 0; i < networks.length; i++) {
      const nodo = networks[i]
      nodo.forEach((n: number) => {
        if (n in nodos) {
          nodos[n] = [...nodos[n], i]
        } else {
          nodos[n] = [i]
        }
      })
    }

    const indicesToRemove = new Set<number>()

    for (const key in nodos) {
      if (nodos[key].length > 1) {
        nodos[key].forEach(i => {
          indicesToRemove.add(i)
        })
      }
    }

    const indicesToRemoveSorted = [...indicesToRemove].sort((a, b) => b - a)

    indicesToRemoveSorted.forEach(index => {
      networks.splice(index, 1)
    })

    result = networks.map((n: number[]) => n.join(',')).join(',')

    console.log({ result })
  })
}

getNetworkSaves()
