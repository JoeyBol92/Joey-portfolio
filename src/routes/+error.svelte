<script>
	import { page } from '$app/stores';
	import Container from '$lib/components/Container.svelte';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error.message}</title>
</svelte:head>

<section class="mx-auto max-w-screen-xl px-6 py-12 md:py-24">
	<Container>
		<div class="flex flex-col items-center justify-center text-center">
			<div class="mb-6 text-8xl font-bold text-gray-200">{$page.status}</div>
			<h1 class="text-3xl md:text-5xl">{$page.error.message}</h1>
			<p class="mt-4 text-gray-600">De pagina die je zoekt bestaat niet of is verplaatst.</p>
			<div class="mt-8">
				<a href="/" aria-label="button link to homepage">
					<button class="btn-primary" aria-label="Back to home">
						<span>Terug naar homepage</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="ml-2 h-5 w-5"
						>
							<path d="m9 18 6-6-6-6"></path>
						</svg>
					</button>
				</a>
			</div>
		</div>
	</Container>
</section>
