import redis from '.'

type FetchDataFn<T> = () => Promise<T>

const fetchAndCache = async <T>(key: string, fetchData: FetchDataFn<T>, cacheTime: number): Promise<T> => {
	const cachedData = await redis.get(key)

	if (cachedData) {
		return JSON.parse(cachedData) as T
	}

	const data = await fetchData()

	if (data) {
		await redis.setex(key, cacheTime, JSON.stringify(data))
	}
	return data
}

export default fetchAndCache
