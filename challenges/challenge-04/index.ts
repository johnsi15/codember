import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function filesQuarantine() {
  let readFilesQuarantine = ''

  try {
    const filePath = resolve('./files_quarantine.txt')
    readFilesQuarantine = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error read file -> ', error)
  }

  const listFileNames = readFilesQuarantine.split('\n')
  // const listFileNames = ['xyzz33-xy', 'abcca1-ab1', 'abbc11-ca']

  const INDEXFILENAME = 33
  let validUnchecksum = 0

  // console.log({ listFileNames })
  listFileNames.forEach((fileName, index) => {
    const [text, unchecksum] = fileName.split('-')
    // console.log({ text, unchecksum })
    const notRepeatWord: string[] = []
    const repeatWord: string[] = []

    for (let i = 0; i < text.length; i++) {
      const caracterActual = text[i]

      for (let j = i + 1; j < text.length; j++) {
        const caracterNext = text[j]
        if (caracterActual === caracterNext) {
          repeatWord.push(caracterActual)
        }
      }
      // console.log(repeatWord.includes(caracterActual))
      if (!repeatWord.includes(caracterActual)) {
        notRepeatWord.push(caracterActual)
      }
    }

    // console.log({ notRepeatWord })
    if (unchecksum === notRepeatWord.join('')) {
      validUnchecksum++
      if (validUnchecksum === INDEXFILENAME) {
        console.log('valid unchecksum -> ' + unchecksum)
      }
    }
  })
}

;(async () => {
  await filesQuarantine() // result -> O2hrQ
})()
