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
			team: p.team,
			url: p.url,
			pos: p.pos,
			goals: p.goals,
			assists: p.assists,
			blocks: p.blocks,
			hits: p.hits,
			price: p.price,
			fanpoints: p.fanpoints,
			likes: p.likes,
			// liked: likedPlayers.includes(p.playerId)
		}
	})
}

export async function getPlayer(
	params: Record<string, string>
) {
	const player = await prisma.player.findFirst({
		where: { url: params.playerId },
		/* include: { user: true } */
	})

	// const likedPlayers = await getLikedPlayers()

	return {
		id: player?.playerId,
		content: player?.content,
		name: player?.name,
		team: player?.team,
		url: player?.url,
		pos: player?.pos,
		goals: player?.goals,
		assists: player?.assists,
		blocks: player?.blocks,
		hits: player?.hits,
		price: player?.price,
		fanpoints: player?.fanpoints,
		likes: player?.likes,
		// liked: likedPlayers.includes(p?.playerId),
	}
}


// Get Liked Players 
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


// Create Comment on Player 
/* export async function createComment(request: Request) {
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
	await prisma.player.create({
		data: {
			url: Math.random().toString(16).slice(2),
			content: player,
			likes: 0,
			user: userId
		}
	})
} */


// Remove User Comment from Player
/* export async function removeComment(request: Request) {
	const form = await request.formData()
	const playerId = +form.get('id')
	await prisma.player.delete({ where: { id: playerId } })
}
 */