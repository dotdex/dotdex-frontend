import addresses from '../../addresses.json'

/**
 * @see https://github.com/pancakeswap/pancake-frontend/blob/develop/src/config/constants/tokens.ts
 */
const tokens = {
  cake: {
    symbol: 'WAG',
    address: {
      1284: addresses[1284].DotDexToken,
      1287: addresses[1287].DotDexToken,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  wglmr: {
    symbol: 'wVLX',
    address: {
      1284: addresses[1284].WGLMR,
      1287: addresses[1287].WGLMR,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      1284: addresses[1284].DotDexStake,
      1287: addresses[1284].DotDexStake,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      1284: '0x01445C31581c354b7338AC35693AB2001B50b9aE',
      1287: '0x6Ef054B3E3C3C83E14527E8fa593c2c4435A6ea4',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
}

export default tokens
