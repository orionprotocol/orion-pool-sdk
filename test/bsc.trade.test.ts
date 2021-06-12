import { ChainId, Fetcher, Route, Token, TokenAmount, Trade, TradeType } from '../src'
import { JsonRpcProvider } from '@ethersproject/providers'

describe('BSC trade', () => {
  const bscRPCUrl = 'https://bsc-dataseed.binance.org/',
    provider = new JsonRpcProvider(bscRPCUrl, ChainId.BSC)
  it('ORN-BUSD trade', async () => {
    const ORN = new Token(ChainId.BSC, '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e', 8, 'ORN', 'Orion Protocol'),
      BUSD = new Token(
        ChainId.BSC,
        '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        18,
        'BUSD',
        'Binance-Peg BUSD Token (BUSD)'
      ),
      ORNBUSDPair = await Fetcher.fetchPairData(ORN, BUSD, provider),
      route = new Route([ORNBUSDPair], ORN),
      trade = new Trade(route, new TokenAmount(ORN, '50000000'), TradeType.EXACT_INPUT)
    trade.executionPrice.lessThan(ORNBUSDPair.reserve1.divide(ORNBUSDPair.reserve0))
  })
})
