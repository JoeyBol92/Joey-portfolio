<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let data;
</script>

<svelte:head>
	<title>{data.methoden.fields.seoTitel} &copy;</title>
	<meta name="description" content={data.methoden.fields.seoMetabeschrijving} />
	<link rel="canonical" href="https://jojobee.nl/methoden/{data.methoden.fields.slug}/" />
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="{data.methoden.fields.seoTitel} &copy;" />
	<meta property="og:url" content="https://jojobee.nl/methoden/{data.methoden.fields.slug}/" />
	<meta property="og:image" content={data.methoden.fields.imageMethode.fields.file.url} />
	<meta property="og:image:alt" content={data.methoden.fields.imageMethode.fields.description} />
	<meta property="og:type" content="WebPage" />
	<meta property="og:description" content={data.methoden.fields.seoMetabeschrijving} />
	<meta property="og:locale" content="nl" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.methoden.fields.seoTitel} &copy;" />
	<meta name="twitter:url" content="https://jojobee.nl/methoden/{data.methoden.fields.slug}/" />
	<meta name="twitter:description" content={data.methoden.fields.seoMetabeschrijving} />
	<meta name="twitter:image" content={data.methoden.fields.imageMethode.fields.file.url} />
	<meta name="twitter:image:alt" content={data.methoden.fields.imageMethode.fields.description} />
</svelte:head>

<section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
	<div class="mb-8 flex items-center justify-center px-[25px]">
		<img
			src={data.methoden.fields.imageMethode.fields.file.url}
			alt={data.methoden.fields.imageMethode.fields.description}
			class="h-[50px] w-auto"
			width="50"
			height="50"
		/>
		<h1 class="ml-4 text-3xl md:text-5xl">{@html data.methoden.fields.titelMethode}</h1>
	</div>
	<div class="mx-auto mb-12 max-w-3xl px-[25px] text-gray-600 prose-p:mb-5 prose-p:text-gray-600">
		{@html documentToHtmlString(data.methoden.fields.beschrijving)}
	</div>
</section>

<!-- Eigenschappen -->
<div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
	<div class="px-[25px]">
		<div class="mb-12 grid gap-8 md:grid-cols-2">
			<div class="text-card-foreground rounded-lg border shadow-sm">
				<div class="p-6">
					<h2 class="mb-4 text-2xl font-bold">Eigenschappen</h2>
					<ul class="space-y-2">
						{#each data.methoden.fields.eigenschappen as eigenschap}
							<li class="flex items-center text-gray-600">
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
									class="lucide lucide-check mr-2 h-5 w-5 text-green-500"
									><path d="M20 6 9 17l-5-5"></path></svg
								>
								{@html eigenschap}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class=" ext-card-foreground rounded-lg border shadow-sm">
				<div class="p-6">
					<h2 class="mb-4 text-2xl font-bold">Technieken</h2>
					<div class="flex flex-wrap gap-2">
						{#each data.methoden.fields.technieken as techniek}
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

<!-- Proces -->
<div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
	<div class="px-[25px]">
		<div class="mb-12 rounded-lg border shadow-sm">
			<div class="p-6">
				<h2 class="mb-4 text-2xl font-bold">Het proces</h2>
				<div class="space-y-6">
					{#each data.methoden.fields.proces.flow as stap}
						<div class="flex">
							<div class="mr-4 flex-shrink-0">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A9FF] text-white"
								>
									{@html stap.number}
								</div>
							</div>
							<div>
								<h3 class="text-xl font-semibold">{@html stap.titel}</h3>
								<p class="text-gray-600">{@html stap.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Voordelen -->
<div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
	<div class="px-[25px]">
		<div class="rounded-lg border shadow-sm">
			<div class="p-6">
				<h2 class="mb-4 text-2xl font-bold">Voordelen</h2>
				<ul class="grid gap-x-4 space-y-2 md:grid-cols-2">
					{#each data.methoden.fields.voordelen as voordeel}
						<li class="flex items-center">
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
								class="lucide lucide-check mr-2 h-5 w-5 text-green-500"
								data-id="59"><path d="M20 6 9 17l-5-5"></path></svg
							>
							{@html voordeel}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
