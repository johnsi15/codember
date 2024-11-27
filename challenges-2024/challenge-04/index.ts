import fs from 'node:fs'

function getNetworkSaves() {
  fs.readFile('./test.txt', 'utf8', (err, data) => {
    const networks = JSON.parse(data)
    console.log({ networks })
    const nodos = new Map()

    let result = ''

    for (let i = 0; i < networks.length; i++) {
      const network = networks[i]
      const network2 = networks[i + 1]
      console.log({ network, network2 })
      if (network2 !== undefined) {
        const second = network[1]
        const first = network2[0] ?? ''
        console.log({ second, first })
      }
      // for (let j = 0; j < network.length; j++) {
      //   const nodo = network[j]
      //   console.log({ primary: network[0], second })
      //   console.log()
      //   if (second !== network[0]) {
      //     console.log('paso')
      //     console.log({ network: network[i] })
      //     result = network.join(',') + result
      //   }
      //   // if (nodos.has(nodo)) {
      //   //   nodos.set(nodo, [nodos.get(nodo), i])
      //   // } else {
      //   //   nodos.set(nodo, i)
      //   // }
      // }

      // console.log({ nodos })
    }
    console.log({ result })
  })
}

getNetworkSaves()
