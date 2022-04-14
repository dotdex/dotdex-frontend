import { ChainId } from '@dotdex-swap/sdk'
import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] =
  chainId === MAINNET
    ? [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            1287: '',
            1284: '0xa7e8280b8CE4f87dFeFc3d1F2254B5CCD971E852',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '3.25',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 2,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.scar,
          contractAddress: {
            1287: '',
            1284: '0x9907B73574245fF0e538C49088B522b5f004FDEf',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.064',
          sortOrder: 2,
          isFinished: false,
        },
        {
          sousId: 3,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.astro,
          contractAddress: {
            1287: '',
            1284: '0xA0e9F28837325f5718AFE497e0B73fDDE99c3dA9',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.13',
          sortOrder: 3,
          isFinished: true,
        },
        {
          sousId: 4,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.swapz,
          contractAddress: {
            1287: '',
            1284: '0xd6E00EA52eb7bdb5E15A8445Ea7e25c70Dc763a4',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.1286',
          sortOrder: 4,
          isFinished: true,
        },
        {
          sousId: 5,
          stakingToken: serializedTokens.swapz,
          earningToken: serializedTokens.swapz,
          contractAddress: {
            1287: '',
            1284: '0x0b7c46E1f729972499a9Ab45D307101198Ab9BA9',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.239',
          sortOrder: 4,
          isFinished: false,
        },
        {
          sousId: 6,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.vdgt,
          contractAddress: {
            1287: '',
            1284: '0xbedeBB4c7D336E6E5e5B8685d33Fb3bbfebc4B6B',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.317',
          sortOrder: 5,
          isFinished: false,
        },
        {
          sousId: 7,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.wglmr,
          contractAddress: {
            1287: '',
            1284: '0xe68a572CEc1C021d8a13DbDd0bDBCFEdc8F1901f',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.03145',
          sortOrder: 6,
          isFinished: false,
        },
        {
          sousId: 8,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.vlxpad,
          contractAddress: {
            1287: '',
            1284: '0x2ABe5242d36E3A0f643EF4748d35Bd8B7FC56C5d',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.0629',
          sortOrder: 7,
          isFinished: false,
        },
      ]
    : [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            1287: '0x0FE7711dD2A622725FfB30f378145e1D40127f80',
            1284: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1.3',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 1,
          stakingToken: serializedTokens.te6,
          earningToken: serializedTokens.cake,
          contractAddress: {
            1287: '0x4d7Eb77d48819474382e0A6f959FB94E9558d097',
            1284: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 2,
          stakingToken: serializedTokens.te9,
          earningToken: serializedTokens.cake,
          contractAddress: {
            1287: '0xB6af2082CabF5Be2543facB2C249eaA319049FcF',
            1284: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 3,
          stakingToken: serializedTokens.te12,
          earningToken: serializedTokens.cake,
          contractAddress: {
            1287: '0xB2b82ef645C83776BDFe56575F301a26Aa5ec0D9',
            1284: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 4,
          stakingToken: serializedTokens.te18,
          earningToken: serializedTokens.cake,
          contractAddress: {
            1287: '0x950F99F494872a817fe1432F9Cc59b0bEc0E5717',
            1284: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '1',
          sortOrder: 1,
          isFinished: false,
        },
      ]

export default pools
