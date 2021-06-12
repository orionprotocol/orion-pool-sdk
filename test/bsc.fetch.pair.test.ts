import { ChainId, Fetcher, Token, WETH } from '../src'
import { JsonRpcProvider } from '@ethersproject/providers'

describe('BSC fetch pairs', () => {
  const bscRPCUrl = 'https://bsc-dataseed.binance.org/',
    provider = new JsonRpcProvider(bscRPCUrl, ChainId.BSC)
  it('ORN-BUSD pair', async () => {
    const ORN = new Token(ChainId.BSC, '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e', 8, 'ORN', 'Orion Protocol'),
      BUSD = new Token(
        ChainId.BSC,
        '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        18,
        'BUSD',
        'Binance-Peg BUSD Token (BUSD)'
      ),
      ORNBUSDPair = await Fetcher.fetchPairData(ORN, BUSD, provider)
    ORNBUSDPair.token0Price.equalTo(ORNBUSDPair.reserve0.divide(ORNBUSDPair.reserve1))
    ORNBUSDPair.token1Price.equalTo(ORNBUSDPair.reserve1.divide(ORNBUSDPair.reserve0))
  })
  it('BNB-ORN pair', async () => {
    const ORN = new Token(ChainId.BSC, '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e', 8, 'ORN', 'Orion Prtocol'),
      BNBORNPair = await Fetcher.fetchPairData(WETH[ChainId.BSC], ORN, provider)
    BNBORNPair.token0Price.equalTo(BNBORNPair.reserve0.divide(BNBORNPair.reserve1))
    BNBORNPair.token1Price.equalTo(BNBORNPair.reserve1.divide(BNBORNPair.reserve0))
  })
})
