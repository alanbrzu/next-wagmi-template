import { useEffect } from 'react'
import { toast } from 'sonner'
import { Address } from 'viem'

import { EXPLORER } from '@/lib/constants/chains'
import { ENV_CHAIN } from '@/lib/wagmi/config'

import { Transaction } from './useTransaction'

interface TransactionLinkProps {
	hash: Address | undefined
}
export const TransactionLink = ({ hash }: TransactionLinkProps) => {
	return (
		<a href={`${EXPLORER[ENV_CHAIN.id]}/tx/${hash}`} target="_blank" rel="noreferrer">
			<div className="items-center gap-2">
				<p className="font-medium">View Transaction</p>
				<p>Go</p>
			</div>
		</a>
	)
}

export const useTransactionToasts = ({ text, hash, confirming, loading, success, error }: Transaction) => {
	useEffect(() => {
		console.log({ loading })

		if (loading) {
			/** @todo make this `${text} Pending` */
			toast('Transaction Pending', {
				description: <TransactionLink hash={hash} />,
				duration: 5000,
			})
		}
	}, [hash, loading])

	useEffect(() => {
		if (hash && success) {
			toast.success('Transaction Successful', {
				description: <TransactionLink hash={hash} />,
				duration: 5000,
			})
		}
	}, [hash, success])

	useEffect(() => {
		if (hash && error) {
			toast.error('Transaction Error', {
				description: <TransactionLink hash={hash} />,
				duration: 5000,
			})
		}
	}, [error, hash])
}
