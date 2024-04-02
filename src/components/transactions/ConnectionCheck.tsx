import React from 'react'
import { useAccount, useSwitchChain } from 'wagmi'

import { ENV_CHAIN } from '@/lib/wagmi/config'

import ConnectButton from '../ConnectButton'

/** wrap the TransactionButton or ApprovalGroup with this to return `Connect Wallet` */
export default function ConnectionCheck({ children }: { children: React.ReactNode }) {
	const { isConnected, isConnecting } = useAccount()
	const { chain } = useAccount()
	const { isPending: switchNetworkLoading, switchChain } = useSwitchChain()

	// check if connected (exclude approval button)
	if (!isConnected && !isConnecting) {
		return <ConnectButton />
	}

	// check network (exclude approval button)
	if (chain?.id !== ENV_CHAIN.id && !isConnecting) {
		return (
			<button
				// isLoading={switchNetworkLoading}
				// loadingText="Switching"
				// colorScheme="gray"
				// w="94%"
				onClick={() => switchChain({ chainId: ENV_CHAIN.id })}
			>
				Switch Network
			</button>
		)
	}

	return <>{children}</>
}
