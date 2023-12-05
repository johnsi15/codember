export function databaseAttacked(readFilesDbAttacked: string) {
  const messageHidden: string[] = []

  const listFileUsers = readFilesDbAttacked.split('\n')

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
    } else {
      age = null
      location = rest[0]
    }

    let invalidUser = false

    if (!id || !username || !email) {
      invalidUser = true
    } else if (!id.match(regexAlfaNumber) || !username.match(regexAlfaNumber) || !email.match(regexEmail)) {
      invalidUser = true
    } else if ((age && !age.match(regexNumber)) || (location && !location.match(regexLocation))) {
      invalidUser = true
    }

    if (invalidUser) {
      messageHidden.push(username.charAt(0))
    }
  })

  return messageHidden.join('')
}
