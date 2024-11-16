import { miniCompiler } from './miniCompiler'

describe('Encrypted messages', () => {
  test(`It should return a language interpretation "##*&'" = 4`, () => {
    const LANGUAGE = '##*&'
    const output = miniCompiler(LANGUAGE)

    expect(output).toBe('4')
  })

  test(`It should return a language interpretation "&##&*&@&" = 0243`, () => {
    const LANGUAGE = '&##&*&@&'
    const output = miniCompiler(LANGUAGE)

    expect(output).toBe('0243')
  })
})
