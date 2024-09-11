<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let data;
</script>

<section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
	<div class="mb-8 flex items-center justify-center px-[25px]">
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
			class="lucide lucide-code h-12 w-12 text-[#00A9FF]"
			data-id="1"
			><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"
			></polyline></svg
		>
		<h1 class="ml-4 text-3xl md:text-5xl">Titel</h1>
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
						<!-- Each begin -->
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
							Eigenschap placeholder
						</li>
						<!-- Each end -->
					</ul>
				</div>
			</div>
			<div class=" ext-card-foreground rounded-lg border shadow-sm">
				<div class="p-6">
					<h2 class="mb-4 text-2xl font-bold">Technieken</h2>
					<div class="flex flex-wrap gap-2">
						<!-- Each begin -->
						<span class="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800">WordPress</span>
						<!-- Each end -->
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
					<!-- Each begin -->
					<div class="flex">
						<div class="mr-4 flex-shrink-0">
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A9FF] text-white"
							>
								1
							</div>
						</div>
						<div>
							<h3 class="text-xl font-semibold">Placeholder h3</h3>
							<p class="text-gray-600">Test</p>
						</div>
					</div>
					<!-- Each end -->
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
				<ul class="grid gap-4 md:grid-cols-2">
					<!-- Each begin -->
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
						Voordeel
					</li>
					<!-- Each end -->
				</ul>
			</div>
		</div>
	</div>
</div>
