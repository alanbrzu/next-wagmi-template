import { Address } from 'viem'

import { ChainId } from '@/lib/constants/chains'

export type Token = {
	address: Address
	chainId: ChainId
	decimals?: number
	name?: string
	symbol?: string
	logoURI?: string
}

const KOI_DEFAULTS: Pick<Token, 'name' | 'decimals' | 'symbol' | 'logoURI'> = {
	name: 'Koi Token',
	symbol: 'KOI',
	decimals: 18,
	logoURI: 'https://i.imgur.com/tVmKFYP.png',
}

const KOI_MAINNET: Token = {
	chainId: ChainId.MAINNET,
	address: '0x8df5066Cf67D909eB67B82854cf54026d31fFFAE',
	...KOI_DEFAULTS,
}

const KOI_SEPOLIA: Token = {
	chainId: ChainId.SEPOLIA,
	address: '0x86B1eB37cA8FF729402438bEBCD9d8b89CCB4180',
	...KOI_DEFAULTS,
}

export const KOI_TOKEN: { [chainId: number]: Token } = {
	[ChainId.MAINNET]: KOI_MAINNET,
	[ChainId.SEPOLIA]: KOI_SEPOLIA,
}
