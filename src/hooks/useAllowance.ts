import { Address, erc20Abi, zeroAddress } from 'viem'
import { useAccount, useReadContract, useWriteContract } from 'wagmi'

import { useTransaction } from './useTransaction'
import { useWatch } from './useWatch'

export const useAllowance = (tokenAddress: Address | string, contractAddress: Address | string, amount: bigint) => {
	const { address } = useAccount()

	const { data: allowance, refetch } = useReadContract({
		address: tokenAddress as Address,
		abi: erc20Abi,
		functionName: 'allowance',
		args: [address ?? zeroAddress, contractAddress as Address],
		query: {
			enabled: address !== zeroAddress,
		},
	})
	useWatch(refetch)

	const { data, isPending, writeContract } = useWriteContract()

	const approve = () => {
		writeContract({
			address: tokenAddress as Address,
			abi: erc20Abi,
			functionName: 'approve',
			args: [contractAddress as Address, amount],
		})
	}

	const transaction = useTransaction('Approve', 'Approving', data, isPending)

	const handleApprove = () => {
		try {
			if (BigInt(allowance ?? 0) < BigInt(amount)) {
				approve() // Request approval
			}
		} catch (err) {
			console.log(err)
		}
	}

	return { handleApprove, allowance, transaction }
}
