<script>
	import Container from '$lib/components/Container.svelte';
</script>

<svelte:head>
	<link rel="canonical" href="https://jojobee.nl" />
	<meta name="description" content="Ik maak website op maat voor jou en supersnel" />
	<meta name="robots" content="noindex" />
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
</svelte:head>

<!-- Hero Section -->
<section class="py-20 md:py-32">
	<Container>
		<div class="grid grid-cols-2 items-center gap-12 max-[768px]:grid-cols-1 lg:gap-20">
			<div class="px-[25px]">
				<h1 class="mb-4 text-3xl md:text-5xl">Welcome bij JojoBee!</h1>
				<p>
					Hoi ik ben Joey, een rasechte, positief ingestelde en enthousiaste Leidenaar met een
					passie voor online webdevelopment. Sta altijd klaar voor mijn collega's (behalve op 3
					oktober). Leergierig en loopt niet weg voor een uitdaging. Is zelf pas tevreden als andere
					mensen dat ook zijn.
				</p>
				<div class="item-center pb-8">
					<div>
						<a href="/portfolio/" aria-label="Link naar portfolio">
							<button class="btn-primary mt-4" aria-label="My work">
								<span>Bekijk mijn werk</span>
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
								>
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</button>
						</a>
					</div>
				</div>
			</div>

			<!-- Decorative Hero Image -->
			<div class="relative animate-fade-up opacity-0 stagger-2">
				<div class="relative mx-auto aspect-square max-w-md">
					<!-- Decorative rings -->
					<div
						class="absolute inset-0 animate-float rounded-full border-2 border-dashed border-primary-200"
					></div>
					<div class="absolute inset-4 rounded-full border-2 border-dashed border-primary-100"></div>

					<!-- Image -->
					<div
						class="absolute inset-8 overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-primary-400 p-1 shadow-2xl shadow-primary-500/25"
					>
						<enhanced:img
							src="/static/Joey-and-Emilio.jpg"
							class="h-full w-full rounded-full object-cover object-top"
							alt="Joey en zijn hond Emilio"
						/>
					</div>

					<!-- Floating badges -->
					<div
						class="absolute -right-4 top-1/4 rounded-xl bg-white p-3 shadow-xl shadow-slate-200/50"
					>
						<img src="/img/svelte-logo.svg" alt="Svelte" class="h-8 w-8" />
					</div>
					<div
						class="absolute -left-4 bottom-1/4 rounded-xl bg-white p-3 shadow-xl shadow-slate-200/50"
					>
						<img src="/img/wordpress-logo.svg" alt="WordPress" class="h-8 w-8" />
					</div>
				</div>
			</div>
		</div>
	</Container>
</section>

<!-- Overview services -->
<section class="py-10">
	<Container>
		<div>
			<h2 class="section-title">Mijn methoden</h2>
		</div>
		<div class="grid gap-8 py-10 md:grid-cols-3">
			<div class="card card-accent card-hover h-full">
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
						De manier om snel en budgetvriendelijke een website op te zetten is WordPress. Met
						weinig budget kan je met succes een mooie website bouwen.
					</p>
					<a href="/methoden/wordpress/">
						<button class="btn-secondary w-full text-sm ">
							<span>Lees meer over een WordPress site</span>
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
			<div class="card card-accent card-hover h-full">
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
						<button class="btn-secondary w-full text-sm">
							<span>Lees meer over een statische website</span>
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
							>
								<path d="m9 18 6-6-6-6"></path>
							</svg>
						</button>
					</a>
				</div>
			</div>
			<div class="card card-accent card-hover h-full">
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
						voor websites met veel bezoek en waar dagelijks veel werk in wordt verricht.
					</p>
					<a href="/methoden/headless/">
						<button class="btn-secondary w-full text-sm">
							<span>Lees meer over een Headless CMS</span>
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
							>
								<path d="m9 18 6-6-6-6"></path>
							</svg>
						</button>
					</a>
				</div>
			</div>
		</div>
	</Container>
</section>

<!-- Portfolio Section -->
<section class="bg-gray-50 px-[25px] py-20">
	<Container>
		<div>
			<h2 class="section-title">Mijn bijdragen</h2>
		</div>
		<div class="grid gap-8 py-10 md:grid-cols-3">
			<!-- DitjesenDatjes -->
			<a href="/portfolio/dend/" class="portfolio-card group">
				<div class="portfolio-card-image">
					<div class="absolute inset-0 flex items-center justify-center p-8">
						<enhanced:img
							src="/static/img/portfolio/logo.png"
							alt="DitjesenDatjes logo"
							class="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
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
				<div class="p-6 text-center">
					<h3 class="mb-2 text-xl font-semibold">DitjesenDatjes</h3>
					<p class="text-gray-600">
						In opdracht van Trusted Media heb ik in dienst van Performance Department samen met
						mijn collega Hessel Middendorp een nieuwe opzet gerealiseerd.
					</p>
				</div>
			</a>

			<!-- Bukett -->
			<a href="/portfolio/bukett/" class="portfolio-card group">
				<div class="portfolio-card-image">
					<div class="absolute inset-0 flex items-center justify-center p-8">
						<enhanced:img
							src="/static/img/portfolio/Bukett_Woordmerk_RGB_Zwart_144dpi.png"
							alt="Bukett logo"
							class="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
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
				<div class="p-6 text-center">
					<h3 class="mb-2 text-xl font-semibold">Bukett</h3>
					<p class="text-gray-600">
						In opdracht van Doxflow B.V. heb ik in dienst van Performance Department de website
						https://www.bukett.nl gebouwd.
					</p>
				</div>
			</a>

			<!-- AMS Advocaten -->
			<a href="/portfolio/ams-advocaten/" class="portfolio-card group">
				<div class="portfolio-card-image">
					<div class="absolute inset-0 flex items-center justify-center p-8">
						<enhanced:img
							src="/static/img/portfolio/logo-ams-advocaten.png"
							alt="AMS Advocaten logo"
							class="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
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
				<div class="p-6 text-center">
					<h3 class="mb-2 text-xl font-semibold">AMS Advocaten</h3>
					<p class="text-gray-600">
						In opdracht van AMS Advocaten heb ik in dienst van Performance Department samen met
						mijn collega Hessel Middendorp een nieuwe opzet gerealiseerd.
					</p>
				</div>
			</a>
		</div>
		<div class="flex justify-center">
			<a href="/portfolio/" aria-label="button link naar portfolio">
				<button class="btn-primary mt-4" aria-label="Contact me">
					<span>Bekijk alle bijdragen</span>
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
					>
						<path d="m9 18 6-6-6-6"></path>
					</svg>
				</button>
			</a>
		</div>
	</Container>
</section>
