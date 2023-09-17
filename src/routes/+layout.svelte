<script lang="ts">

	import Header from './Header.svelte';
	import './styles.css';
	import { onMount } from 'svelte';
	import { msalInstance } from '$lib/msal';

	let user:any;

	onMount(async () => {
		if (msalInstance.getAllAccounts().length === 0) {
			// if user is not logged in, redirect to login
			const loginRequest = {
				scopes: ['User.Read']
			};
			await msalInstance.loginRedirect(loginRequest);
		} else {
			// if user is logged in, get the user details
			user = msalInstance.getAllAccounts()[0];
		}
	});
</script>

{#if user}
<div class="app">
	<Header />

	<welcome>Welcome {user.name}!</welcome>
	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
{:else}
	<!-- You can show a loading spinner here while the user is being redirected to the login page -->
	<welcome>Loading...</welcome>
{/if}

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	welcome {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
