import React from 'react'

import { Transaction } from '@/hooks/useTransaction'

import ConnectionCheck from './ConnectionCheck'

export interface TransactionButtonProps {
	handleExecution: () => void
	transaction: Transaction
	disabled?: boolean
	insufficientBalance?: boolean
}

export default function TransactionButton({
	handleExecution,
	transaction,
	disabled,
	insufficientBalance,
}: TransactionButtonProps) {
	return (
		<ConnectionCheck>
			<button
				className="rounded-lg bg-gray-400 px-2 py-2 w-full"
				onClick={handleExecution}
				/** @todo make this button be disabled and have a spinner while loading */
				// isLoading={transaction.confirming || transaction.loading}
				disabled={disabled || insufficientBalance}
				// loadingText={transaction.loadingText}
				// colorScheme="gray"
				// flex={1}
			>
				{insufficientBalance
					? 'Insufficient Balance'
					: transaction.confirming || transaction.loading
					? 'Pending'
					: transaction.text}
			</button>
		</ConnectionCheck>
	)
}
