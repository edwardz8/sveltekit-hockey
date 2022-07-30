// See https://kit.svelte.dev/docs/types#app
declare namespace App {
	interface Locals {
		// userid: { username: string }
		user?: { username: string }
	}

	// interface Platform {}

	// interface PrivateEnv {}

	// interface PublicEnv {}

	interface Session {
		user?: { username: string }
	}

	// interface Stuff {}
}
