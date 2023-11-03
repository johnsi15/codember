import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export type WordCount = {
  [word: string]: number
}

async function messages() {
  try {
    const filePath = resolve('./message_01.txt')
    const wordList = await readFile(filePath, { encoding: 'utf8' })

    let wordsCount: WordCount = {}
    let resultMessage = ''

    wordList.split(' ').forEach(word => {
      const wordSanitized = word.toLowerCase()
      wordsCount[wordSanitized] !== undefined ? (wordsCount[wordSanitized] += 1) : (wordsCount[wordSanitized] = 1)
    })

    const words = Object.keys(wordsCount)

    for (const word of words) {
      resultMessage += `${word}${wordsCount[word]}`
    }

    console.log(resultMessage)
  } catch (error) {
    console.log('This is error -> ', error)
  }
}

;(async () => {
  await messages()
})()
