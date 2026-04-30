<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import type { Snippet } from 'svelte';
	import bricolageFont from '$lib/fonts/BricolageGrotesque-VariableFont.woff2?url';
	import dmSansFont from '$lib/fonts/DMSans-VariableFont.woff2?url';

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
	<link rel="preload" href={bricolageFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={dmSansFont} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<Footer />
</div>
