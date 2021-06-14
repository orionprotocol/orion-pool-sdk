import { ChainId, Pair, Token, WETH } from '../src'

describe('ETH pair', () => {
  it('ORN-USDT pair', () => {
    const ORN = new Token(ChainId.MAINNET, '0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a', 8, 'ORN', 'Orion Protocol'),
      USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
    expect(Pair.getAddress(ORN, USDT)).toEqual('0x2e8b9d1fD95cC65ad0927CA6246C34182fAE538a')
  })
  it('ETH-ORN pair', () => {
    const ORN = new Token(ChainId.MAINNET, '0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a', 8, 'ORN', 'Orion Protocol')
    expect(Pair.getAddress(WETH[ChainId.MAINNET], ORN)).toEqual('0xbd402A0cf18148389c6f10b6e67aea915C3960ec')
  })
})
