import { ChainId } from '@dotdex-swap/sdk'

export const GRAPH_API_PROFILE = process.env.REACT_APP_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION = process.env.REACT_APP_GRAPH_API_PREDICTION
export const SNAPSHOT_VOTING_API = process.env.REACT_APP_SNAPSHOT_VOTING_API
export const SNAPSHOT_BASE_URL = process.env.REACT_APP_SNAPSHOT_BASE_URL
export const API_PROFILE = process.env.REACT_APP_API_PROFILE
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export const BITQUERY_API = 'https://graphql.bitquery.io'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'

// https://thegraph.testnet.wagyuswap.app/subgraphs/name/wagyu/graphql
// export const INFO_CLIENT = {
//   [ChainId.TESTNET]: 'http://164.90.190.145/subgraphs/name/wagyu',
//   [ChainId.MAINNET]: 'http://51.222.43.201:8000/subgraphs/name/wagyu',
// }[chainId]

export const INFO_CLIENT = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.wagyuswap.app/subgraphs/name/wagyu',
  [ChainId.MAINNET]: 'https://thegraph.wagyuswap.app/subgraphs/name/wagyu',
}[chainId]

// export const BLOCKS_CLIENT = {
//   [ChainId.TESTNET]: 'http://164.90.190.145/subgraphs/name/blocks',
//   [ChainId.MAINNET]: 'http://51.222.43.201:8000/subgraphs/name/wagyu',
// }[chainId]

export const BLOCKS_CLIENT = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.wagyuswap.app/subgraphs/name/blocks',
  [ChainId.MAINNET]: 'https://thegraph1.wagyuswap.app/subgraphs/name/wagyu',
}[chainId]

export const GRAPH_API_LOTTERY = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.wagyuswap.app/subgraphs/name/lottery',
  [ChainId.MAINNET]: 'https://thegraph.wagyuswap.app/subgraphs/name/lottery',
}[chainId]

// export const GRAPH_API_LOTTERY = {
//   [ChainId.TESTNET]: 'http://164.90.190.145/subgraphs/name/lottery',
//   [ChainId.MAINNET]: 'http://209.237.140.231:8000/subgraphs/name/lottery',
// }[chainId]
