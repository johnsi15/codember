export function filesQuarantine(listFileNames: string[]) {
  console.log(listFileNames)
  const INDEXFILENAME = 1
  let validUnchecksumCount = 0

  let validUnchecksum = ''
  let invalidUnchecksum = ''

  for (const fileName of listFileNames) {
    const [text, unchecksum] = fileName.split('-')

    const notRepeatWord = text
      .split('')
      .filter((character, _, self) => self.indexOf(character) === self.lastIndexOf(character))
      .join('')

    if (unchecksum === notRepeatWord) {
      validUnchecksumCount++
      console.log('ok  -> ' + unchecksum)
      if (validUnchecksumCount === INDEXFILENAME) {
        validUnchecksum = unchecksum
      } else {
        invalidUnchecksum = unchecksum
      }
    }
  }

  return { validUnchecksum, invalidUnchecksum }
}
