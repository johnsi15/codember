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
  let validUnchecksumCount = 0

  for (const fileName of listFileNames) {
    const [text, unchecksum] = fileName.split('-')

    const notRepeatWord: Set<string> = new Set()
    const repeatWord: Set<string> = new Set()

    for (let i = 0; i < text.length; i++) {
      const currentCharacter = text[i]

      for (let j = i + 1; j < text.length; j++) {
        const characterNext = text[j]
        if (currentCharacter === characterNext) {
          repeatWord.add(currentCharacter)
        }
      }

      if (!repeatWord.has(currentCharacter)) {
        notRepeatWord.add(currentCharacter)
      }
    }

    if (unchecksum === [...notRepeatWord].join('')) {
      validUnchecksumCount++
      if (validUnchecksumCount === INDEXFILENAME) {
        console.log('valid unchecksum -> ' + unchecksum)
        break
      }
    }
  }
}

;(async () => {
  await filesQuarantine() // result -> O2hrQ
})()
