<script lang="ts">
	// import Player from '$root/components/player.svelte'
	import type { PlayerType } from '$root/types'

/*     import { page } from '$app/stores';
    console.log($page.params, 'param')
    console.log($page.url.pathname, 'pathname')
 */
	export let player: PlayerType 

    const name = player.name
    const goals = player.goals
    const fanpoints = player.fanpoints
    const assists = player.assists 
</script>


<svelte:head>
	<title>Player { name }</title>
</svelte:head>

<h1>Ottawa Senator</h1>

<p class="attribute">Player: { name }</p>
<p class="attribute">Goals: { goals }</p>
<p class="attribute">Assists: { assists }</p>
<p class="attribute">Fantasy Point Projection: { fanpoints }</p>

<!-- <p>{ player.name }</p>
<p>{ player.goals }</p> -->
<!-- <Player {player} /> -->

<style>
.attribute {
    margin-top: 1rem;
}
</style>
