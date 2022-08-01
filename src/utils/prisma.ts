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
			playerId: p.playerId,
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
	const p = await prisma.player.findUnique({
		where: { url: params.playerId },
		/* include: { user: true } */
	})

	// const likedPlayers = await getLikedPlayers()

	return {
		id: p?.playerId,
		content: p?.content,
		name: p?.name,
		team: p?.team,
		url: p?.url,
		pos: p?.pos,
		goals: p?.goals,
		assists: p?.assists,
		blocks: p?.blocks,
		hits: p?.hits,
		price: p?.price,
		fanpoints: p?.fanpoints,
		likes: p?.likes,
		// liked: likedPlayers.includes(p?.playerId),
	}
}


// Get Liked Players 
export async function getLikedPlayers() {
	const liked = await prisma.liked.findMany({
		where: { likes },
		select: { playerId: true }
	})
	const likedPlayers = Object.keys(liked).map(
		(key) => liked[key].playerId
	)
	return likedplayers
}

/* Like Player */
export async function likePlayer(request: Request) {
	const form = await request.formData()
	const id = +form.get('playerId')

	// verify if tweet is already liked
	const liked = await prisma.liked.count({
		where: { playerId: id },
	})

	if (liked === 1) {
		// if tweet is already liked unlike it
		await prisma.liked.delete({ where: { playerId: id } })

		// update the likes count
		const count = await prisma.player.findUnique({
			where: { playerId },
			select: { likes: true },
		})

		await prisma.player.update({
			where: { playerId },
			data: { likes: (count.likes -= 1) },
		})

		return {
			status: 303,
			headers: {
				location: '/players',
			},
		}
	}

	// add liked record
	await prisma.liked.create({
		data: {
			playerId: id,
			user: { connect: { username } },
		},
	})

	// get the current like count and update it
	const count = await prisma.player.findUnique({
		where: { playerId },
		select: { likes: true },
	})

	await prisma.player.update({
		where: { playerId },
		data: { likes: (count.likes += 1) },
	})
}


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


/* 
 const comment = await prisma.comment.create({
    data: {
      body,
      player: {
        connect: {
          id: player?.playerId,
        },
      },
      user: {
        connect: {
          id: user?.userId,
        },
      },
    },
    include: {
      user: {
        select: {
          username: true,
          bio: true,
          image: true,
          followedBy: true,
        },
      },
    },
  });

  return {
    id: comment.id,
    body: comment.body,
    user: {
      username: comment.author.username,
      bio: comment.author.bio,
    },
  };
};
*/