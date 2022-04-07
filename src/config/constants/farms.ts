import { ChainId } from '@dotdex-swap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const VLX_WAG_LP_PID = chainId === MAINNET ? 1 : 9
export const VLX_USDT_LP_PID = chainId === MAINNET ? 5 : 6

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          lpSymbol: 'WAG',
          lpAddresses: {
            111: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            106: '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'VLX_WAG LP',
          lpAddresses: {
            111: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            106: '0x33f879690C165cC320B0BA04cEb1F9CeaC80F376',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          lpSymbol: 'VLX_ETH LP',
          lpAddresses: {
            111: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
            106: '0x7c3F1eA99770aa23Fe1b19097c93BB0cF34C8351',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          lpSymbol: 'VLX_BUSD LP',
          lpAddresses: {
            111: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
            106: '0x8e2B762Bee3E2bf2C8fB0cdd04274042748D6C23',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          lpSymbol: 'VLX_USDC LP',
          lpAddresses: {
            111: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
            106: '0x757Ac3cDFfa84b67dFC58c5880Aa8037ef5a23d5',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          lpSymbol: 'VLX_USDT LP',
          lpAddresses: {
            111: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            106: '0x7F3cB73FC470c2c9F543FdD17dF4De0e97b51A97',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 6,
          lpSymbol: 'VLX_BITORB LP',
          lpAddresses: {
            111: '',
            106: '0xa4c1Ee69750Ff17a2fa561D697E2fb23f4e0A842',
          },
          token: serializedTokens.bitorb,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 7,
          lpSymbol: 'VLX_SCAR LP',
          lpAddresses: {
            111: '',
            106: '0x9D4192D18c49dd9e4DBC3892dd55Cd8EC4081299',
          },
          token: serializedTokens.scar,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 10,
          lpSymbol: 'WAG_ASTRO LP',
          lpAddresses: {
            111: '',
            106: '0x40AC95e5855878e614f838ABf2b84853e84F188d',
          },
          token: serializedTokens.astro,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 11,
          lpSymbol: 'WAG_SWAPZ LP',
          lpAddresses: {
            111: '',
            106: '0x3f3C905210411F6E7D881889AffBA5051fC9294b',
          },
          token: serializedTokens.swapz,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 12,
          lpSymbol: 'WAG_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x545Dad8f8F934b6E5fa408FEC3da59651228Ee9E',
          },
          token: serializedTokens.usdv,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 13,
          lpSymbol: 'WAG_BUSD LP',
          lpAddresses: {
            111: '',
            106: '0x339977398975dcD543f3873194B9238A96Ac79dE',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 14,
          lpSymbol: 'VLX_VDGT LP',
          lpAddresses: {
            111: '',
            106: '0x7b714BC5dD176EaA198fe6C07E415a87A40dc858',
          },
          token: serializedTokens.vdgt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 15,
          lpSymbol: 'BUSD_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x5bF6d526C5C0AdfEA5853941f7B59261ea071Da6',
          },
          token: serializedTokens.usdv,
          quoteToken: serializedTokens.busd,
        },
        {
          pid: 16,
          lpSymbol: 'WBTC_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x90724ea2D9D9decE420C9413850401DA9dccb514',
          },
          token: serializedTokens.wbtc,
          quoteToken: serializedTokens.usdv,
        },
        {
          pid: 17,
          lpSymbol: 'DAI_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x0a2c396e388Edb05BbAb98F511BFceC11f643226',
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
          lpSymbol: 'WAG',
          lpAddresses: {
            111: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            106: '0x1920AFDC480f51F5d01306B72184655Cd5A3bE69',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          lpSymbol: 'VLX_TE6 LP',
          lpAddresses: {
            111: '0xC056BBe888547986Ad2bb0Ff7F9fA484A0c27743',
            106: '0xC056BBe888547986Ad2bb0Ff7F9fA484A0c27743',
          },
          token: serializedTokens.te6,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          lpSymbol: 'VLX_TE9 LP',
          lpAddresses: {
            111: '0x40d4fC460eF4C76a20CE1BaEAEB6b921050f483f',
            106: '0x40d4fC460eF4C76a20CE1BaEAEB6b921050f483f',
          },
          token: serializedTokens.te9,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          lpSymbol: 'VLX_TE12 LP',
          lpAddresses: {
            111: '0xc40969848d5B549138f0b1B499a69fA9B510407d',
            106: '0xc40969848d5B549138f0b1B499a69fA9B510407d',
          },
          token: serializedTokens.te12,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          lpSymbol: 'VLX_TE18 LP',
          lpAddresses: {
            111: '0xf01D3d7827211626E7b76DD583EaC8b369d046b0',
            106: '0xf01D3d7827211626E7b76DD583EaC8b369d046b0',
          },
          token: serializedTokens.te18,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          lpSymbol: 'VLX_ETH LP',
          lpAddresses: {
            111: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
            106: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 6,
          lpSymbol: 'VLX_USDT LP',
          lpAddresses: {
            111: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            106: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 7,
          lpSymbol: 'VLX_USDC LP',
          lpAddresses: {
            111: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
            106: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 8,
          lpSymbol: 'VLX_BUSD LP',
          lpAddresses: {
            111: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
            106: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 9,
          lpSymbol: 'VLX_WAG LP',
          lpAddresses: {
            111: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            106: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
      ]

export default farms

/*
"VLX_TE6_LP": {
        "pair": "0x04394d1d07F24C30d82D06097301Da1f9732E54f",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x24f1a66765601999c853136611f5AC999Ca77F50"
    },
    "VLX_TE9_LP": {
        "pair": "0x3124E72d06f181a225e9E587C1ca4Da5E905Bd37",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xb8075860b634c367dA432a8Bc84ad1556AB19679"
    },
    "VLX_TE12_LP": {
        "pair": "0xBBf16449Aa3D7cd988810bf966982f68d1154023",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x660F4DfEe75a28525DdB7916556418CDc9b329D3"
    },
    "VLX_TE18_LP": {
        "pair": "0x4522640cF08B6acba90dDA9D4e6Ae3003b4e0ED7",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xE76592830037d81e1cD5A49d912e8BFf029901Be"
    },
    "VLX_ETH_LP": {
        "pair": "0x2537C7D256D7aec0f41BEf15C93Ec269D263F772",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x3538C7f88aDbc8ad1F435f7EA70287e26b926344"
    },
    "VLX_USDT_LP": {
        "pair": "0x681Ce22f568720eeFA34548d360c94721aCE1A50",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6Ef054B3E3C3C83E14527E8fa593c2c4435A6ea4"
    },
    "VLX_USDC_LP": {
        "pair": "0xe29d45F71C3132391dFD0F92e54fcA74DE37c45A",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x6b82bDB5a1AdFfa3816D1F942D60f0269647C646"
    },
    "VLX_BUSD_LP": {
        "pair": "0x02d14903A8423027643e185ae0277D1d09e22497",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0xe2172a8E1762ae9962A59EE88a731522A61a4cc9"
    },
    "VLX_WAG_LP": {
        "pair": "0x518F4Fea9084D981f5faA63F7b549eC922333e54",
        "tokenA": "0xd4157755C3e63C8d599d450a90f7052a4aAA6cC2",
        "tokenB": "0x1bC60cFc522A264639866D47C634EfCdddd624eA"
    }
*/
