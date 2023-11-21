import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function encryptionPolicies() {
  let passwords = ''

  try {
    const filePath = resolve('./encryption_policies.txt')
    passwords = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error -> ', error)
  }

  const listPasswords = passwords.split('\n')
  // console.log({ listPasswords })

  let invalidCountPassword = 0
  const passCount = 42 // 42

  listPasswords.forEach(text => {
    const mainText = text.split(' ')
    const [minWord, maxWord] = mainText[0].split('-')
    const word = mainText[1].slice(0, 1)
    const passwordValue = mainText[2]

    // console.log({ minWord })
    // console.log({ maxWord })
    // console.log({ word })

    const ocurrencias = passwordValue.match(new RegExp(word, 'g'))
    if (ocurrencias && ocurrencias?.length >= Number(minWord) && ocurrencias?.length <= Number(maxWord)) {
      // console.log('This is correct')
      // console.log(passwordValue)
    } else {
      invalidCountPassword++
      if (invalidCountPassword === passCount) {
        console.log('invalid password this -> ' + passwordValue)
      }
    }
  })
}

;(async () => {
  await encryptionPolicies() // result -> bgamidqewtbus
})()
