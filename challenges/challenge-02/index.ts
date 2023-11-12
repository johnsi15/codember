function miniCompiler(text: string) {
  const operations: Record<string, (count: number) => number> = {
    '&': (count: number) => count,
    '#': (count: number) => count + 1,
    '@': (count: number) => count - 1,
    '*': (count: number) => count * count,
  }

  const listSymbols = text.split('')

  let count = 0
  let result = ''

  listSymbols.forEach(symbol => {
    count = operations[symbol](count)

    result += symbol === '&' ? count : ''
  })

  console.log(result)
}

const inputText =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&' //  result -> 024899455
// const inputText = '&##&*&@&' //  result -> 0243

miniCompiler(inputText)
