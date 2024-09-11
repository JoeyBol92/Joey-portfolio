<script>
	import Container from '$lib/components/Container.svelte';

	let open = false;
</script>

<header class="border-b-[2px] border-[#E0E5E6]">
	<Container>
		<div class="relative flex items-center justify-end bg-white py-4">
			<div class="absolute left-0 top-0 w-[180px] bg-white">
				<a href="/" aria-label="Link to homepage">
					<img
						src="/img/logo-jojobee.svg/"
						alt=""
						class="w-auto px-4 pb-4 pt-6 max-[768px]:mt-[-7px] max-[768px]:w-[120px]"
						width="180"
						height="76"
					/>
				</a>
			</div>
			<div class="hidden items-center font-bold md:flex">
				<ul class="ml-auto flex space-x-16 py-4 text-[#000]">
					<li>
						<a href="/methoden/" class="hover:text-[#00A9FF] active:text-blue-700">Methoden</a>
					</li>
					<li>
						<a href="/portfolio/" class="hover:text-[#00A9FF] active:text-blue-700">Portfolio</a>
					</li>
					<li><a href="/contact/" class="hover:text-[#00A9FF] active:text-blue-700">Contact</a></li>
				</ul>
			</div>
			<button
				class="min-[769px]:hidden"
				type="button"
				on:click={() => (open = !open)}
				aria-label="Mobile menu button open"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					data-slot="icon"
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
	<div
		class="fixed inset-0 z-50 -translate-y-full bg-white duration-300"
		class:!translate-y-0={open}
	>
		<div class="flex justify-end p-4">
			<button type="button" on:click={() => (open = !open)} aria-label="Mobile menu button close">
				x
			</button>
		</div>
		<ul class="mx-auto py-4 text-center text-[#000]">
			<li>
				<a href="/methoden/" class="hover:text-blue-700 active:text-blue-700">Methoden</a>
			</li>
			<li><a href="/portfolio/" class="hover:text-blue-700 active:text-blue-700">Portfolio</a></li>
			<li><a href="/contact/" class="hover:text-blue-700 active:text-blue-700">Contact</a></li>
		</ul>
	</div>
</header>
