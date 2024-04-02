import { mainnet, sepolia } from 'wagmi/chains'

export enum ChainId {
	MAINNET = mainnet.id,
	SEPOLIA = sepolia.id,
}

export const EXPLORER: { [chainId in ChainId]: string } = {
	[ChainId.MAINNET]: 'https://etherscan.io',
	[ChainId.SEPOLIA]: 'https://sepolia.etherscan.io',
}
