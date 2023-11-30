export function filesQuarantine(listFileNames: string[], indexFileName: number) {
  const INDEXFILENAME = indexFileName
  let validUnchecksumCount = 0

  let validUnchecksum = null

  for (const fileName of listFileNames) {
    const [text, unchecksum] = fileName.split('-')

    const notRepeatWord = text
      .split('')
      .filter((character, _, self) => self.indexOf(character) === self.lastIndexOf(character))
      .join('')

    if (unchecksum === notRepeatWord) {
      if (validUnchecksumCount === INDEXFILENAME) {
        validUnchecksumCount++
        validUnchecksum = unchecksum
      }
    }
  }

  return { validUnchecksum }
}
