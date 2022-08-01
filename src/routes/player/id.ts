import type { RequestHandler } from '@sveltejs/kit'
import { getPlayer } from '$root/utils/prisma'

export const GET: RequestHandler = async ({ params }) => {
	const player = await getPlayer(params)

	if (!player) {
		return { status: 400 }
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { player }
	}
}