import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function databaseAttacked() {
  let readFilesDbAttacked = ''

  try {
    const filePath = resolve('./database_attacked.txt')
    readFilesDbAttacked = await readFile(filePath, { encoding: 'utf8' })
  } catch (error) {
    console.log('This is error read file -> ', error)
  }

  const listFileUsers = readFilesDbAttacked.split('\n')

  // const listFileUsers =
  //   '1a421fa,alex,alex9@gmail.com,18,Barcelona\n9412p_m,maria,mb@hotmail.com,22,CDMX\n494ee0,madeval,mdv@twitch.tv\n494ee0,madeval,twitch.tv,Montevideo\nDhy92jh,pB1P64,pB1P64@hotmail.com,52,CDMX'.split(
  //     '\n'
  //   )

  const messageHidden: string[] = []

  listFileUsers.forEach(user => {
    const [id, username, email, ...rest] = user.split(',')

    const regexAlfaNumber = new RegExp(/^[A-Za-z0-9]+$/, 'g')
    const regexEmail = new RegExp(/^\w+@[a-z]+\.[a-z]{2,3}/, 'g')
    const regexNumber = new RegExp(/^[0-9]+$/, 'g')
    const regexLocation = new RegExp(/^[A-Za-z \s]+$/, 'g')

    let age: string | null = null
    let location: string | null = null
    if (rest.length === 2) {
      age = rest[0]
      location = rest[1]
    } else if (rest.length === 1) {
      age = null
      location = rest[0]
    }

    let invalidUser = false

    if (!id || !username || !email) {
      invalidUser = true
    } else if (!id.match(regexAlfaNumber) || !username.match(regexAlfaNumber) || !email.match(regexEmail)) {
      invalidUser = true
    } else if (age && !age.match(regexNumber)) {
      invalidUser = true
    } else if (location && !location.match(regexLocation)) {
      invalidUser = true
    }

    if (invalidUser) {
      messageHidden.push(username.charAt(0))
    }
  })

  console.log(messageHidden.join(''))
}

;(async () => {
  await databaseAttacked() // result -> youh4v3beenpwnd
})()
