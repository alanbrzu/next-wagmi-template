'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider } from 'connectkit'
import React, { ReactNode } from 'react'
import { State, WagmiProvider } from 'wagmi'

import { config } from '@/lib/wagmi/config'

// Setup queryClient
const queryClient = new QueryClient()

export function ContextProvider({ children, initialState }: { children: ReactNode; initialState?: State }) {
	return (
		<WagmiProvider config={config} initialState={initialState}>
			<QueryClientProvider client={queryClient}>
				<ConnectKitProvider theme="auto" mode="light">
					{children}
				</ConnectKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}
