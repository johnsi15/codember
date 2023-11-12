import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function miniCompiler() {
  let text = ''

  try {
    const filePath = resolve('./message_02.txt')
    text = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error -> ', error)
  }

  const listSymbols = text.split('')

  const operations: Record<string, (count: number) => number> = {
    '&': (count: number) => count,
    '#': (count: number) => count + 1,
    '@': (count: number) => count - 1,
    '*': (count: number) => count * count,
  }

  let count = 0
  let result = ''

  listSymbols.forEach(symbol => {
    count = operations[symbol](count)

    result += symbol === '&' ? count : ''
  })

  console.log(result)
}

;(async () => {
  await miniCompiler() // result -> 024899455
})()
