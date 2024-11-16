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

    const notRepeatWord = text
      .split('')
      .filter((character, _, self) => self.indexOf(character) === self.lastIndexOf(character))
      .join('')

    if (unchecksum === notRepeatWord) {
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
