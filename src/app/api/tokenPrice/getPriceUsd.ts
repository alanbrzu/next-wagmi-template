export const getPriceUsd = async (cgId: string) => {
	try {
		const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cgId}&vs_currencies=usd`, {
			next: { revalidate: 3600 }, // cache for 1 hour
		})
		const data = await res.json()

		const price = data[cgId].usd

		if (isNaN(Number(price))) {
			console.log(`${cgId} price from cg is NaN`, { data })
			return '0'
		}

		return price as string
	} catch (err) {
		console.log(err)

		return '0'
	}
}
