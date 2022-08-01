<script lang="ts">
	// import Player from '$root/components/player.svelte'
	import type { PlayerType } from '$root/types'

	export let player: PlayerType 

    const name = player.name
    const goals = player.goals
    const assists = player.assists 
    const fanpoints = player.fanpoints
</script>


<svelte:head>
	<title>Player { name }</title>
</svelte:head>

<h1>Ottawa Senator</h1>

<p class="attribute">Player: { name }</p>
<p class="attribute">Goals: { goals }</p>
<p class="attribute">Assists: { assists }</p>
<p class="attribute">Fantasy Point Projection: { fanpoints }</p>

<!-- <Player {player} /> -->

<style>
.attribute {
    margin-top: 1rem;
}
</style>
