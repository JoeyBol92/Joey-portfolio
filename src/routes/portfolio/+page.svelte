<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>Portfolio - JojoBee &copy;</title>
	<meta
		name="description"
		content="Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit."
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
	</div>
</section>

<section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
	<div class="grid gap-8 px-[25px] md:grid-cols-3">
		{#each data.portfolio as portfolio}
			<div>
				<div class=" flex h-full flex-col rounded-lg border shadow-xs">
					<img
						src={portfolio.fields.logo.fields.file.url}
						alt={portfolio.fields.logo.fields.description}
						class="my-8 h-[50px] w-auto rounded-t-lg object-contain px-12"
						width={portfolio.fields.logo.fields.file.details.image.width}
						height={portfolio.fields.logo.fields.file.details.image.height}
					/>
					<div class="flex grow flex-col px-6 pb-6">
						<h2 class="mb-2 text-center text-xl font-semibold">
							{@html portfolio.fields.title_portfolio}
						</h2>
						<p class="mb-4 grow text-gray-600">
							{@html portfolio.fields.seoMetabeschrijving}
						</p>
						<a
							href="/portfolio/{portfolio.fields.slug}/"
							aria-label="Bekijk details {portfolio.fields.title_portfolio}"
						>
							<button
								class="mt-auto inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#00A9FF] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-1 hover:opacity-70"
								>Bekijk details {@html portfolio.fields.title_portfolio}<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-chevron-right ml-2 h-5 w-5"
									><path d="m9 18 6-6-6-6"></path></svg
								></button
							>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
