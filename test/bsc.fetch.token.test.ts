import { ChainId, Token, Fetcher } from '../src'
import { JsonRpcProvider } from '@ethersproject/providers'

describe('BSC fetch tokens', () => {
  const bscRPCUrl = 'https://bsc-dataseed.binance.org/',
    provider = new JsonRpcProvider(bscRPCUrl, ChainId.BSC)

  it('fetch ORN token', async () => {
    const ORN = new Token(ChainId.BSC, '0xe4CA1F75ECA6214393fCE1C1b316C237664EaA8e', 8, 'ORN', 'Orion Protocol')
    const ORNToken = await Fetcher.fetchTokenData(ChainId.BSC, ORN.address, provider)
    expect(ORNToken.decimals).toEqual(ORN.decimals)
  })

  it('fetch BUSD token', async () => {
    const BUSD = new Token(
      ChainId.BSC,
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      18,
      'BUSD',
      'Binance-Peg BUSD Token (BUSD)'
    )
    const USDTToken = await Fetcher.fetchTokenData(ChainId.BSC, BUSD.address, provider)
    expect(USDTToken.decimals).toEqual(BUSD.decimals)
  })
})
