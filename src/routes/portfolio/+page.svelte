<script>
	import Container from '$lib/components/Container.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>Portfolio - JojoBee &copy;</title>
	<meta
		name="description"
		content="Benieuwd wat ik zoal heb gedaan qua werk? Neem een kijkje in mijn portfolio!"
	/>
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="Portfolio - JojoBee &copy;" />
	<meta property="og:url" content="https://jojobee.nl/portfolio/" />
	<meta property="og:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta property="og:image:alt" content="Logo JojoBee" />
	<meta property="og:type" content="WebPage" />
	<meta
		property="og:description"
		content="Benieuwd wat ik zoal heb gedaan qua werk? Neem een kijkje in mijn portfolio!"
	/>
	<meta property="og:locale" content="nl" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Portfolio - JojoBee &copy" />
	<meta name="twitter:url" content="https://jojobee.nl/portfolio/" />
	<meta
		name="twitter:description"
		content="Benieuwd wat ik zoal heb gedaan qua werk? Neem een kijkje in mijn portfolio!"
	/>
	<meta name="twitter:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta name="twitter:image:alt" content="Logo JojoBee" />
</svelte:head>

<section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
	<div class="px-[25px]">
		<h1 class="mb-4 text-center text-3xl md:text-5xl">Portfolio</h1>
		<p class="mx-auto max-w-2xl text-center text-gray-600">
			Een overzicht van projecten waar ik aan heb gewerkt. Van WordPress websites tot moderne
			headless applicaties.
		</p>
	</div>
</section>

<section class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
	<div class="grid gap-8 px-[25px] md:grid-cols-2 lg:grid-cols-3">
		{#each data.portfolio as portfolio}
			<a
				href="/portfolio/{portfolio.fields.slug}/"
				class="portfolio-card group flex flex-col"
				aria-label="Bekijk details {portfolio.fields.title_portfolio}"
			>
				<!-- Logo section with hover overlay -->
				<div class="portfolio-card-image">
					<div class="absolute inset-0 flex items-center justify-center p-8">
						<img
							src={portfolio.fields.logo.fields.file.url}
							alt={portfolio.fields.logo.fields.description}
							class="max-h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
							width={portfolio.fields.logo.fields.file.details.image.width}
							height={portfolio.fields.logo.fields.file.details.image.height}
						/>
					</div>
					<div class="portfolio-card-overlay">
						<span class="flex items-center gap-2 font-medium text-white">
							Bekijk project
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="m9 18 6-6-6-6"></path>
							</svg>
						</span>
					</div>
				</div>

				<!-- Content section -->
				<div class="flex flex-1 flex-col p-6">
					<h2 class="mb-2 text-xl font-semibold">
						{@html portfolio.fields.title_portfolio}
					</h2>
					<p class="mb-4 flex-1 text-gray-600">
						{@html portfolio.fields.seoMetabeschrijving}
					</p>
					<span class="link-arrow mt-auto gap-2 text-sm">
						Bekijk details
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="transition-transform group-hover:translate-x-1"
						>
							<path d="m9 18 6-6-6-6"></path>
						</svg>
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>
