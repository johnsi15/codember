import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function encryptionPolicies() {
  let passwords = ''

  try {
    const filePath = resolve('./encryption_policies.txt')
    passwords = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error read file -> ', error)
  }

  const listPasswords = passwords.split('\n')

  const INDEXPASSWORD = 42 // or 13
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
        console.log('invalid password is -> ' + passwordValue)
      }
    }
  })
}

;(async () => {
  await encryptionPolicies() // result -> bgamidqewtbus
})()
