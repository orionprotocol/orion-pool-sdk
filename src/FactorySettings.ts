import { ChainId } from './constants'

let FACTORY_ADDRESS = '',
  INIT_CODE_HASH = ''

const getByNetwork = (network: ChainId): { FACTORY_ADDRESS: string; INIT_CODE_HASH: string } => {
  switch (network) {
    case ChainId.MAINNET:
      return {
        FACTORY_ADDRESS: '',
        INIT_CODE_HASH: ''
      }
    case ChainId.BSC:
      return {
        FACTORY_ADDRESS: '0xE52cCf7B6cE4817449F2E6fA7efD7B567803E4b4',
        INIT_CODE_HASH: '0x0c591b9bd08f1704b700bd0b662cd000c1bf71b54704b340e7442d09778ed7c7'
      }
    case ChainId.ROPSTEN:
      return {
        FACTORY_ADDRESS: '',
        INIT_CODE_HASH: ''
      }
    case ChainId.BSCTESTNET:
      return {
        FACTORY_ADDRESS: '0xA6E4Ce17474d790fb25E779F9317c55963D2cbdf',
        INIT_CODE_HASH: '0x014e691048701dc6e0290533ebabdcfd6ec0c131d8098a02c5407fc5fe1ef11f'
      }
    default:
      throw new Error(`UNKNOWN NETWORK ${network}`)
  }
}

export const getFactorySettings = (
  network: ChainId | null = null
): { FACTORY_ADDRESS: string; INIT_CODE_HASH: string } => {
  if (FACTORY_ADDRESS && INIT_CODE_HASH) return { FACTORY_ADDRESS, INIT_CODE_HASH }
  if (network) return getByNetwork(network)
  throw new Error('INIT FACTORY ADDR AND CODE HASH FIRST')
}

export const setFactorySettings = (addr: string, codeHash: string): void => {
  FACTORY_ADDRESS = addr
  INIT_CODE_HASH = codeHash
}
