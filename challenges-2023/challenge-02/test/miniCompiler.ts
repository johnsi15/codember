export function miniCompiler(text: string) {
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

  return result
}
