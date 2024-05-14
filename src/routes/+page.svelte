<script>
	import Container from '$lib/components/Container.svelte';
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
<section class="py-10">
	<Container>
		<div class="grid grid-cols-2 items-center max-[768px]:grid-cols-1">
			<div class="px-[25px]">
				<h1 class="mb-4 text-5xl">Welcome bij JojoBee!</h1>
				<p>
					Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
					bouwen van websiteprojecten volgens de beunhaas-methode.
				</p>
				<div class="item-center grid grid-cols-2 gap-4 pb-8">
					<div>
						<button
							class="mt-4 w-full rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white transition hover:-translate-y-1 hover:opacity-70"
							aria-label="My work"
						>
							My work
						</button>
					</div>
					<div>
						<button
							class="mt-4 w-full rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white transition hover:-translate-y-1 hover:opacity-70"
							aria-label="Contact me"
						>
							Contact me
						</button>
					</div>
				</div>
			</div>
			<div class="mx-auto">
				<enhanced:img
					src="/static/Joey-and-Emilio.jpg"
					class="h-[400px] w-full rounded-xl object-cover md:h-[650px]"
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
			<h2 class="mb-4 text-center text-4xl">Waar ik jou mee kan helpen</h2>
		</div>
		<div class="grid grid-cols-3 gap-6 py-10 max-[991px]:grid-cols-2 max-[768px]:grid-cols-1">
			<!-- Service 1 -->
			<div class="flex flex-col items-center rounded-3xl bg-[#EFEFEF] p-10">
				<div class="mb-4 flex items-center">
					<h2 class="mr-2 text-2xl">Budget site</h2>
					<img
						src="./img/wordpress-logo.svg"
						alt="logo-wordpress"
						class="w-[50px]"
						width="50"
						height="50"
					/>
				</div>
				<div class="mb-4">
					<p class="py-6">
						Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
						bouwen van websiteprojecten volgens de beunhaas-methode.
					</p>

					<button
						class="w-full rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white transition hover:-translate-y-1 hover:opacity-70"
						aria-label="My work"
					>
						My work
					</button>
				</div>
			</div>

			<!-- Service 2 -->
			<div class="flex flex-col items-center rounded-3xl bg-[#EFEFEF] p-10">
				<div class="mb-4 flex items-center">
					<h2 class="mr-2 text-2xl">Static website</h2>
					<img
						src="./img/svelte-logo.svg"
						alt="logo-svelte"
						class="w-[50px]"
						width="50"
						height="50"
					/>
				</div>
				<div class="mb-4">
					<p class="py-6">
						Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
						bouwen van websiteprojecten volgens de beunhaas-methode.
					</p>

					<button
						class="w-full rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white transition hover:-translate-y-1 hover:opacity-70"
						aria-label="My work"
					>
						My work
					</button>
				</div>
			</div>

			<!-- Service 3 -->
			<div class="flex flex-col items-center rounded-3xl bg-[#EFEFEF] p-10">
				<div class="mb-4 flex items-center">
					<h2 class="mr-2 text-2xl">Headless CMS</h2>
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
				<div class="mb-4">
					<p class="py-6">
						Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
						bouwen van websiteprojecten volgens de beunhaas-methode.
					</p>

					<button
						class="w-full translate-y-1 rounded-lg bg-[#00A9FF] px-8 py-5 font-normal text-white transition hover:-translate-y-1 hover:opacity-70"
						aria-label="My work"
					>
						My work
					</button>
				</div>
			</div>
		</div>
	</Container>
</section>

<!-- Maak kennis met Joey -->
<section class=" px-[25px] py-10">
	<Container>
		<div class="grid grid-cols-1 items-center gap-x-8 md:grid-cols-3">
			<div class="col-span-2">
				<h2 class="mb-4 text-4xl">Maak kennis met Joey</h2>
				<p class="py-6">
					Hoi ik ben Joey, een echte beunhaas. Ik heb meer dan 7 jaar ervaring in het managen en
					bouwen van websiteprojecten volgens de beunhaas-methode.
				</p>
			</div>
			<div class="col-span-1">
				<enhanced:img
					src="/static/Joey-learn-to-know.jpg"
					alt="Joey standing"
					class="h-auto w-full rounded-[100%] object-cover"
				/>
			</div>
		</div>
	</Container>
</section>
