<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	let history = [$page.url.pathname];

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		const destination = navigation.to?.url.pathname ?? '';
		const previousIndex = history.lastIndexOf(destination);
		const isBack = previousIndex !== -1 && previousIndex < history.length - 1;

		if (isBack) {
			history = history.slice(0, previousIndex + 1);
			document.documentElement.dataset.navDirection = 'back';
		} else {
			history = [...history, destination];
			document.documentElement.dataset.navDirection = 'forward';
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
