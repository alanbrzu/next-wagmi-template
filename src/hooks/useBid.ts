import { useWriteContract } from 'wagmi'

import { AuctionAbi } from '@/lib/constants/abis/AuctionAbi'
import { AUCTION_CONTRACT } from '@/lib/constants/contracts'
import { ENV_CHAIN } from '@/lib/wagmi/config'

import { useTransaction } from './useTransaction'

export const useBid = () => {
	const { data, isPending, writeContract } = useWriteContract()

	const transaction = useTransaction('Commit', 'Committing', data, isPending)

	const handleBid = () => {
		writeContract({
			address: AUCTION_CONTRACT[ENV_CHAIN.id],
			abi: AuctionAbi,
			functionName: 'bid',
			args: [BigInt(4), BigInt('1000000000000000')],
		})
	}

	return { handleBid, transaction }
}
