<script context="module" lang="ts">
	/* export const prerender = true; */
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Todos</title>
	<meta name="description" content="Svelte todos demo" />
</svelte:head>

<section>
	<h1>
	SvelteKit todos demo 
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
