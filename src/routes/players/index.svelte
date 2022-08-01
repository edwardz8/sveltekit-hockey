<script lang="ts">
	import Player from '$root/components/player.svelte'
	import type { PlayerType } from '$root/types'

	export let players: PlayerType[] = []
</script>

<svelte:head>
	<title>Players</title>
</svelte:head>

<h1>Ottawa Senators</h1>

{#each players as player (player.id)}
	<Player {player} />
{/each}
