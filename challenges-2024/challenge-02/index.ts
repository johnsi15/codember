import fs from 'node:fs'

function access() {
  fs.readFile('./log.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    let passwordFalsy = 0
    let passwordTruthy = 0

    function isOnlyLettersAndNumbers(text: string) {
      return /^[a-z0-9]+$/.test(text)
    }

    function isUpNumber(text: string) {
      return /^(?:0*1*2*3*4*5*6*7*8*9*)$/.test(text)
    }

    function isUpLetter(text: string) {
      return /^(?:a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*)$/.test(text)
    }

    function isValidPassword(password: string) {
      const parts = password.match(/^([0-9]*)([a-z]*)$/)
      if (!parts) return false

      const [_, numbers, letters] = parts
      return isUpNumber(numbers) && isUpLetter(letters)
    }

    for (const code of data.split('\n')) {
      if (isOnlyLettersAndNumbers(code)) {
        if (isValidPassword(code)) {
          passwordTruthy++
        } else {
          passwordFalsy++
        }
      } else {
        passwordFalsy++
      }
    }

    console.log(`${passwordTruthy}true${passwordFalsy}false`)
  })
}

access()
