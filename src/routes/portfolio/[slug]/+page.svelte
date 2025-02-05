<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.portfolio.fields.seoTitel} &copy;</title>
	<meta name="description" content={data.portfolio.fields.seoMetabeschrijving} />
	<link rel="canonical" href="https://jojobee.nl/portfolio/{data.portfolio.fields.slug}/" />
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="{data.portfolio.fields.seoTitel} &copy;" />
	<meta property="og:url" content="https://jojobee.nl/portfolio/{data.portfolio.fields.slug}/" />
	<meta
		property="og:image"
		content={data.portfolio.fields.featuredImagePortfolio.fields.file.url}
	/>
	<meta
		property="og:image:alt"
		content={data.portfolio.fields.featuredImagePortfolio.fields.description}
	/>
	<meta property="og:type" content="WebPage" />
	<meta property="og:description" content={data.portfolio.fields.seoMetabeschrijving} />
	<meta property="og:locale" content="nl" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.portfolio.fields.seoTitel} &copy;" />
	<meta name="twitter:url" content="https://jojobee.nl/portfolio/{data.portfolio.fields.slug}/" />
	<meta name="twitter:description" content={data.portfolio.fields.seoMetabeschrijving} />
	<meta
		name="twitter:image"
		content={data.portfolio.fields.featuredImagePortfolio.fields.file.url}
	/>
	<meta
		name="twitter:image:alt"
		content={data.portfolio.fields.featuredImagePortfolio.fields.description}
	/>
</svelte:head>

<section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
	<div class="px-[25px]">
		<h1 class="mb-8 text-center text-3xl md:text-5xl">
			{@html data.portfolio.fields.title_portfolio}
		</h1>
		<img
			src={data.portfolio.fields.featuredImagePortfolio.fields.file.url}
			alt={data.portfolio.fields.featuredImagePortfolio.fields.description ||
				data.portfolio.fields.featuredImagePortfolio.fields.title}
			class="h-96 w-full rounded-lg object-cover object-top shadow-xl"
		/>
	</div>
</section>

<div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
	<div class="grid gap-8 px-[25px] md:grid-cols-3">
		<div class="rounded-lg border shadow-sm">
			<div class="flex items-center p-6">
				<div class="mr-4 rounded-full bg-[#00A9FF] p-3">
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
						class="lucide lucide-user"
						><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"
						></circle></svg
					>
				</div>
				<div>
					<h2 class="font-semibold text-gray-600">Klant</h2>
					<p class="text-lg">{@html data.portfolio.fields.client}</p>
				</div>
			</div>
		</div>
		<div class="rounded-lg border shadow-sm">
			<div class="flex items-center p-6">
				<div class="mr-4 rounded-full bg-[#00A9FF] p-3">
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
						><path d="M8 2v4"></path><path d="M16 2v4"></path><rect
							width="18"
							height="18"
							x="3"
							y="4"
							rx="2"
						></rect><path d="M3 10h18"></path></svg
					>
				</div>
				<div>
					<h2 class="font-semibold text-gray-600">Datum</h2>
					<p class="text-lg">{@html data.portfolio.fields.date}</p>
				</div>
			</div>
		</div>
		<div class="rounded-lg border shadow-sm">
			<div class="flex items-center p-6">
				<div class="mr-4 rounded-full bg-[#00A9FF] p-3">
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
						class="lucide lucide-code"
						><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"
						></polyline></svg
					>
				</div>
				<div>
					<h2 class="font-semibold text-gray-600">Categorie</h2>
					<p class="text-lg">{@html data.portfolio.fields.categorie}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
	<div class="px-[25px]">
		<div class="rounded-lg border p-6 shadow-sm">
			<h2 class="mb-4 text-2xl font-bold">Projectomschrijving</h2>
			<div
				class="prose-p:mb-5 prose-p:text-gray-600 prose-ul:list-disc prose-ul:space-y-2 prose-ul:pl-5"
			>
				{@html documentToHtmlString(data.portfolio.fields.projectBeschrijving)}
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
	<div class="px-[25px]">
		<div class="mb-12 grid gap-8 md:grid-cols-2">
			<div class="rounded-lg border shadow-sm">
				<div class="p-6">
					<h2 class="mb-4 text-2xl font-bold">Eigenschappen</h2>
					<ul class="list-disc space-y-2 pl-5">
						{#each data.portfolio.fields.projectOverview as eigenschap}
							<li class="text-gray-600">{@html eigenschap}</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="rounded-lg border shadow-sm">
				<div class="p-6">
					<h2 class="mb-4 text-2xl font-bold">Technieken</h2>
					<div class="flex flex-wrap gap-2">
						{#each data.portfolio.fields.technieken as techniek}
							<span class="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
								>{@html techniek}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if data.portfolio.fields.media}
	<div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
		<div class="px-[25px]">
			<div class="mb-12 grid gap-8 md:grid-cols-2">
				{#each data.portfolio.fields.media as media}
					<img
						src={media.fields.file.url}
						alt={media.fields.description || media.fields.title}
						class=" h-96 w-full rounded-lg object-cover object-top shadow-md"
					/>
				{/each}
			</div>
		</div>
	</div>
{/if}

<div class="container mx-auto mb-12 max-w-7xl px-6 sm:px-8">
	<div class="px-[25px]">
		<div class="flex justify-center gap-4 md:flex-row">
			<a href={data.portfolio.fields.websiteKlant} target="_blank" rel="nofollow">
				<button
					class="ring-offset-background focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-[#00A9FF] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-1 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="12" cy="12" r="10"></circle><path
							d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
						></path><path d="M2 12h20"></path></svg
					><span class="ml-2">Bekijk {@html data.portfolio.fields.websiteKlant}</span></button
				>
			</a>
		</div>
	</div>
</div>
