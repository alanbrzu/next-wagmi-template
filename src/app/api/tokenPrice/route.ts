import { NextRequest } from 'next/server'

import { getPriceUsd } from './getPriceUsd'

const ALLOWED_CG_IDS = ['ethereum']

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const cgId = searchParams.get('cgId') // cdId = "ethereum" for /api/tokenPrice?cgId=ethereum

	if (!cgId || !ALLOWED_CG_IDS.includes(cgId)) {
		return Response.error()
	}

	try {
		const data = await getPriceUsd(cgId)

		return Response.json(data)
	} catch (err) {
		console.log(err)
		return Response.error()
	}
}
