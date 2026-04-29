<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
</svelte:head>

<section style="padding: 120px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<div style="max-width: 560px">
			<div
				style="font-family: var(--font-display); font-size: clamp(80px, 12vw, 120px); font-weight: 800; color: var(--color-border); line-height: 1; margin-bottom: 24px"
			>
				{$page.status}
			</div>
			<div class="eyebrow">Pagina niet gevonden</div>
			<h1 style="margin-bottom: 16px">{$page.error?.message}</h1>
			<p style="margin-bottom: 32px">De pagina die je zoekt bestaat niet of is verplaatst.</p>
			<a href="/" class="btn btn-primary">Terug naar homepage →</a>
		</div>
	</div>
</section>
