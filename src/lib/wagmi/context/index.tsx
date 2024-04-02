'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider } from 'connectkit'
import React, { ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'

import { config } from '@/lib/wagmi/config'

// Setup queryClient
const queryClient = new QueryClient()

export function ContextProvider({ children, cookie }: { children: ReactNode; cookie: string }) {
	const initialState = cookieToInitialState(config, cookie)

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
