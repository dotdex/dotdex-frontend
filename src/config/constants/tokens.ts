import { ChainId, Token } from '@dotdex-swap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wglmr: new Token(MAINNET, addresses[1284].WGLMR, 18, 'WGLMR', 'Wrapped GLMR', 'https://dotdex.io/'),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  vlx: new Token(MAINNET, addresses[1284].WGLMR, 18, 'GLMR', 'GLMR', 'https://dotdex.io/'),
  cake: new Token(MAINNET, addresses[1284].DotDexToken, 18, 'DOTDEX', 'DotDexToken', 'https://dotdex.io/'),
  usdt: new Token(
    MAINNET,
    '0x01445C31581c354b7338AC35693AB2001B50b9aE',
    6,
    'USDT',
    'Multichain Tether USD',
    'https://dotdex.io/',
  ),
  weth: new Token(
    MAINNET,
    '0x85219708c49aa701871Ad330A94EA0f41dFf24Ca',
    18,
    'WETH',
    'Multichain WETH',
    'https://dotdex.io/',
  ),
  busd: new Token(
    MAINNET,
    '0xc1287c29A988AE0C0087D97b33C6E6766808A3BD3',
    18,
    'BUSD',
    'Velas BUSD',
    'https://dotdex.io/',
  ),
  usdc: new Token(MAINNET, '0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993', 6, 'USDC', 'Velas USDC', 'https://dotdex.io/'),

  syrup: new Token(TESTNET, addresses[1284].DotDexStake, 18, 'DotDexStake', 'DotDexStake Token', 'https://dotdex.io/'),
  // te6: new Token(TESTNET, addresses[1287].TE6, 6, 'TE6', 'ERC20 Token', 'https://dotdex.io/'),
  // te9: new Token(TESTNET, addresses[1287].TE9, 9, 'TE9', 'ERC20 Token', 'https://dotdex.io/'),
  // te12: new Token(TESTNET, addresses[1287].TE12, 12, 'TE12', 'ERC20 Token', 'https://dotdex.io/'),
  // te18: new Token(TESTNET, addresses[1287].TE18, 18, 'TE18', 'ERC20 Token', 'https://dotdex.io/'),
}

export const testnetTokens = {
  wglmr: new Token(TESTNET, addresses[1287].WGLMR, 18, 'WGLMR', 'Wrapped GLMR', 'https://dotdex.io/'),
  cake: new Token(TESTNET, addresses[1287].DotDexToken, 18, 'DOTDEX', 'DotDexToken', 'https://dotdex.io/'),
  syrup: new Token(TESTNET, addresses[1287].DotDexStake, 18, 'DotDexStake', 'DotDexStake Token', 'https://dotdex.io/'),
  usdt: new Token(
    TESTNET,
    '0x26a58a6e1bd90f23296ef68b0280779d944ff6a0',
    18,
    'USDT',
    'Velas USDT',
    'https://dotdex.io/',
  ),
  busd: new Token(
    TESTNET,
    '0x8377da69e99e6db975fca7677c2f07c5792a4acc',
    18,
    'BUSD',
    'Velas BUSD',
    'https://dotdex.io/',
  ),
  usdc: new Token(
    TESTNET,
    '0xbbc9246edb0f5942c847bd5ee728d5325063f310',
    18,
    'USDC',
    'Velas USDC',
    'https://dotdex.io/',
  ),
  weth: new Token(
    TESTNET,
    '0x621d36787f6c00308a731201594b1f81d0a0380a',
    18,
    'WETH',
    'Multichain WETH',
    'https://dotdex.io/',
  ),
  te6: new Token(TESTNET, addresses[1287].TE6, 6, 'TE6', 'ERC20 Token', 'https://dotdex.io/'),
  te9: new Token(TESTNET, addresses[1287].TE9, 9, 'TE9', 'ERC20 Token', 'https://dotdex.io/'),
  te12: new Token(TESTNET, addresses[1287].TE12, 12, 'TE12', 'ERC20 Token', 'https://dotdex.io/'),
  te18: new Token(TESTNET, addresses[1287].TE18, 18, 'TE18', 'ERC20 Token', 'https://dotdex.io/'),
}

const tokens = (): TokenList => {
  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (chainId === ChainId.TESTNET) {
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {})
    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
