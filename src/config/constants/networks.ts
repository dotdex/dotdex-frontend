import { ChainId } from '@dotdex-swap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://evmexplorer.velas.com/rpc',
  // [ChainId.MAINNET]: 'https://wag.mainnet.veladev.net/rpc',
  [ChainId.TESTNET]: 'https://traces-api.testnet.veladev.net/bridges',
}

export default NETWORK_URLS
