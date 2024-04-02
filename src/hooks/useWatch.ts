import { useWatchBlockNumber } from 'wagmi'

export const useWatch = (refetch: () => void) => {
	useWatchBlockNumber({
		onBlockNumber() {
			refetch()
		},
	})
}
