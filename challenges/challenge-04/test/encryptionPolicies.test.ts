import { filesQuarantine } from './filesQuarantine'

describe('Encrypted messages', () => {
  test(`It should return a password invalid`, () => {
    const LISTFILENAMES = ['xyzz33-xy', 'abcca1-ab1', 'abbc11-ca']
    const INVALID_UNCHECKSUM = 'ab1'
    const { validUnchecksum, invalidUnchecksum } = filesQuarantine(LISTFILENAMES)

    expect(validUnchecksum).toBeDefined()
    expect(invalidUnchecksum).toBe(INVALID_UNCHECKSUM)
    // expect(validCountPassword).toBe(2)
  })
})
