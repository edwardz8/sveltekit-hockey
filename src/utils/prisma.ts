import prisma from '$root/lib/database'

/* 

const user = await prisma.user.findUnique({
        where: { username }
    })

*/

export async function getPlayers() {
	const players = await prisma.player.findMany({
		/* include: { username }, */
		orderBy: { name: 'desc' }
	})

	// const likedPlayers = await getLikedPlayers()

	return players.map((p) => {
		return {
            id: p.playerId,
			content: p.content,
			name: p.name,
			url: p.url,
            pos: p.pos,
            goals: p.goals,
            assists: p.assists,
            blocks: p.blocks,
            hits: p.hits,
            price: p.price,
			likes: p.likes,
			// liked: likedPlayers.includes(p.playerId)
		}
	})
}

export async function getPlayer(
	params: Record<string, string>
) {
	const p = await prisma.player.findFirst({
		where: { url: params.playerId },
		/* include: { user: true } */
	})

	// const likedPlayers = await getLikedPlayers()

	return {
        id: p.playerId,
		content: p.content,
		name: p.name,
		url: p.url,
        pos: p.pos,
        goals: p.goals,
        assists: p.assists,
        blocks: p.blocks,
        hits: p.hits,
        price: p.price,
		likes: p.likes,
		// liked: likedPlayers.includes(p.playerId),
	}
}

/* export async function getLikedPlayers() {
	const liked = await prisma.liked.findMany({
		where: { likes },
		select: { playerId: true }
	})

	const likedPlayers = Object.keys(liked).map(
		(key) => liked[key].playerId
	)

	return likedplayers
} */

export async function createComment(request: Request) {
	const form = await request.formData()
	const player = String(form.get('player'))

	if (player.length > 400) {
		return {
			status: 400,
			body: 'Maximum Comment length exceeded.',
			headers: { location: '/players' }
		}
	}

	// you can get the user from the session
	await prisma.Player.create({
		data: {
			url: Math.random().toString(16).slice(2),
			content: player,
			likes: 0,
			user: userId
		}
	})
}

export async function removeComment(request: Request) {
	const form = await request.formData()
	const playerId = +form.get('id')
	await prisma.player.delete({ where: { id: playerId } })
}

export async function likePlayer(request: Request) {
	const form = await request.formData()
	const id = +form.get('id')

	// verify if player is already liked
	const liked = await prisma.liked.count({
		where: { playerId: id }
	})

	if (liked === 1) {
		// if player is already liked, unlike it
		await prisma.liked.delete({ where: { playerId: id } })

		// update the likes count
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
				location: '/home'
			}
		}
	}

	// add liked record
	await prisma.liked.create({
		data: {
			playerId: id,
			user: { connect: { id: 1 } }
		}
	})

	// get the current like count and update it
	const count = await prisma.player.findUnique({
		where: { id },
		select: { likes: true }
	})

	await prisma.player.update({
		where: { id },
		data: { likes: (count.likes += 1) }
	})
}