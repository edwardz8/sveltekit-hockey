import type { RequestHandler } from '@sveltejs/kit'
import { /* createComment, */ getPlayers } from '$root/utils/prisma'

export const GET: RequestHandler = async () => {
	const players = await getPlayers()

	if (!players) {
		return { status: 400 }
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { players }
	}
}

/* export const POST: RequestHandler = async ({ request }) => {
	await createComment(request)

	return {}
} */