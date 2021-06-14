import { ChainId, Pair, Token, WETH } from '../src'

describe('BSC pair', () => {
  it('ORN-BUSD pair', () => {
    const ORN = new Token(ChainId.BSC, '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e', 8, 'ORN', 'Orion Protocol'),
      BUSD = new Token(
        ChainId.BSC,
        '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        18,
        'BUSD',
        'Binance-Peg BUSD Token (BUSD)'
      )
    expect(Pair.getAddress(ORN, BUSD)).toEqual('0x48CeB32b7134b86f3b4333878Aa27368aD40a295')
  })
  it('BNB-ORN pair', () => {
    const ORN = new Token(ChainId.BSC, '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e', 8, 'ORN', 'Orion Protocol')
    expect(Pair.getAddress(WETH[ChainId.BSC], ORN)).toEqual('0xC9807E3476d81CFb769122eD75EE4783eF9c2035')
  })
})
