import { NextRequest } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const id = searchParams.get('id') // api/get-account?id=${id}

	if (!id) {
		return Response.error()
	}

	try {
		const account = await prisma.account.findUnique({
			where: { id },
		})

		return Response.json(account)
	} catch (err) {
		console.log(err)
		return Response.error()
	}
}
