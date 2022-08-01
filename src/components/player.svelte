<script lang="ts">
	import { fade } from 'svelte/transition'
	import type { PlayerType } from '$root/types'
    // import Icon from '$root/components/icon.svelte'

	export let player: PlayerType
</script>

<article class="player-container" transition:fade>
	<div class="player-details">
		<div>
			<!-- <a href="/player/{player.id}" class="user">
				{player.name}
			</a> -->
			<span>{ player.name }</span> 
			<span class="info"> - { player.team } - </span>
			<span class="info">{ player.pos } ⚔️ </span>
		</div>

		<div class="player">
			<div class="content">
				{player.content}
			</div>

			<!-- <div class="actions">
				<form action="/players/like" method="post">
					<input type="hidden" name="id" value={player.id} />
					<button
						class="btn like"
						title="Like"
						type="submit"
					>
						<div class="circle">
							<Icon
								width="24"
								height="24"
								name="like"
								class={player.liked ? 'liked' : ''}
							/>
						</div>
						<span class="count">
							{#key player.likes}
								{#if player.likes}
									<div
										in:fly={{ y: 40 }}
										out:fly={{ y: 40 }}
									>
										{player.likes}
									</div>
								{/if}
							{/key}
						</span>
					</button>
				</form>
			</div> -->

		</div>
	</div>
</article>

<style>
	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	button {
		font-size: var(--font-16);
		padding: var(--spacing-16);
	}

	.player-container:hover {
		background-color: var(--color-bg-secondary);
	}

	.player-container {
		display: grid;
		/* grid-template-columns: min-content 1fr; */
		gap: 2;
		padding: var(--spacing-16) var(--spacing-24);
		transition: all 0.3s;
	}

	.player-container:not(:last-child) {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.player-details {
		display: flex;
	    justify-content: space-between;
	}

	.user {
		font-weight: 700;
		text-transform: capitalize;
	}

	.user:hover {
		text-decoration: underline;
	}

	.handle,
	.posted {
		font-size: var(--font-16);
		color: var(--color-text-muted);
	}

	.content {
		font-size: var(--font-16);
	}

	.actions {
		display: flex;
		gap: var(--spacing-32);
		margin-top: var(--spacing-16);
	}

	.actions button,
	.actions a {
		padding: 0;
		color: var(--color-text-muted);
		background: none;
		transition: all 0.3s;
	}

	.circle {
		width: 24px;
		height: 24px;
		display: grid;
		place-content: center;
		padding: var(--spacing-16);
		border-radius: 50%;
		transition: all 0.3s;
	}

	.circle > :global(.liked) {
		color: hsl(9 100% 64%);
		fill: hsl(9 100% 64%);
	}

	.like {
		display: flex;
		align-items: center;
	}

	.like:hover {
		color: hsl(9 100% 64%);
	}

	.like:hover .circle {
		background: hsla(9 100% 64% / 10%);
	}

	.permalink:hover {
		color: hsl(120 100% 40%);
	}

	.permalink:hover .circle {
		background-color: hsla(120 100% 50% / 4%);
	}

	.remove:hover {
		color: hsl(0 100% 50%);
	}

	.remove:hover .circle {
		background-color: hsla(0 100% 50% / 4%);
	}

	.like,
	.remove,
	.permalink {
		width: 80px;
	}

	.count {
		margin-left: var(--spacing-16);
		font-size: 1.4rem;
		font-weight: 400;
		overflow: hidden;
	}
</style>