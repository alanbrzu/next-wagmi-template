import { getDefaultConfig } from 'connectkit'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

import { isDevelopment } from '@/lib/utils'

export const ENV_CHAIN = isDevelopment() ? sepolia : mainnet

const SEPOLIA_RPC = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL
const MAINNET_RPC = process.env.NEXT_PUBLIC_MAINNET_RPC_URL

const walletConnectProjectId = process.env.NEXT_PUBLIC_walletConnectProjectId

if (walletConnectProjectId === undefined || walletConnectProjectId === '') throw new Error('Project ID is not defined')

const metadata = {
	name: 'NextJS Wagmi Template',
	description: 'Description',
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
		transports: {
			[mainnet.id]: http(MAINNET_RPC),
			[sepolia.id]: http(SEPOLIA_RPC),
		},
	})
)
