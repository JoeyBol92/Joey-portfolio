<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="container mx-auto max-w-7xl px-6 sm:px-8">
	{@render children?.()}
</div>
