<script lang="ts">
	import Player from '$root/components/player.svelte'
	import type { PlayerType } from '$root/types'

/*     import { page } from '$app/stores';
    console.log($page.params, 'param')
    console.log($page.url.pathname, 'pathname')
 */
	export let player: PlayerType 

    const name = player.name
    const goals = player.goals
</script>


<svelte:head>
	<title>Player { name }</title>
</svelte:head>

<h1>Ottawa Senator</h1>

<p>Player: { name }</p>
<p>Goals: { goals }</p>

<!-- <p>{ player.name }</p>
<p>{ player.goals }</p> -->
<Player {player} />
