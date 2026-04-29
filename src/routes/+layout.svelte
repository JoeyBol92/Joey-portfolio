<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		if (navigation.type === 'popstate') {
			document.documentElement.setAttribute('data-nav-direction', 'back');
		} else {
			document.documentElement.removeAttribute('data-nav-direction');
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>JojoBee: websites op maat &copy; {new Date().getFullYear()}</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<Footer />
</div>
