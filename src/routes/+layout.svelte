<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

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
<Header />
{@render children?.()}
<Footer />
