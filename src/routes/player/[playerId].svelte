<script lang="ts">
	// import Player from '$root/components/player.svelte'
	import type { PlayerType } from '$root/types'
    import { page } from '$app/stores';

    console.log($page.params, 'param')
    
	export let player: PlayerType 

    console.log(player.playerId, 'player id')
    console.log(player.url, 'url')

    const name = player.name
    const goals = player.goals
    const assists = player.assists
    const hits = player.hits 
    const blocks = player.blocks 
    const fanpoints = player.fanpoints
</script>

<svelte:head>
	<title>Player { name }</title>
</svelte:head>

<h1>Ottawa Senator</h1>

<p class="attribute">Player: { name }</p>
<p class="attribute">Goals: { goals }</p>
<p class="attribute">Assists: { assists }</p>
<p class="attribute">Hits: { hits }</p>
<p class="attribute">Blocks: { blocks }</p>
<p class="attribute">Fantasy Point Projection: { fanpoints }</p>

<!-- <Player {player} /> -->

<style>
.attribute {
    margin-top: 1rem;
}
</style>
