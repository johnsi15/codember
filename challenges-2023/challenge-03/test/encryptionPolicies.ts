export function encryptionPolicies(passwords: string) {
  const listPasswords = passwords.split('\n')

  const INDEXPASSWORD = 1
  let invalidPassword = ''
  let validCountPassword = 0
  let invalidCountPassword = 0

  listPasswords.forEach(text => {
    const mainText = text.split(' ')
    const [minWord, maxWord] = mainText[0].split('-')
    const word = mainText[1].slice(0, 1)
    const passwordValue = mainText[2]

    const occurrences = passwordValue.match(new RegExp(word, 'g'))?.length ?? 0

    if (!(occurrences >= Number(minWord) && occurrences <= Number(maxWord))) {
      invalidCountPassword++
      if (invalidCountPassword === INDEXPASSWORD) {
        invalidPassword = passwordValue
      }
    } else {
      validCountPassword++
    }
  })

  return { invalidPassword, validCountPassword }
}
