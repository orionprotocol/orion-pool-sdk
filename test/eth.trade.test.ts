import { ChainId, Fetcher, Route, Token, TokenAmount, Trade, TradeType } from '../src'

describe('BSC trade', () => {
  it('ORN-BUSD trade', async () => {
    const ORN = new Token(ChainId.MAINNET, '0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a', 8, 'ORN', 'Orion Protocol'),
      USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'),
      ORNUSDTPair = await Fetcher.fetchPairData(ORN, USDT),
      route = new Route([ORNUSDTPair], ORN),
      trade = new Trade(route, new TokenAmount(ORN, '50000000'), TradeType.EXACT_INPUT)
    trade.executionPrice.lessThan(ORNUSDTPair.reserve1.divide(ORNUSDTPair.reserve0))
  })
})
