import fs from 'node:fs'

function access() {
  fs.readFile('./log.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    // console.log(data.split('\n'))

    for (const code of data.split('\n')) {
      console.log({ code })
    }
  })
}

access()
