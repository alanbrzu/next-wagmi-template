import { create } from 'zustand'

interface TokenPriceStore {
	loading: boolean
	setLoading: (loading: boolean) => void
	tokenPrice: string
	setTokenPrice: (tokenPrice: string) => void
}

export const useTokenPriceStore = create<TokenPriceStore>()(set => ({
	loading: true,
	setLoading: (loading: boolean) => set({ loading }),
	tokenPrice: '0',
	setTokenPrice: (tokenPrice: string) => set({ tokenPrice }),
}))
