import { ChainId } from '@dotdex-swap/sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const VELAS_BLOCK_TIME = 0.4

export const BASE_MOONBEAM_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://moonbeam.moonscan.io/',
  [ChainId.TESTNET]: 'https://moonbase.moonscan.io',
}

// WAG_PER_SECOND details
// 40 WAG is minted per block
// 20 WAG per block is sent to Burn pool (A farm just for burning cake)
// 10 WAG per block goes to WAG syrup pool
// 9 WAG per block goes to Yield farms and lottery
// WAG_PER_SECOND in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// WAG/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const WAG_PER_SECOND = new BigNumber(13)
export const SECONDS_PER_YEAR = new BigNumber(60 * 60 * 24 * 365) // 10512000
export const WAG_PER_YEAR = WAG_PER_SECOND.times(SECONDS_PER_YEAR)
// export const BASE_URL = 'https://pancakeswap.finance'
export const BASE_URL = `${window.location.protocol}//${window.location.host}`
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_URL}/pool`
export const BASE_BSC_SCAN_URL = BASE_MOONBEAM_SCAN_URLS[ChainId.MAINNET]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 400000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
