import fetchAndCache from '@/lib/redis/cache'

export const getPriceUsd = async (cgId: string) => {
	return await fetchAndCache<string>(
		`web3Template:${cgId}`,
		async () => {
			try {
				const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cgId}&vs_currencies=usd`)
				const data = await res.json()

				const price = data.cgId.usd

				if (isNaN(Number(price))) {
					console.log(`${cgId} price from cg is NaN`, { data })
					return '0'
				}

				return price as string
			} catch (err) {
				console.log(err)

				return '0'
			}
		},
		10 * 60 // this is based on how many ids we allow (can make 1 req to cg per minute)
	)
}
