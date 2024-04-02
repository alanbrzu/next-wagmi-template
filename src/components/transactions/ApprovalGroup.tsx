import React, { useEffect } from 'react'
import { Address } from 'viem'

import { useAllowance } from '@/hooks/useAllowance'
import { useBalance } from '@/hooks/useBalance'

import ConnectionCheck from './ConnectionCheck'
import TransactionButton, { TransactionButtonProps } from './TransactionButton'

/** @returns whether trnsaction amount is higher than balance or allowance @param limiter can be allowance or the wallet balance */
const checkInsufficient = (transactionAmount: bigint | undefined, limiter: bigint | undefined) =>
	BigInt(limiter ?? 0) < BigInt(transactionAmount ?? 0)

interface ApprovalGroupProps extends TransactionButtonProps {
	transactionAmount: bigint
	tokenAddress: Address
	contractAddress: Address
}

export default function ApprovalGroup({
	handleExecution,
	transaction,
	disabled,
	transactionAmount,
	tokenAddress,
	contractAddress,
}: ApprovalGroupProps) {
	const { balance } = useBalance(tokenAddress)

	const {
		handleApprove,
		allowance,
		transaction: approvalTransaction,
	} = useAllowance(tokenAddress, contractAddress, transactionAmount)

	return (
		<ConnectionCheck>
			<div className="flex items-center gap-2">
				{checkInsufficient(transactionAmount, allowance) && (
					<TransactionButton handleExecution={handleApprove} transaction={approvalTransaction} />
				)}
				<TransactionButton
					handleExecution={handleExecution}
					transaction={transaction}
					disabled={disabled}
					insufficientBalance={checkInsufficient(transactionAmount, balance.value)}
				/>
			</div>
		</ConnectionCheck>
	)
}
