import exp from 'node:constants'
import { filesQuarantine } from './filesQuarantine'

describe('Encrypted messages', () => {
  test(`It should return a unchecksum invalid`, () => {
    const LISTFILENAMES = ['xyzz33-xy', 'abcca1-ab1', 'abbc11-ca']
    const { validUnchecksum } = filesQuarantine(LISTFILENAMES, 2)

    expect(validUnchecksum).toBeNull()
  })

  test(`It should return a unchecksum valid`, () => {
    const LISTFILENAMES = ['xyzz33-xy', 'abcca1-ab1', 'abbc11-ca']
    const VALID_UNCHECKSUM = 'xy'
    const { validUnchecksum } = filesQuarantine(LISTFILENAMES, 1)

    expect(validUnchecksum).toBeDefined()
    expect(VALID_UNCHECKSUM).toBe('xy')
  })
})
