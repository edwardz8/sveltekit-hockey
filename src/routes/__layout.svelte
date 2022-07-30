<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	// import '../app.css';
	import '$root/styles/global.css'
</script>

<Header />

<main>
	<slot />
</main>

<!-- <footer>
	<p>visit <a href="https://zed8.dev">zed8dev </a>to learn more</p>
</footer> -->

<style>
/*
footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>
