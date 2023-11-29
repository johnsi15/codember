import { encryptionPolicies } from './encryptionPolicies'

describe('Encrypted messages', () => {
  test(`It should return a password invalid`, () => {
    const PASSWORD_TEXT = '2-4 f: fgff\n4-5 z: zzzsg\n1-6 h: hhhhhh'
    const INVALID_PASSWORD = 'zzzsg'
    const { invalidPassword, validCountPassword } = encryptionPolicies(PASSWORD_TEXT)

    expect(invalidPassword).toBe(INVALID_PASSWORD)
    expect(validCountPassword).toBe(2)
  })
})
