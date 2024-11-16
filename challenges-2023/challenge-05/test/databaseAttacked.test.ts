import { databaseAttacked } from './databaseAttacked'

describe('Data Base Attacked', () => {
  test(`It should return a message hidden`, () => {
    const READFILESDBATTACKED =
      '1a421fa,alex,alex9@gmail.com,18,Barcelona\n9412p_m,maria,mb@hotmail.com,22,CDMX\n494ee0,madeval,mdv@twitch.tv\n494ee0,madeval,twitch.tv,Montevideo\nDhy92jh,pB1P64,pB1P64@hotmail.com,52,CDMX'

    const messageHidden = databaseAttacked(READFILESDBATTACKED)
    const MESSAGEVALID = 'mm'

    expect(messageHidden).toBeDefined()
    expect(messageHidden).toEqual(MESSAGEVALID)
  })
})
