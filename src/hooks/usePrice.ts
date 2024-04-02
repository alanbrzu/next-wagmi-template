import { useEffect } from 'react'
import useSWR from 'swr'

import { fetcher } from '@/lib/utils'

export const usePrice = (token = 'ethereum') => {
	const { data: price, isLoading } = useSWR<string>(`/api/tokenPrice?cgId=${token}`, fetcher)

	return { loading: isLoading, price }
}
