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