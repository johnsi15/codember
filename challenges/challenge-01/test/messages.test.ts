import { messages } from './messages'

const MESSAGES_LIST_ENCRYPTED = ['llaveS casa CASA casa llaves', 'taza ta za taza', 'casas casa casasas']
const RESPONSES_MESSAGES_ENCRYPTED = ['llaves2casa3', 'taza2ta1za1', 'casas1casa1casasas1']

describe('Encrypted messages', () => {
  test(`It should return a text with the word and the number of times it appears in the message ${MESSAGES_LIST_ENCRYPTED[0]} = ${RESPONSES_MESSAGES_ENCRYPTED[0]}`, () => {
    const decryptedMessage = messages(MESSAGES_LIST_ENCRYPTED[0])

    expect(decryptedMessage).toBe(RESPONSES_MESSAGES_ENCRYPTED[0])
  })

  test(`It should return a text with the word and the number of times it appears in the message ${MESSAGES_LIST_ENCRYPTED[1]} = ${RESPONSES_MESSAGES_ENCRYPTED[1]}`, () => {
    const decryptedMessage = messages(MESSAGES_LIST_ENCRYPTED[1])

    expect(decryptedMessage).toBe(RESPONSES_MESSAGES_ENCRYPTED[1])
  })

  test(`It should return a text with the word and the number of times it appears in the message ${MESSAGES_LIST_ENCRYPTED[2]} = ${RESPONSES_MESSAGES_ENCRYPTED[2]}`, () => {
    const decryptedMessage = messages(MESSAGES_LIST_ENCRYPTED[2])

    expect(decryptedMessage).toBe(RESPONSES_MESSAGES_ENCRYPTED[2])
  })
})
