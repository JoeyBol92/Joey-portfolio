<script>
	import { tick } from 'svelte';
</script>

<svelte:head>
	<title>Methoden - JojoBee &copy;</title>
	<meta
		name="description"
		content="Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit."
	/>
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="Methoden - JojoBee &copy;" />
	<meta property="og:url" content="https://jojobee.nl/methoden/" />
	<meta property="og:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta property="og:image:alt" content="Logo JojoBee" />
	<meta property="og:type" content="WebPage" />
	<meta
		property="og:description"
		content="Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit."
	/>
	<meta property="og:locale" content="nl" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Methoden - JojoBee &copy" />
	<meta name="twitter:url" content="https://jojobee.nl/methoden/" />
	<meta
		name="twitter:description"
		content="Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit."
	/>
	<meta name="twitter:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta name="twitter:image:alt" content="Logo JojoBee" />
</svelte:head>

<section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
	<div class="px-[25px]">
		<h1 class="mb-4 text-center text-3xl md:text-5xl">Methoden</h1>
	</div>
</section>

<section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
	<div class="grid gap-8 px-[25px] md:grid-cols-3">
		<div class="h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm">
			<div class="flex flex-col items-center p-6">
				<div class="mb-4 flex items-center">
					<h3 class="mr-2 text-xl font-semibold">WordPress</h3>
					<img
						src="/img/wordpress-logo.svg"
						alt="logo-wordpress"
						class="w-[50px]"
						width="50"
						height="50"
					/>
				</div>
				<p class="mb-4 text-gray-600">
					De manier om snel en budgetvriendelijke een website op te zetten is WordPress. Met weinig
					budget kan je met succes een mooie website bouwen.
				</p>
				<a href="/methoden/wordpress/">
					<button
						class="inline-flex h-14 w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white md:h-10"
						>Meer informatie over een WordPress site
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
							class="lucide lucide-chevron-right ml-2 h-5 w-5"><path d="m9 18 6-6-6-6"></path></svg
						>
					</button>
				</a>
			</div>
		</div>
		<div class="h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm">
			<div class="flex flex-col items-center p-6">
				<div class="mb-4 flex items-center">
					<h3 class="mr-2 text-xl font-semibold">Static website</h3>
					<img
						src="/img/svelte-logo.svg"
						alt="logo-svelte"
						class="w-[50px]"
						width="50"
						height="50"
					/>
				</div>

				<p class="mb-4 text-gray-600">
					Een statische website is een website zonder CMS (content management systeem) zoals
					WordPress bijvoorbeeld. Ideaal voor websites zonder onderhoud.
				</p>
				<a href="/methoden/statische-website/">
					<button
						class="inline-flex h-14 w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white md:h-10"
						>Meer informatie over een statische website
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
							class="lucide lucide-chevron-right ml-2 h-5 w-5"><path d="m9 18 6-6-6-6"></path></svg
						>
					</button>
				</a>
			</div>
		</div>
		<div class="h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm">
			<div class="flex flex-col items-center p-6">
				<div class="mb-4 flex items-center">
					<h3 class="mr-2 text-xl font-semibold">Headless CMS</h3>
					<img
						src="/img/wordpress-logo.svg"
						alt="logo-wordpress"
						class="w-[50px]"
						width="50"
						height="50"
					/>
					<img
						src="/img/svelte-logo.svg"
						alt="logo-svelte"
						class="ml-2 w-[50px]"
						width="50"
						height="50"
					/>
				</div>
				<p class="mb-4 text-gray-600">
					Headless betekent dat de front-end en de back-end van elkaar losgekoppeld zijn. Ideaal
					voor website met veel bezoek en waar dagelijks veel werk in wordt verricht.
				</p>
				<a href="/methoden/headless/">
					<button
						class="inline-flex h-14 w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white md:h-10"
						>Meer informatie over een Headless CMS
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
							class="lucide lucide-chevron-right ml-2 h-5 w-5"><path d="m9 18 6-6-6-6"></path></svg
						>
					</button>
				</a>
			</div>
		</div>
	</div>
</section>
