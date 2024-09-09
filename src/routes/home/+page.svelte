<script>
	import Container from '$lib/components/Container.svelte';
	import Error from '../+error.svelte';
</script>

<svelte:head>
	<link rel="canonical" href="https://jojobee.nl" />
	<meta name="description" content="Ik maak website op maat voor jou en supersnel" />
	<meta name="robots" content="index" />
	<meta property="og:title" content="JojoBee: websites op maat &copy; {new Date().getFullYear()}" />
	<meta property="og:url" content="https://jojobee.nl" />
	<meta property="og:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta property="og:image:alt" content="Logo JojoBee" />
	<meta property="og:type" content="WebPage" />
	<meta property="og:description" content="Ik maak website op maat voor jou en supersnel" />
	<meta property="og:locale" content="nl" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="JojoBee: websites op maat &copy; {new Date().getFullYear()}"
	/>
	<meta name="twitter:url" content="https://jojobee.nl" />
	<meta name="twitter:description" content="Ik maak website op maat voor jou en supersnel" />
	<meta name="twitter:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta name="twitter:image:alt" content="Logo JojoBee" />

	<!-- {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`} -->
</svelte:head>

<!-- Intro -->
<section class="py-20 md:py-32">
	<Container>
		<div class="grid grid-cols-2 items-center max-[768px]:grid-cols-1">
			<div class="px-[25px]">
				<h1 class="mb-4 text-3xl md:text-5xl">Welcome bij JojoBee!</h1>
				<p>
					Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
					bouwen van websiteprojecten volgens de beunhaas-methode.
				</p>
				<div class="item-center pb-8">
					<div>
						<button
							class="mt-4 flex items-center justify-between rounded-lg bg-[#00A9FF] px-8 py-3 font-normal text-white transition hover:-translate-y-1 hover:opacity-70"
							aria-label="My work"
						>
							<span>View my work</span>
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
								class="lucide lucide-chevron-right ml-2 h-5 w-5"
								data-id="66"><path d="m9 18 6-6-6-6"></path></svg
							>
						</button>
					</div>
				</div>
			</div>
			<div class="mx-auto">
				<enhanced:img
					src="/static/Joey-and-Emilio.jpg"
					class="h-64 w-64 items-center rounded-full border-4 border-[#00A9FF] object-cover object-top shadow-lg md:h-80 md:w-80"
					alt="Joey en zijn hond"
				/>
			</div>
		</div>
	</Container>
</section>

<!-- Overview services -->
<section class="py-10">
	<Container>
		<div>
			<h2 class="mb-4 text-center text-2xl md:text-4xl">Waar ik jou mee kan helpen</h2>
		</div>
		<div class="grid gap-8 py-10 md:grid-cols-3">
			<div
				class="bg-card text-card-foreground h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm"
			>
				<div class="flex flex-col items-center p-6">
					<div class="mb-4 flex items-center">
						<h3 class="mr-2 text-xl font-semibold">Budget site</h3>
						<img
							src="./img/wordpress-logo.svg"
							alt="logo-wordpress"
							class="w-[50px]"
							width="50"
							height="50"
						/>
					</div>
					<p class="mb-4 text-gray-600">
						Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
						bouwen van websiteprojecten volgens de beunhaas-methode.
					</p>
					<button
						class="ring-offset-background focus-visible:ring-ring border-input bg-background inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						data-id="44">View Project</button
					>
				</div>
			</div>
			<div
				class="bg-card text-card-foreground h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm"
			>
				<div class="flex flex-col items-center p-6">
					<div class="mb-4 flex items-center">
						<h3 class="mr-2 text-xl font-semibold">Static website</h3>
						<img
							src="./img/svelte-logo.svg"
							alt="logo-svelte"
							class="w-[50px]"
							width="50"
							height="50"
						/>
					</div>

					<p class="mb-4 text-gray-600">
						Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
						bouwen van websiteprojecten volgens de beunhaas-methode.
					</p>
					<button
						class="ring-offset-background focus-visible:ring-ring border-input bg-background inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						data-id="44">View Project</button
					>
				</div>
			</div>
			<div
				class="bg-card text-card-foreground h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm"
			>
				<div class="flex flex-col items-center p-6">
					<div class="mb-4 flex items-center">
						<h3 class="mr-2 text-xl font-semibold">Headless CMS</h3>
						<img
							src="./img/wordpress-logo.svg"
							alt="logo-wordpress"
							class="w-[50px]"
							width="50"
							height="50"
						/>
						<img
							src="./img/svelte-logo.svg"
							alt="logo-svelte"
							class="ml-2 w-[50px]"
							width="50"
							height="50"
						/>
					</div>
					<p class="mb-4 text-gray-600">
						Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
						bouwen van websiteprojecten volgens de beunhaas-methode.
					</p>
					<button
						class="ring-offset-background focus-visible:ring-ring border-input bg-background inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						data-id="44">View Project</button
					>
				</div>
			</div>
		</div>
	</Container>
</section>

<!-- Portfolio -->
<section class="bg-gray-50 px-[25px] py-20">
	<Container>
		<div>
			<h2 class="mb-4 text-center text-2xl md:text-4xl">Mijn bijdragen</h2>
		</div>
		<div class="grid gap-8 py-10 md:grid-cols-3">
			<div
				class="text-card-foreground h-full rounded-lg border bg-white shadow-sm"
				data-id="53"
				data-v0-t="card"
			>
				<div class="flex flex-col items-center p-6 text-center" data-id="54">
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
						class="lucide lucide-code h-8 w-8 text-[#00A9FF]"
						data-id="45"
						><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"
						></polyline></svg
					>
					<h3 class="mb-2 mt-4 text-xl font-semibold" data-id="55">Custom Web Development</h3>
					<p class="text-gray-600" data-id="56">
						Tailored solutions to meet your unique business needs.
					</p>
				</div>
			</div>
			<div
				class="text-card-foreground h-full rounded-lg border bg-white shadow-sm"
				data-id="53"
				data-v0-t="card"
			>
				<div class="flex flex-col items-center p-6 text-center" data-id="54">
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
						class="lucide lucide-code h-8 w-8 text-[#00A9FF]"
						data-id="45"
						><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"
						></polyline></svg
					>
					<h3 class="mb-2 mt-4 text-xl font-semibold" data-id="55">Custom Web Development</h3>
					<p class="text-gray-600" data-id="56">
						Tailored solutions to meet your unique business needs.
					</p>
				</div>
			</div>
			<div
				class="text-card-foreground h-full rounded-lg border bg-white shadow-sm"
				data-id="53"
				data-v0-t="card"
			>
				<div class="flex flex-col items-center p-6 text-center" data-id="54">
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
						class="lucide lucide-code h-8 w-8 text-[#00A9FF]"
						data-id="45"
						><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"
						></polyline></svg
					>
					<h3 class="mb-2 mt-4 text-xl font-semibold" data-id="55">Custom Web Development</h3>
					<p class="text-gray-600" data-id="56">
						Tailored solutions to meet your unique business needs.
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>

<!-- Maak kennis met Joey -->
<section class="px-[25px] py-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl">
			<div class="grid grid-cols-1 items-center gap-x-8 md:grid-cols-3">
				<div class="col-span-1 max-md:pb-8">
					<enhanced:img
						src="/static/Joey-learn-to-know.jpg"
						alt="Joey standing"
						class="w-full rounded-full border-4 border-[#00A9FF] object-cover shadow-lg max-md:mx-auto"
					/>
				</div>
				<div class="col-span-2">
					<h2 class="text-2xl md:mb-4 md:text-4xl">Maak kennis met Joey</h2>
					<p class=" py-4 md:py-6">
						Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
						bouwen van websiteprojecten volgens de beunhaas-methode.
					</p>
					<button
						class="mt-4 flex items-center justify-between rounded-lg border bg-white py-3 pl-4 pr-4 font-normal text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white"
						aria-label="Contact me"
					>
						<span>Learn more about me</span>
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
							class="lucide lucide-chevron-right ml-2 h-5 w-5"
							data-id="66"><path d="m9 18 6-6-6-6"></path></svg
						>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
