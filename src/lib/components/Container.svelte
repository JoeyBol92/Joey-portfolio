<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="container mx-auto max-w-7xl px-6 sm:px-8">
	{@render children?.()}
</div>
