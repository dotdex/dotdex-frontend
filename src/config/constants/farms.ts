import { ChainId } from '@dotdex-swap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const GLMR_WAG_LP_PID = chainId === MAINNET ? 1 : 9
export const GLMR_USDT_LP_PID = chainId === MAINNET ? 5 : 6

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          lpSymbol: 'DOTDEX',
          lpAddresses: {
            1287: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            1284: '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 1,
          lpSymbol: 'GLMR_WAG LP',
          lpAddresses: {
            1287: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            1284: '0x33f879690C165cC320B0BA04cEb1F9CeaC80F376',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 2,
          lpSymbol: 'GLMR_ETH LP',
          lpAddresses: {
            1287: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
            1284: '0x7c3F1eA99770aa23Fe1b19097c93BB0cF34C8351',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 3,
          lpSymbol: 'GLMR_BUSD LP',
          lpAddresses: {
            1287: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
            1284: '0x8e2B762Bee3E2bf2C8fB0cdd04274042748D6C23',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 4,
          lpSymbol: 'GLMR_USDC LP',
          lpAddresses: {
            1287: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
            1284: '0x757Ac3cDFfa84b67dFC58c5880Aa8037ef5a23d5',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 5,
          lpSymbol: 'GLMR_USDT LP',
          lpAddresses: {
            1287: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            1284: '0x7F3cB73FC470c2c9F543FdD17dF4De0e97b51A97',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 6,
          lpSymbol: 'GLMR_BITORB LP',
          lpAddresses: {
            1287: '',
            1284: '0xa4c1Ee69750Ff17a2fa561D697E2fb23f4e0A842',
          },
          token: serializedTokens.bitorb,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 7,
          lpSymbol: 'GLMR_SCAR LP',
          lpAddresses: {
            1287: '',
            1284: '0x9D4192D18c49dd9e4DBC3892dd55Cd8EC4081299',
          },
          token: serializedTokens.scar,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 10,
          lpSymbol: 'WAG_ASTRO LP',
          lpAddresses: {
            1287: '',
            1284: '0x40AC95e5855878e614f838ABf2b84853e84F188d',
          },
          token: serializedTokens.astro,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 11,
          lpSymbol: 'WAG_SWAPZ LP',
          lpAddresses: {
            1287: '',
            1284: '0x3f3C905210411F6E7D881889AffBA5051fC9294b',
          },
          token: serializedTokens.swapz,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 12,
          lpSymbol: 'WAG_USDV LP',
          lpAddresses: {
            1287: '',
            1284: '0x545Dad8f8F934b6E5fa408FEC3da59651228Ee9E',
          },
          token: serializedTokens.usdv,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 13,
          lpSymbol: 'WAG_BUSD LP',
          lpAddresses: {
            1287: '',
            1284: '0x339977398975dcD543f3873194B9238A96Ac79dE',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 14,
          lpSymbol: 'GLMR_VDGT LP',
          lpAddresses: {
            1287: '',
            1284: '0x7b714BC5dD176EaA198fe6C07E415a87A40dc858',
          },
          token: serializedTokens.vdgt,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 15,
          lpSymbol: 'BUSD_USDV LP',
          lpAddresses: {
            1287: '',
            1284: '0x5bF6d526C5C0AdfEA5853941f7B59261ea071Da6',
          },
          token: serializedTokens.usdv,
          quoteToken: serializedTokens.busd,
        },
        {
          pid: 16,
          lpSymbol: 'WBTC_USDV LP',
          lpAddresses: {
            1287: '',
            1284: '0x90724ea2D9D9decE420C9413850401DA9dccb514',
          },
          token: serializedTokens.wbtc,
          quoteToken: serializedTokens.usdv,
        },
        {
          pid: 17,
          lpSymbol: 'DAI_USDV LP',
          lpAddresses: {
            1287: '',
            1284: '0x0a2c396e388Edb05BbAb98F511BFceC11f643226',
          },
          token: serializedTokens.dai,
          quoteToken: serializedTokens.usdv,
        },
      ]
    : [
        /**
         * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
         */
        {
          pid: 0,
          lpSymbol: 'DOTDEX',
          lpAddresses: {
            1287: '0xDE87e1ECc38668833122311B1046096afD2bd1BC',
            1284: '',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 1,
          lpSymbol: 'GLMR_TE6 LP',
          lpAddresses: {
            1287: '0x8CC2A0a4e676ff205415344045115C1b91ecF996',
            1284: '',
          },
          token: serializedTokens.te6,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 2,
          lpSymbol: 'GLMR_TE9 LP',
          lpAddresses: {
            1287: '0x18Bed04f976dA15e24314a1F2DeE70d563Edb1b1',
            1284: '',
          },
          token: serializedTokens.te9,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 3,
          lpSymbol: 'GLMR_TE12 LP',
          lpAddresses: {
            1287: '0xcE622ad8a3CdCe02350ea530b32a2559eC69D883',
            1284: '',
          },
          token: serializedTokens.te12,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 4,
          lpSymbol: 'GLMR_TE18 LP',
          lpAddresses: {
            1287: '0x34197DaB3FB3DD8FD30E6Cc01FA8f2f0991b6061',
            1284: '',
          },
          token: serializedTokens.te18,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 5,
          lpSymbol: 'GLMR_ETH LP',
          lpAddresses: {
            1287: '0x227CD6dd0e831b16C671AAE2e561AD51D3760A05',
            1284: '',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 6,
          lpSymbol: 'GLMR_USDT LP',
          lpAddresses: {
            1287: '0x3bAabe3bB62B919537a5df808bf5cfd227a389f1',
            1284: '',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 7,
          lpSymbol: 'GLMR_USDC LP',
          lpAddresses: {
            1287: '0x0E199CaCe5b842DbA4bBf2a951E1A15b84c6B897',
            1284: '',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 8,
          lpSymbol: 'GLMR_BUSD LP',
          lpAddresses: {
            1287: '0x1e4b325f2c005938332b9e8966687d2aa68e6C10',
            1284: '',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wglmr,
        },
        {
          pid: 9,
          lpSymbol: 'GLMR_WAG LP',
          lpAddresses: {
            1287: '0x2c461F25aA1aDEcF8eA0495534280525CF386F65',
            1284: '',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wglmr,
        },
      ]

export default farms

/*
"GLMR_TE6_LP": {
        "pair": "0x04394d1d07F24C30d82D06097301Da1f9732E54f",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x24f1a66765601999c853136611f5AC999Ca77F50"
    },
    "GLMR_TE9_LP": {
        "pair": "0x3124E72d06f181a225e9E587C1ca4Da5E905Bd37",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xb8075860b634c367dA432a8Bc84ad1556AB19679"
    },
    "GLMR_TE12_LP": {
        "pair": "0xBBf16449Aa3D7cd988810bf966982f68d1154023",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x660F4DfEe75a28525DdB7916556418CDc9b329D3"
    },
    "GLMR_TE18_LP": {
        "pair": "0x4522640cF08B6acba90dDA9D4e6Ae3003b4e0ED7",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xE76592830037d81e1cD5A49d912e8BFf029901Be"
    },
    "GLMR_ETH_LP": {
        "pair": "0x2537C7D256D7aec0f41BEf15C93Ec269D263F772",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x3538C7f88aDbc8ad1F435f7EA70287e26b926344"
    },
    "GLMR_USDT_LP": {
        "pair": "0x681Ce22f568720eeFA34548d360c94721aCE1A50",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6Ef054B3E3C3C83E14527E8fa593c2c4435A6ea4"
    },
    "GLMR_USDC_LP": {
        "pair": "0xe29d45F71C3132391dFD0F92e54fcA74DE37c45A",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6b82bDB5a1AdFfa3816D1F942D60f0269647C646"
    },
    "GLMR_BUSD_LP": {
        "pair": "0x02d14903A8423027643e185ae0277D1d09e22497",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xe2172a8E1762ae9962A59EE88a731522A61a4cc9"
    },
    "GLMR_WAG_LP": {
        "pair": "0x518F4Fea9084D981f5faA63F7b549eC922333e54",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x1bC60cFc522A264639866D47C634EfCdddd624eA"
    }
*/
