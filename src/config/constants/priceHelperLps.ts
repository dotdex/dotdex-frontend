import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  // {
  //   pid: null,
  //   lpSymbol: 'VLXPAD-WVLX LP',
  //   lpAddresses: {
  //     111: '',
  //     106: '0xE0fCB98a83D8eD0006f0b5CCD81Ed5bd15A0c08C',
  //   },
  //   token: tokens.vlxpad,
  //   quoteToken: tokens.wglmr,
  // },
]

export default priceHelperLps
