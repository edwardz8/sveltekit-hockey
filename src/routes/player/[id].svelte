<!-- <script context="module">
    export async function load({ page: { params } }) {
        const { id } = params
        return { props: { playerId: id } }
    }
</script> -->

<script lang="ts">
	import Player from '$root/components/player.svelte'
	import type { PlayerType } from '$root/types'
    import { page } from '$app/stores';
    
    console.log($page.params)

	export let player: PlayerType 

    // const name = player.name
    // const goals = player.goals
</script>


<svelte:head>
	<title>Player { player.name }</title>
</svelte:head>

<h1>Ottawa Senator</h1>

<p>{ player.name }</p>
<p>{ player.goals }</p>
<!-- <Player {player} /> -->
