import { Address } from 'viem'
import { useAccount, useBalance as useBalanceWagmi } from 'wagmi'

import { useWatch } from './useWatch'

export type BalanceResult = { formatted: string | undefined; value: bigint | undefined } | undefined

export const useBalance = (tokenAddress: Address) => {
	const { address } = useAccount()

	const { data, isLoading, refetch } = useBalanceWagmi({
		address,
		token: tokenAddress,
		query: {
			enabled: !!address,
		},
	})
	useWatch(refetch)

	return { isLoading, balance: { formatted: data?.formatted, value: data?.value } }
}
