import { getDefaultConfig } from 'connectkit'
import { cookieStorage, createConfig, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

import { isDevelopment } from '@/lib/utils'

export const ENV_CHAIN = isDevelopment() ? sepolia : mainnet

const walletConnectProjectId = process.env.walletConnectProjectId ?? ''

// if (walletConnectProjectId === undefined || walletConnectProjectId === '') throw new Error('Project ID is not defined')

const metadata = {
	name: 'Web3 Template',
	description: 'App description',
	url: 'https://google.com', // origin must match your domain & subdomain
	icon: 'https://avatars.githubusercontent.com/u/37784886',
}

export const config = createConfig(
	getDefaultConfig({
		chains: [ENV_CHAIN], // required
		walletConnectProjectId,
		appName: metadata.name,
		appDescription: metadata.description,
		appUrl: metadata.url,
		appIcon: metadata.icon,
		ssr: true,
		storage: createStorage({
			storage: cookieStorage,
		}),
	})
)
