import type { RequestHandler } from '@sveltejs/kit'

/* import { likePlayer } from '$root/utils/prisma'

export const POST: RequestHandler = async ({ request }) => {
	await likePlayer(request)

	return {
		status: 303,
		headers: {
			location: '/players'
		}
	}
} */

export const POST: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const id = +form.get('id')

	const liked = await prisma.liked.count({
		where: { playerId: id }
	})

	if (liked === 1) {
		await prisma.liked.delete({ where: { playerId: id } })

		const count = await prisma.player.findUnique({
			where: { id },
			select: { likes: true }
		})

		await prisma.player.update({
			where: { id },
			data: { likes: (count.likes -= 1) }
		})

		return {
			status: 303,
			headers: {
				location: '/players'
			}
		}
	}

	await prisma.liked.create({
		data: {
			playerId: id,
			userId: id
		}
	})

	const count = await prisma.player.findUnique({
		where: { id },
		select: { likes: true }
	})

	await prisma.player.update({
		where: { id },
		data: { likes: (count.likes += 1) }
	})

	return {
		status: 303,
		headers: { location: '/players' }
	}
}
