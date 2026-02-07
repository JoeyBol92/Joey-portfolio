<script>
	import Container from '$lib/components/Container.svelte';

	let open = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<header
	class="fixed left-0 right-0 top-0 z-50 border-b-[2px] border-[#E0E5E6] bg-white transition-all duration-300"
	class:glass={scrolled}
	class:!border-transparent={scrolled}
>
	<Container>
		<div class="relative flex items-center justify-between py-4">
			<a href="/" aria-label="Link to homepage" class="flex items-center">
				<img
					src="/img/logo-jojobee.svg"
					alt="JojoBee logo"
					class="h-10 w-auto max-[768px]:h-8"
					width="180"
					height="44"
				/>
			</a>

			<nav class="hidden items-center font-bold md:flex">
				<ul class="ml-auto flex space-x-16 py-4 text-[#000]">
					<li>
						<a href="/methoden/" class="hover:text-[#00A9FF] active:text-blue-700">Methoden</a>
					</li>
					<li>
						<a href="/portfolio/" class="hover:text-[#00A9FF] active:text-blue-700">Portfolio</a>
					</li>
				</ul>
			</nav>

			<button
				class="min-[769px]:hidden"
				type="button"
				onclick={() => (open = !open)}
				aria-label="Mobile menu button open"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</Container>
</header>

<!-- Mobile menu overlay -->
<div
	class="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300"
	class:opacity-0={!open}
	class:pointer-events-none={!open}
	onclick={() => (open = false)}
	role="button"
	tabindex="-1"
	aria-label="Close menu"
	onkeydown={(e) => e.key === 'Escape' && (open = false)}
></div>

<!-- Mobile menu panel -->
<div
	class="fixed right-0 top-0 z-[70] h-full w-80 max-w-[calc(100%-3rem)] translate-x-full bg-white shadow-2xl transition-transform duration-300"
	class:!translate-x-0={open}
>
	<div class="flex items-center justify-between border-b border-[#E0E5E6] p-4">
		<span class="font-bold">Menu</span>
		<button
			type="button"
			onclick={() => (open = !open)}
			aria-label="Mobile menu button close"
			class="flex h-10 w-10 items-center justify-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="h-5 w-5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<ul class="mx-auto space-y-4 p-6 text-[#000]">
		<li>
			<a
				href="/methoden/"
				class="block py-2 font-bold hover:text-[#00A9FF]"
				onclick={() => (open = false)}
			>
				Methoden
			</a>
		</li>
		<li>
			<a
				href="/portfolio/"
				class="block py-2 font-bold hover:text-[#00A9FF]"
				onclick={() => (open = false)}
			>
				Portfolio
			</a>
		</li>
	</ul>
</div>

<!-- Spacer for fixed header -->
<div class="h-[72px]"></div>
