<script>
	import { page } from '$app/stores';
</script>

<section class="mx-auto max-w-screen-xl px-6 py-12 md:py-24">
	<div class="flex items-center justify-center px-[25px]">
		<h1 class="text-3xl md:text-5xl">{$page.status}: {$page.error.message}</h1>
	</div>
	<div class="item-center mx-auto max-w-[500px] px-[25px] py-8 pb-8 md:gap-4">
		<div class="flex justify-center">
			<a href="/" aria-label="button link to homepage">
				<button
					class="x mt-4 flex items-center justify-between rounded-lg bg-[#00A9FF] py-3 pl-8 pr-4 font-normal text-white transition hover:-translate-y-1 hover:bg-[#0088CC]"
					aria-label="My work"
				>
					<span>Terug naar homepage</span>
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
			</a>
		</div>
		<!-- <div>
			<a href="/contact/" aria-label="button link to contact page">
				<button
					class="mt-4 flex w-full items-center justify-between rounded-lg border bg-white py-3 pl-8 pr-4 font-normal text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white"
					aria-label="Contact me"
				>
					<span>Contact me</span>
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
			</a>
		</div> -->
	</div>
</section>
