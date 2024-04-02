import { Address, zeroAddress } from 'viem'
import { mainnet, sepolia } from 'wagmi/chains'

import { ChainId } from '@/lib/constants/chains'

export const AUCTION_CONTRACT: { [chainId in ChainId]: Address } = {
	[mainnet.id]: zeroAddress,
	[sepolia.id]: zeroAddress,
}
