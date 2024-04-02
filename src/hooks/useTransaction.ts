import { useEffect, useState } from 'react'
import { Address } from 'viem'
import { useWaitForTransactionReceipt } from 'wagmi'

import { useTransactionToasts } from './useTransactionToasts'

export type Transaction = {
	text: string
	loadingText: string
	hash: Address | undefined
	confirming: boolean
	loading: boolean
	success: boolean
	error: boolean
}

export const useTransaction = (
	text: string,
	loadingText: string,
	hash: `0x${string}` | undefined,
	isPending: boolean
) => {
	const [transaction, setTransaction] = useState<Transaction>({
		text,
		loadingText,
		hash,
		confirming: false,
		loading: false,
		success: false,
		error: false,
	})

	useTransactionToasts(transaction)

	useEffect(() => {
		setTransaction(t => ({ ...t, hash }))
	}, [hash])

	const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
		hash,
	})

	// user confirming in wallet
	useEffect(() => {
		setTransaction(t => ({ ...t, confirming: isPending }))
	}, [isPending])

	// transaction pending
	useEffect(() => {
		setTransaction(t => ({ ...t, loading: isLoading }))
	}, [isLoading])

	useEffect(() => {
		setTransaction(t => ({ ...t, success: isSuccess }))
	}, [isSuccess])

	useEffect(() => {
		setTransaction(t => ({ ...t, error: isError }))
	}, [isError])

	return transaction
}
