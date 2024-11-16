import { WordCount } from '../index'
export function messages(wordList: string) {
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

  return resultMessage
}
