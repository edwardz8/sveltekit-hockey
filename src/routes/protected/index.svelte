<script context="module" lang="ts">
import type { Load } from '@sveltejs/kit'

export const load: Load = ({ session }) => {
    if (!session.user) {
        return {
            status: 302,
            redirect: '/auth/login'
        }
    }

    return {
        status: 200, 
        props: {
            user: session.user.username,
        }
    }
}
</script>

<script lang="ts">
export let user: string 
</script>

<h1>Protected Index Route</h1>

<p>Welcome {user}!</p>

<p>Thanks for signing up!</p>

<p>View the players page but routing for an individual player is broken at the moment. being able to like a player and comment on the player card is coming soon.</p>